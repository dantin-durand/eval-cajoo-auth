import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import colors from '../../themes/colors.config';

export const Header = ({children, showBackBtn = true, ...props}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.main} {...props}>
      {showBackBtn ? (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/img/back.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      ) : null}
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.red,
    width: '100%',
    height: 90,
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingVertical: 20,
    justifyContent: 'center',
  },
  iconContainer: {
    position: 'absolute',
    left: 20,
    bottom: 25,
  },
  icon: {
    width: 10,
    height: 15,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Obviously',
    color: '#fff',
  },
});
