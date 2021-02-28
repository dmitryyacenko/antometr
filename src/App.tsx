import 'react-native-gesture-handler';
import React from 'react';
import {Linking, StatusBar} from 'react-native';
import {InitialStack} from '@navigation/InitialStack';
import {NavigationContainer} from '@react-navigation/native';
import Amplify, {Auth, Hub} from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <InitialStack />
      </NavigationContainer>
    </>
  );
};

export default App;
