import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { formatTime, passSecond } from '../../utils/time';
import styles from './styles';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    const { navigation } = props;
    this.state = { current: navigation.getParam('current') };

    this.counter = setInterval(() => {
      this.setState(({ current }) => ({ current: passSecond(current) }))
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.current.getSeconds() === 0) {
      clearInterval(this.counter);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.timer}>{formatTime(this.state.current)}</Text>
      </View>
    );
  }
};
