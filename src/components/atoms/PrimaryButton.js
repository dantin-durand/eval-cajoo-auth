import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Dimensions} from 'react-native';
import colors from '../../themes/colors.config';

export function PrimaryButton({children, style, isDesabled = false, ...props}) {
  return (
    <TouchableOpacity
      style={[styles.container, styles.disabled(isDesabled)]}
      {...props}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    padding: 15,
    width: width - 40,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Inter-Black',
    color: '#fff',
  },
  disabled: isDesabled => {
    return {
      opacity: isDesabled ? 0.5 : 1,
    };
  },
});
