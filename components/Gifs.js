import React, { Component } from 'react';
import { Button, FlatList, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

import * as giphy from '../giphy';
import GifCard from './GifCard';

export default class Gifs extends Component {
  state = {
    gifs: [],
    searchText: '',
    searchOffset: 10,
  };

  getUrl = (searchText, searchOffset) => (
    `${giphy.apiEndpoint}&q=${searchText}&offset=${searchOffset || 0}`
  );

  searchGifs = async () => {
    if (!this.state.searchText) return;

    const result = await fetch(this.getUrl(this.state.searchText));
    const json = await result.json();
    this.setState({ gifs: json.data });
  }

  moreGifs = async () => {
    if (!this.state.searchText || !this.state.gifs.length) return;

    const result = await fetch(this.getUrl(this.state.searchText, this.state.searchOffset));
    const json = await result.json();
    this.setState({ 
      gifs: json.data,
      searchOffset: this.state.searchOffset + 10,
    });
  }

  renderGif = ({ item }) => (
    <GifCard id={item.id} title={item.title} image={item.images.original} />
  );

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SearchBar 
          placeholder={'Search gifs'}
          autoCapitalize={'none'}
          value={this.state.searchText}
          onChangeText={searchText => this.setState({ searchText })}
          onBlur={this.searchGifs}
          style={{ fontSize: 30 }}
          autoFocus
          lightTheme
        />
        <FlatList
          data={this.state.gifs}
          keyExtractor={item => item.id}
          renderItem={this.renderGif}
        />
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Button 
              title={'Favorites'} 
              onPress={() => this.props.navigation.navigate('Favorites')} />
          </View>
          <View style={{ flex: 1 }}>
            <Button 
              title={'More'} 
              onPress={this.moreGifs}
            />
          </View>
        </View>
      </View>
    );
  }
}