import React, { Component } from 'react';
import { ImageBackground, View, Modal, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';

export default class Home extends Component {
  state = {
    modalVisible: false
  };

  showModal = (visible) => (
    this.setState({ modalVisible: visible })
  );

  render() {
    return (
      <ImageBackground source={require('../images/background.jpg')} style={styles.background}>
        <View style={styles.container}>
          <Modal
            animationType='fade'
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => this.showModal(!this.state.modalVisible)}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Welcome to gifir!</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title={'Search gifs'}
                fontSize={28}
                onPress={() => {
                  this.showModal(!this.state.modalVisible);
                  this.props.navigation.navigate('Gifs');
                }}
              />
            </View>
          </Modal>
          <View style={styles.titleContainer}>
            <Button
                title={'gifir'}
                fontSize={80}
                fontWeight={'bold'}
                onPress={() => this.showModal(!this.state.modalVisible)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title={'Search gifs'}
              fontSize={28}
              onPress={() => this.props.navigation.navigate('Gifs')}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: {
    width: '100%', 
    height: '100%'
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 44,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  buttonContainer: { 
    flex: 1, 
    justifyContent: 'flex-start' 
  }
});