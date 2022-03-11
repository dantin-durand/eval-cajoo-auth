import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Dimensions} from 'react-native';
import colors from '../../themes/colors.config';

export function SecondaryButton({children, style, ...props}) {
  return (
    <TouchableOpacity style={[styles.container, style]} {...props}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: width - 40,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
  },
  text: {
    fontSize: 13,
    fontFamily: 'Inter-Medium',
    textDecorationStyle: 'solid',
    color: colors.red,
    textDecorationLine: 'underline',
  },
});
