import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { SearchBar, Button } from 'react-native-elements';

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
    const json = result.json();
    this.setState({ gifs: json.data });
  }

  moreGifs = async () => {
    if (!this.state.searchText) return;

    const result = await fetch(this.getUrl(this.state.searchText, this.state.searchOffset));
    const json = result.json();
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
          placeholder={'SEARCH GIFS'}
          autoCapitalize={'none'}
          value={this.state.searchText}
          onChangeText={searchText => this.setState({ searchText })}
          onSubmitEditing={this.searchGifs}
          autoFocus
        />
        <FlatList
          data={this.state.gifs}
          keyExtractor={item => item.id}
          renderItem={this.renderGif}
        />
        <View style={{ backgroundColor: '#0099dd', flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Button backgroundColor={'#0099dd'} title={'Favorites'} />
          </View>
          <View style={{ flex: 1 }}>
            <Button 
              backgroundColor={'#0099dd'} 
              title={'More'} 
              onPress={this.moreGifs}
            />
          </View>
        </View>
      </View>
    );
  }
}