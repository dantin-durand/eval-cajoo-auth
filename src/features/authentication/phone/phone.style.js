import React from 'react';

import {StyleSheet} from 'react-native';
import colors from '../../../themes/colors.config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  paragraph: {
    marginTop: 5,
    fontFamily: 'Inter-Medium',
    fontSize: 13,
  },
  actions: {
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
  },
  conditionsText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 10,
  },
  link: {
    color: colors.red,
    textDecorationLine: 'underline',
  },
});

export default styles;
