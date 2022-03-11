import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';

import {
  Text,
  View,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import styles from './confirmationCode.style';

import {Container, Header} from '../../../components/molecules';
import {Paragraph} from '../../../components/atoms';

import InputCode from './components/inputCode';

export default function ConfirmationCode({route: {params}}) {
  const [code, setCode] = useState('');
  const handdleChange = payload => {
    setCode(payload);

    if (payload.length === 4) {
      Alert.alert('Code incorrect', 'veuillez réessayer', [
        {
          text: 'Fermer',
          onPress: () => setCode(''),
          style: 'cancel',
        },
      ]);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header showBackBtn={false}>Connexion</Header>
          <View style={styles.header}>
            <Paragraph>Confirmez votre numéro !</Paragraph>
            <Text style={styles.paragraph}>
              Entrez le code envoyé au +33{params.phone}
            </Text>

            <View style={styles.inputContainer}>
              <InputCode code={code} setCode={handdleChange} position={1} />
            </View>

            <Text style={styles.subText}>
              Vous n'avez pas reçu le code ?{' '}
              <Text style={styles.link}>Renvoyer</Text>
            </Text>
          </View>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
