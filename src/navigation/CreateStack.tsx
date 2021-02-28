import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from '@screens/create/main/mainScreen';
import {Routes} from '@navigation/Routes';
import {HeaderComponent} from '@components/shared/navigation/Header';

const Stack = createStackNavigator();

export const CreateStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={Routes.create.main}
      component={MainScreen}
      options={{
        header: (props) => (
          <HeaderComponent title={'Something new'} {...props} />
        ),
      }}
    />
  </Stack.Navigator>
);
