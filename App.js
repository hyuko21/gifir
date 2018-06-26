import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Constants } from 'expo';

import Login from './components/Login';
import Gifs from './components/Gifs';

export default class App extends Component {
  state = {};

  onLogin = () => {
    this.setState({
      content: <Gifs />,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.state.content && <Login onLogin={this.onLogin} />}
        {this.state.content && <Gifs />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
