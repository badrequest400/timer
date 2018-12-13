import React, { Component } from 'react';
import { View, Text, TextInput, SectionList, Button, Image } from 'react-native';
import Exercise from '../exercise';
import styles from './styles.js';
import Context from '../../context';

export default class Designer extends Component {
  constructor(props) {
    super(props);
    this.state = { sections: [], name: '' };
  }
  render() {
    const { setContext, context } = this.props.navigation.state.params;
    return (
      <View>
        <TextInput
          placeholder="Workout Name"
          onChangeText={(val) => this.setState({ name: val })}
        />
          <Button
            title="Add new section"
            onPress={() => this.setState({ sections: [ ...this.state.sections, { title: `Section ${this.state.sections.length + 1}`, data: [] } ] })}
          />
        <SectionList
          renderItem={({ item }) => <Exercise editable/>}
          renderSectionHeader={({ section: { title } }) =>
            <View>
              <Text style={{fontWeight: 'bold'}}>{title}</Text>
              <Button
                title="Add new exercise"
                onPress={() => {
                  const sections = [ ...this.state.sections ];
                  const idx = sections.findIndex(({ title: section }) => section === title);
                  const newData = { ...sections[idx], data: [ ...sections[idx].data, { name: 'Something new' } ] };
                  sections[idx] = newData;
                  this.setState({ sections });
                }}
              />
            </View>
          }
          sections={this.state.sections}
        />
      <Button
        title="Save"
        onPress={() => {
          console.log('SAVING >>>>', this.state);
          console.log('SAVING >>>>', context);
          console.log('SAVING >>>>', setContext);

          setContext({ ...context, [this.state.name]: this.state.sections })
        }
        }
      />
      </View>
    )
  }
};
