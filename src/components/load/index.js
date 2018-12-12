import React from 'react';
import { Consumer } from '../../context';

export function Load(props) {
  return (
    <Consumer>
      {({ context }) => (
        <FlatList
          data={Object.keys(context)}
          renderItem={(item) => <Text style={ fontWeight: 'bold' }>{item}</Text>}
        />
      )}
    </Consumer>
  )
}
