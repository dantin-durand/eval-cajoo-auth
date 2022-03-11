import React from 'react';
import {Text, StyleSheet} from 'react-native';
import colors from '../../themes/colors.config';

export const Paragraph = ({children, style}) => {
  return <Text style={[styles.paragraph, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 16,
    fontFamily: 'Obviously',
    color: colors.grey,
  },
});
