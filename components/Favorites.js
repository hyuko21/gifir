import React, { Component } from 'react';
import { Button, FlatList, View } from 'react-native';

import GifCard from './GifCard';

import firebase from 'firebase';

export default class Favorites extends Component {
  state = {
    gifs: []
  };

  componentDidMount = async () => {
    if (this.state.gifs.length) return;

    const snap = await firebase.database().ref().once('value');

    const gifs = [];
    for (let gifId in snap.val()) {
      gifs.push({
        id: gifId,
        title: snap.val()[gifId].title,
        image: { url: snap.val()[gifId].url }
      });
    }

    this.setState({ gifs });
  }

  renderGif = ({ item }) => (
    <GifCard id={item.id} title={item.title} image={item.image} />
  );

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.gifs}
          keyExtractor={item => item.id}
          renderItem={this.renderGif}
        />
        <Button 
          backgroundColor={'#0099dd'} 
          title={'Search gifs'} 
          onPress={() => this.props.navigation.navigate('Gifs')}
        />
      </View>
    );
  }
}
