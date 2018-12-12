import React, { Component } from 'react';
import { View, Button } from 'react-native';
import styles from './styles';
import { Provider } from '../context';

const sevenSeconds = new Date(new Date(null).setSeconds(7))

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: {},
      setContext: function(ctx) {
        this.context = ctx
      }
    };
  }

  componentDidMount() {
    // FETCH DATA
    // ASYNC STORAGE
    // NETWORK
    const data = require('../../../data/mock.json');
    this.setState({ context: data });
  }

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <Provider value={this.state}>
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
      </Provider>
    )
  }
}
