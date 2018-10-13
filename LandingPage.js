import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class LandingPage extends React.Component {

  constructor(props){
      super(props);
      this.state = {};
      this.handleOnPress = this.handleOnPress.bind(this);
  }

  handleOnPress() {
    return this.props.navigation.navigate('Note');
  }

  render() {

    return (
    <View style={landing_style.background}>

      <Text style={landing_style.font}>PicNote Mobile</Text>
      <Image source = {require('./assets/note_taking.png')} style={{width:250,height:250,padding:50,margin:50}}/>

      <TouchableOpacity style={landing_style.button} onPress={() => this.props.navigation.navigate('Note')}>
        <Text style={landing_style.buttonFont}> Continue </Text>
      </TouchableOpacity>

    </View>
    );

  }
}

const landing_style = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fffffa',
    flexDirection:'column',
    justifyContent: 'center',
    padding: 10
  },

  button: {
    borderRadius: 30,
    backgroundColor: "#fa8072",
    padding: 10
  },

  buttonFont: {
    fontSize: 20,
    fontFamily: 'Noteworthy',
    fontWeight: '400',
    textAlign: 'center'
  },

  font: {
    fontSize: 55,
    fontFamily: 'Noteworthy',
    fontWeight: '100',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  }
});
