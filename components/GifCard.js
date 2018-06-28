import React, { Component } from 'react';
import { Tile } from 'react-native-elements';
import { View } from 'react-native';

import firebase from '../firebase';

export default class GifCard extends Component {
  state = {
    favorite: false,
  }

  onFavorite = () => {
    firebase.database().ref(this.props.id).set({
      title: this.props.title,
      url: this.props.image.url,
    });
    this.setState({ favorite: !this.state.favorite });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Tile
          featured
          title={this.props.title}
          imageSrc={{ uri: this.props.image.url }} 
          onPress={this.onFavorite} 
          icon={{
            size: 100,
            name: (this.state.favorite && 'favorite') || 'favorite-border',
            iconStyle: { 
              color: (this.state.favorite && '#ff000055') || '#00000000',
              textAlign: 'left'
            }
          }}
          contentContainerStyle={{ height: 100, padding: 0 }} />
      </View>
    );
  }
};