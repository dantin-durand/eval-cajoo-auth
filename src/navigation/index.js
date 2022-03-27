import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../features/authentication/login/login.screen';
import Landing from '../features/landing/landing.screen';
import Phone from '../features/authentication/phone/phone.screen';
import ConfirmationCode from '../features/authentication/confirmation_code/confirmationCode.screen';
import Home from '../features/home/home.screen';

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
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default rootContainer;
