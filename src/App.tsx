import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {InitialStack} from '@navigation/InitialStack';
import {NavigationContainer} from '@react-navigation/native';

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
