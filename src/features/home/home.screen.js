import React from 'react';
import {
  Text,
  View,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import styles from './home.style';

import {Container, Header} from '../../components/molecules';
import {Paragraph} from '../../components/atoms';

export default function Home() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header showBackBtn={false}>Accueil</Header>
          <View style={styles.header}>
            <Paragraph>Bienvenue !</Paragraph>
            <Text style={styles.paragraph}>
              Cette page est en cours de développement.
            </Text>
          </View>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
