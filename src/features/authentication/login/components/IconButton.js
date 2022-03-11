import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import colors from '../../../../themes/colors.config';

export function IconButton({text, icon, style, theme = 'dark', ...props}) {
  return (
    <TouchableOpacity style={[styles.container, style]} {...props}>
      <Image source={icon} style={styles.icon} />
      <Text
        style={[styles.text, theme === 'dark' ? styles.dark : styles.light]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: width - 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Inter-Black',
  },
  dark: {
    color: '#fff',
  },
  light: {
    color: colors.grey,
  },
});
