import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../features/authentication/login/login.page';
import Landing from '../features/landing/landing.page';
import Phone from '../features/authentication/phone/phone.page';
import ConfirmationCode from '../features/authentication/confirmation_code/confirmationCode.page';

const Stack = createNativeStackNavigator();

const rootContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="landing" component={Landing} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="phone" component={Phone} />
        <Stack.Screen name="confirmationCode" component={ConfirmationCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default rootContainer;
