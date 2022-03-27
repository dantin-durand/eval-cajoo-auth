import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Auth} from 'aws-amplify';
import {
  Text,
  View,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import styles from './confirmationCode.style';

import {Container, Header} from '../../../components/molecules';
import {Paragraph} from '../../../components/atoms';

import InputCode from './components/inputCode';
import colors from '../../../themes/colors.config';

export default function ConfirmationCode({route: {params}}) {
  const navigation = useNavigation();

  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const handdleChange = async payload => {
    setCode(payload);

    if (payload.length === 6) {
      try {
        if (params.alreadyExist) {
          setLoading(true);
          await Auth.forgotPasswordSubmit(
            params.phone,
            payload,
            `${Date.now()}`,
          );
        } else {
          await Auth.confirmSignUp(params.phone, payload);
        }
        setLoading(false);

        navigation.navigate('home');
      } catch (error) {
        setLoading(false);
        Alert.alert('Code incorrect', 'veuillez réessayer', [
          {
            text: 'Fermer',
            style: 'cancel',
          },
        ]);
      }
    }
  };

  const resendCode = async () => {
    try {
      setLoading(true);
      if (params.alreadyExist) {
        await Auth.forgotPassword(params.phone);
      } else {
        await Auth.resendSignUp(params.phone);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert('Erreur', error.message, [
        {
          text: 'Fermer',
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
          {!loading ? (
            <View style={styles.header}>
              <Paragraph>Confirmez votre numéro !</Paragraph>
              <Text style={styles.paragraph}>
                Entrez le code envoyé au {params.phone}
              </Text>

              <View style={styles.inputContainer}>
                <InputCode code={code} setCode={handdleChange} position={1} />
              </View>

              <Text style={styles.subText}>
                Vous n'avez pas reçu le code ?{' '}
                <TouchableOpacity
                  onPress={resendCode}
                  style={styles.linkAction}>
                  <Text style={styles.link}>Renvoyer</Text>
                </TouchableOpacity>
              </Text>
            </View>
          ) : (
            <View style={styles.header}>
              <ActivityIndicator color={colors.grey} />
              <Text style={styles.paragraph}>Veuillez patienter...</Text>
            </View>
          )}
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
