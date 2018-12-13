import React from 'react';
import { FlatList, Text } from 'react-native';

export default function Load(props) {
  const data = props.navigation.getParam('data');
  return (
    <FlatList
      data={Object.keys(data)}
      renderItem={ ({ item }) => <Text>{item}</Text> }
    />
  )
}
