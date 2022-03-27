import React from 'react';

import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../themes/colors.config';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  paragraph: {
    marginTop: 5,
    fontFamily: 'Inter-Medium',
    fontSize: 13,
  },
  inputContainer: {
    flexDirection: 'row',
    width: width - 40,
    marginTop: 25,
  },
  subText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
  },
  link: {
    color: colors.red,
    textDecorationLine: 'underline',
  },
});

export default styles;
