import React from 'react';
import LandingPage from './LandingPage';
import NoteTaker  from './NoteTaker';
import Display from './Display';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default createStackNavigator(
  {
    Home: LandingPage,
    Note: NoteTaker,
    Display: Display,
  },
  {
    initialRouteName: "Home",
  }
);
