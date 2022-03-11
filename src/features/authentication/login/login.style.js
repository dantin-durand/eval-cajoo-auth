import React from 'react';

import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../themes/colors.config';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
    height: height,
    width: width,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 255,
    height: 115,
    marginBottom: 40,
  },
  actions: {
    marginTop: 20,
  },
  appleButton: {
    backgroundColor: '#050708',
    color: '#fff',
  },
  facebookButton: {
    backgroundColor: '#2078ec',
    color: '#fff',
  },
  googleButton: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    color: colors.grey,
  },
  phoneButton: {
    backgroundColor: colors.red,
    color: '#fff',
  },
});

export default styles;
