import React, { Component } from 'react';
import { View, Button } from 'react-native';
import styles from './styles';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Load"/>
        <Button title="Edit"/>
      </View>
    )
  }
}
