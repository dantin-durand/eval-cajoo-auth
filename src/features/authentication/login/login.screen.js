import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {View} from 'react-native';
import {Paragraph} from '../../../components/atoms';

import styles from './login.style';
import {IconButton} from './components/IconButton';
import {Header} from '../../../components/molecules';

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <Header>Connexion</Header>
      <Paragraph>Connectez vous simplement !</Paragraph>
      <View style={styles.actions}>
        <IconButton
          icon={require('../../../assets/img/apple.png')}
          text="Connexion avec Apple"
          style={styles.appleButton}
        />
        <IconButton
          icon={require('../../../assets/img/facebook.png')}
          text="Connexion avec Facebook"
          style={styles.facebookButton}
        />
        <IconButton
          icon={require('../../../assets/img/google.png')}
          text="Connexion avec Google"
          style={styles.googleButton}
          theme="light"
        />
        <IconButton
          icon={require('../../../assets/img/phone.png')}
          text="Avec votre numéro !"
          style={styles.phoneButton}
          onPress={() => navigation.navigate('phone')}
        />
      </View>
    </View>
  );
}
