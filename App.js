import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainRoutes } from './src/Routes/main.routes'
import { useLogin, AuthenticationProvider } from './src/context/authenticationProvide';

export default function App() {
  return (
    <NavigationContainer>
      <AuthenticationProvider>
        <MainRoutes/>
      </AuthenticationProvider>
    </NavigationContainer>
  );
}