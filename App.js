import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Constants } from 'expo';

import Home from './components/Home';
import Gifs from './components/Gifs';
import Favorites from './components/Favorites';

class App extends Component {
  render() {
    return <View style={styles.container} />
  }
}

export default createStackNavigator({ 
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home',
      headerTitleStyle: { fontWeight: 'bold' },
    },
  }, 
  Gifs: {
    screen: Gifs,
    navigationOptions: {
      headerTitle: 'Gifs',
      headerTitleStyle: { fontWeight: 'bold' },
    },
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      headerTitle: 'Favorites',
      headerTitleStyle: { fontWeight: 'bold' },
    },
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
