import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SocialIcon, Divider } from 'react-native-elements';
import { Facebook } from 'expo';

import firebase from '../firebase';

export default class Login extends Component {

  onLogin = (method) => {
    switch (method) {
      case 'facebook':
        this.onLoginFacebook();
        break;
      case 'google+':
        this.onLoginGooglePlus();
    }

    this.props.navigation.navigate('Gifs');
  }

  onLoginGooglePlus = () => {
    return;
  }

  onLoginFacebook = () => {
    return;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Text style={{ fontSize: 78, fontWeight: 'bold', textAlign: 'center' }}>gifir</Text>
        </View>
        <View style={{ flex: 2, justifyContent: 'center' }}>
          <SocialIcon
            title={'Sign In With Google+'}
            button
            raised
            onPress={this.onLogin('google+')}
            type={'google-plus-official'}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
            <Divider style={{ flex: 1, backgroundColor: '#aaa' }}/>
            <Text style={{ color: '#888', fontWeight: 'bold' }}>  OR  </Text>
            <Divider style={{ flex: 1, backgroundColor: '#aaa' }}/>
          </View>
          <SocialIcon
            title={'Sign In With Facebook'}
            button
            raised
            onPress={this.onLogin('facebook')}
            type={'facebook'}
          />
        </View>
      </View>
    );
  }
}