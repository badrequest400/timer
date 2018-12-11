import React, { Component } from 'react';
import { View, Button } from 'react-native';
import styles from './styles';

const sevenSeconds = new Date(new Date(null).setSeconds(7))

export default class Home extends Component {

  render() {
    const { navigation: { navigate } } = this.props;

    return (
      <View style={styles.container}>
        <Button
          title="Load"
          onPress={() => navigate('Timer', { current: sevenSeconds })}
        />
        <Button
          title="New workout"
          onPress={() => navigate('Designer')}
        />
      </View>
    )
  }
}
