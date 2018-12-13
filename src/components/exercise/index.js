import React, { Component } from 'react';
import { View, TextInput, Text, Picker } from 'react-native';
import styles from './styles';
import { omit } from '../../utils';

export default class Exercise extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0, reps: 0, cooldown: 0, name: '' };
  }

  render() {
    const { editable, name } = this.props;
    const attributes = Object.keys(omit([ 'name', 'editable' ], this.state));
    return (
      <View style={styles.container}>
        {
          editable ?

          <TextInput
            style={styles.input}
            placeholder="Exercise"
            onChangeText={val => this.setState({ name: val })}
          />
          :
          <Text>{name}</Text>
        }

        <View style={styles.valuesContainer}>
          { editable ?

            attributes.map(attr =>
                <Picker
                  style={styles.picker}
                  selectedValue={this.state[attr]}
                  onValueChange={val => this.setState({ [attr]: val })}
                  itemStyle={styles.pickerItem}>
                  { Array.from({ length: 60 }).map((_, idx) => (<Picker.Item label={idx.toString()} value={idx} key={idx}/>)) }
                </Picker>)
            :
            attributes.map(attr => <Text>{`${attr}: ${this.props[attr]}`}</Text>)
          }
        </View>
      </View>
    )
  }
};
