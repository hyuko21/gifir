import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { SearchBar, Button } from 'react-native-elements';

import * as giphy from '../giphy';
import GifCard from './GifCard';

export default class Gifs extends Component {
  state = {
    gifs: [],
    content: null,
  };

  searchGifs = (text) => {
    fetch(`${giphy.apiEndpoint}q=${text}`).then(data => data.json())
      .then(json => this.setState({ gifs: json.data }));
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
          onSubmitEditing={this.searchGifs}
        />
        <FlatList
          data={this.state.gifs}
          keyExtractor={item => item.id}
          renderItem={this.renderGif}
        />
        <View style={{ backgroundColor: '#0099dd', flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Button backgroundColor={'#0099dd'} title={'Leave'} />
          </View>
          <View style={{ flex: 1 }}>
            <Button backgroundColor={'#0099dd'} title={'More'} />
          </View>
        </View>
      </View>
    );
  }
}