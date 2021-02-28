import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from '@screens/profile/main/mainScreen';
import {Routes} from '@navigation/Routes';
import {HeaderComponent} from '@components/shared/navigation/Header';
import LogoutIcon from '@assets/profile/logout.svg';
const Stack = createStackNavigator();

export const ProfileStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        header: (props) => (
          <HeaderComponent
            Icon={LogoutIcon}
            onIconPress={() => {}}
            title={'Profile'}
            {...props}
          />
        ),
      }}
      name={Routes.profile.main}
      component={MainScreen}
    />
  </Stack.Navigator>
);
