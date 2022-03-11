import React, {useState} from 'react';

import {View, TextInput, StyleSheet, Text} from 'react-native';
import colors from '../../../../themes/colors.config';
import CodeItem from './codeItem';

export default function InputCode({code, setCode, position, ...props}) {
  return (
    <View style={styles.container}>
      <CodeItem code={code[0]} isFocus />
      <CodeItem code={code[1]} />
      <CodeItem code={code[2]} />
      <CodeItem code={code[3]} />
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        value={code}
        onChangeText={setCode}
        autoFocus={true}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 5,
  },
  input: {
    position: 'absolute',
    height: 50,
    width: '100%',
    opacity: 0,
    textAlign: 'center',
  },
});
