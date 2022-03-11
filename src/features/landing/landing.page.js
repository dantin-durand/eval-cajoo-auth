import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {View, Image} from 'react-native';
import {
  PrimaryButton,
  Paragraph,
  SecondaryButton,
} from '../../components/atoms';

import styles from './landing.style';

export default function Landing() {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <Image
        source={require('../../assets/img/logo.png')}
        style={styles.logo}
      />
      <Paragraph>Vos courses en 3 clics !</Paragraph>

      <View style={styles.actions}>
        <PrimaryButton onPress={() => navigation.push('login')}>
          ME CONNECTER 👋
        </PrimaryButton>
        <SecondaryButton>Découvrir l'app</SecondaryButton>
      </View>
    </View>
  );
}
