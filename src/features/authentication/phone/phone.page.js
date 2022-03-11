import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';

import {Text, View} from 'react-native';

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
  return (
    <Container>
      <Header>Connexion</Header>
      <View style={styles.header}>
        <Paragraph>Quel est votre numéro ?</Paragraph>
        <Text style={styles.paragraph}>
          Pour que notre livreur puisse vous contacter 😀
        </Text>
      </View>
      <PhoneInput phone={phone} setPhone={handdlePhone} />
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
          onPress={() =>
            navigation.navigate('confirmationCode', {phone: phone})
          }>
          Continuer
        </PrimaryButton>
      </View>
    </Container>
  );
}
