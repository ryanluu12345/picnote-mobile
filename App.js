import React from 'react';
import LandingPage from './LandingPage';
import NoteTaker  from './NoteTaker';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const redirect =  createStackNavigator ({
    Landing: {screen: LandingPage},
    Note: {screen: NoteTaker}
  });

export default class App extends React.Component {

  redirect;
  
  render() {
    return (
      <View style={styles.container}>
        <LandingPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
