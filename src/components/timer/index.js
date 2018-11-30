import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { formatTime, passSecond } from '../../utils/time';
import styles from './styles';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { current: props.current };

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
      <View>
        <Text style={styles.timer}>{formatTime(this.state.current)}</Text>
      </View>
    );
  }
};
