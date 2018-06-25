import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SocialIcon, Button, Divider } from 'react-native-elements';
import { Constants } from 'expo';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'stretch' }}>
          <View style={{ flex: 1, justifyContent: 'space-around' }}>
            <Text style={{ fontSize: 78, fontWeight: 'bold', textAlign: 'center' }}>gifir</Text>
            <Button 
              title={'Sign In Anonymously'}
              borderRadius={50}
              raised
              backgroundColor={'#b3343f'}
              style={{ marginBottom: 20 }}
            />
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>  
          <SocialIcon
            title={'Sign In With Google+'}
            button
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
            type={'facebook'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
