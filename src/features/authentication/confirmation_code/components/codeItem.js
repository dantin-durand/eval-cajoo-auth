import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import colors from '../../../../themes/colors.config';

export default function CodeItem({code = '', isFocus = false}) {
  return (
    <View
      style={[styles.container, styles.focus(code.length === 1 || isFocus)]}>
      <Text style={styles.text}>{code}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    width: '100%',
    flexDirection: 'row',
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  text: {
    fontFamily: 'Inter-Black',
    textAlign: 'center',
  },
  focus: focused => {
    return {
      borderColor: focused ? colors.red : colors.lightGrey,
      borderWidth: 2,
    };
  },
});
