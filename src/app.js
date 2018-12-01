import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import RootStack from './navigation';

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />
  }
};
