import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from '@navigation/Routes';
import {AuthScreen} from '@screens/auth/main/mainScreen';
import {MainStack} from '@navigation/MainStack';

const Stack = createStackNavigator();

export const InitialStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={Routes.auth.main}
      component={AuthScreen}
      options={{
        header: () => null,
      }}
    />
    <Stack.Screen
      name={Routes.mainStack.main}
      component={MainStack}
      options={{
        gestureEnabled: false,
        header: () => null,
      }}
    />
  </Stack.Navigator>
);
