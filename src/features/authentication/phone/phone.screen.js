import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Auth} from 'aws-amplify';

import {
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import styles from './phone.style';

import {Container, Header} from '../../../components/molecules';
import {Paragraph, PrimaryButton} from '../../../components/atoms';
import PhoneInput from './components/phoneInput';
import {regex} from './phone.helpers';

export default function Phone() {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [isNotValid, setIsNotValid] = useState(true);
  const handdlePhone = value => {
    setPhone(value);
    value.match(regex.phone) ? setIsNotValid(false) : setIsNotValid(true);
  };

  const login = async () => {
    const formatedPhone = `+33${phone.substring(1)}`;

    try {
      const {user} = await Auth.signUp({
        username: formatedPhone,
        password: `${Date.now()}`,
      });
      navigation.navigate('confirmationCode', {
        phone: user.username,
        alreadyExist: false,
      });
    } catch (error) {
      if (error.name === 'UsernameExistsException') {
        Auth.forgotPassword(formatedPhone)
          .then(data => {
            console.log('Forgot password: ', data);
            navigation.navigate('confirmationCode', {
              phone: formatedPhone,
              alreadyExist: true,
            });
          })
          .catch(err => {
            Alert.alert('Erreur', err.message, [
              {
                text: 'Fermer',
                style: 'cancel',
              },
            ]);
          });
      } else {
        console.log(error);
        Alert.alert('Erreur', error.message, [
          {
            text: 'Fermer',
            style: 'cancel',
          },
        ]);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>Connexion</Header>
          <View style={styles.header}>
            <Paragraph>Quel est votre numéro ?</Paragraph>
            <Text style={styles.paragraph}>
              Pour que notre livreur puisse vous contacter 😀
            </Text>
          </View>
          <PhoneInput phone={phone} setPhone={handdlePhone} autoFocus={true} />
          <View style={styles.actions}>
            <Text style={styles.conditionsText}>
              En cliquant sur "CONTINUER", vous acceptez la{' '}
              <Text style={styles.link}>Politique de Confidentialité</Text>, les{' '}
              <Text style={styles.link}>CGU</Text> et les{' '}
              <Text style={styles.link}>CGV</Text> de Cajoo.
            </Text>
            <PrimaryButton
              isDesabled={isNotValid}
              disabled={isNotValid}
              onPress={() => login()}>
              Continuer
            </PrimaryButton>
          </View>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
