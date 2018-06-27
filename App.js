import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Constants } from 'expo';

import Login from './components/Login';
import Gifs from './components/Gifs';

class App extends Component {
  render() {
    return <View style={styles.container} />
  }
}

export default createStackNavigator({ 
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: 'Login',
      headerTitleStyle: { fontWeight: 'bold', color: '#b3343f' },
    },
  }, 
  Gifs: {
    screen: Gifs,
    navigationOptions: {
      headerTitle: 'Gifs',
      headerTitleStyle: { fontWeight: 'bold', color: '#b3343f' },
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
