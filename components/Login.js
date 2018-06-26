import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SocialIcon, Button, Divider } from 'react-native-elements';

export default class Login extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'stretch' }}>
          <View style={{ flex: 1, justifyContent: 'space-around' }}>
            <Text style={{ fontSize: 78, fontWeight: 'bold', textAlign: 'center' }}>gifir</Text>
            <Button 
              title={'Sign In Anonymously'}
              borderRadius={50}
              raised
              onPress={() => this.props.onLogin()}
              backgroundColor={'#b3343f'}
              style={{ marginBottom: 20 }}
            />
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>  
          <SocialIcon
            title={'Sign In With Google+'}
            button
            raised
            onPress={() => this.props.onLogin()}
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
            onPress={() => this.props.onLogin()}
            type={'facebook'}
          />
        </View>
      </View>
    );
  }
}