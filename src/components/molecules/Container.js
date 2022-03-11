import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

export const Container = ({children, ...props}) => {
  return (
    <View style={styles.main} {...props}>
      {children}
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
    height: height,
    width: width,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
