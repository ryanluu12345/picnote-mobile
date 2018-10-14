import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, TouchableOpacity } from 'react-native';

export default class ThankYou extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
        this.handleOnPress = this.handleOnPress.bind(this);
    }

    handleOnPress() {
      return this.props.navigation.navigate('Home');
    }

    render () {
      return (
      <View style={styles.container}>
        <Text style={styles.thankStyle}>Thank You!</Text>
        <TouchableOpacity style={styles.circle} onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.textStyle}>Return to Home</Text>
        </TouchableOpacity>
      </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    padding:10,
    backgroundColor: '#ffffff'
  },

  thankStyle: {
    fontSize: 60,
    fontWeight: 'bold',
    fontFamily: 'Noteworthy',
    textAlign:'center',
  },

  textStyle: {
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Noteworthy',
    textAlign:'center',
  },

  circle: {
    marginTop: 50,
    borderRadius: 40,
    backgroundColor: "#fa8072",
    padding: 10
  },

});
