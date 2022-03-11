import React from 'react';

import {Dimensions, StyleSheet} from 'react-native';

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
    position: 'absolute',
    bottom: 50,
  },
});

export default styles;
