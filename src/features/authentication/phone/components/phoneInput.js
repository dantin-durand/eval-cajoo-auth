import React, {useState} from 'react';
import {
  TextInput,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import colors from '../../../../themes/colors.config';

export default function PhoneInput({phone, setPhone, ...props}) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={[styles.container, styles.focus(isFocused)]}>
      <Image
        source={require('../../../../assets/img/country.png')}
        style={styles.image}
      />
      <Text style={styles.text}>+33</Text>
      <TextInput
        onChangeText={setPhone}
        keyboardType="phone-pad"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={styles.input}
        value={phone}
        {...props}
      />
    </View>
  );
}
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    width: width - 40,
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  image: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  text: {
    fontFamily: 'Inter-Black',
    alignSelf: 'center',
    marginRight: 5,
  },
  input: {
    flex: 1,
    fontFamily: 'Inter-Black',
    letterSpacing: 0.6,
  },
  focus: focused => {
    return {
      borderColor: focused ? colors.red : colors.lightGrey,
      borderWidth: 2,
    };
  },
});
