import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import RootStack from './navigation';

const sevenSeconds = new Date(new Date(null).setSeconds(7))

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />
  }
};
