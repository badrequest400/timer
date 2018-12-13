import React, { Component, Fragment } from 'react';
import { View, Button } from 'react-native';
import styles from './styles';

const sevenSeconds = new Date(new Date(null).setSeconds(7))

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { context: {} };
  }

  setContext = ctx => {
    this.setState({ context: ctx });
  }

  componentDidMount() {
    // FETCH DATA
    // ASYNC STORAGE
    // NETWORK
    const data = require('../../../data/mock.json');
    this.setState({ context: { ...this.state.context, ...data } });
  }

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <View style={styles.container}>
        <Button
          title="Load"
          onPress={() => navigate('Load', { data: this.state.context })}
        />
        <Button
          title="New workout"
          onPress={() => navigate('Designer', { ...this.state, setContext: this.setContext })}
        />
      </View>
    )
  }
}
