import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

class LandingPage extends React.Component {
  render() {
    return (
    <View style={landing_style.background}>
      <Text style={landing_style.font}>PicNote Mobile</Text>
      <Image source = {require('./assets/note_taking.png')} style={{width:300,height:300,padding:50,margin:30}}/>
      <TouchableOpacity style={landing_style.button}>
        <Text style={landing_style.buttonFont}> Continue </Text>
      </TouchableOpacity>
    </View>
    );

  }
}

const landing_style = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: "#ADD8E6",
    padding: 15,
  },

  buttonFont: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center'
  },

  background: {
    backgroundColor: '#fffffa',
    justifyContent: 'center'
  },

  font: {
    fontSize: 60,
    fontWeight: '100',
    textAlign: 'center'
  }
});

export {LandingPage};
