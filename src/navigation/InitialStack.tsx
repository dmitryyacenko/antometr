import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '@navigation/Routes';
import { AuthScreen } from '@screens/auth/main/mainScreen';
import { MainStack } from '@navigation/MainStack';
import { Auth, Hub } from 'aws-amplify';

const Stack = createStackNavigator();

export const InitialStack: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
  console.log(isAuthenticated);
  React.useEffect(() => {
    Auth.currentUserInfo().then((user) => {
      if (user && user.id) {
        setIsAuthenticated(true);
      }
    });
    Hub.listen('auth', ({payload: {event}}) => {
      switch (event) {
        case 'signIn':
          setIsAuthenticated(true);
          break;
        case 'signOut':
          setIsAuthenticated(false);
          break;
      }
    });
  }, []);
  return (
    <Stack.Navigator>
      {!isAuthenticated ? (
        <Stack.Screen
          name={Routes.auth.main}
          component={AuthScreen}
          options={{
            header: () => null,
          }}
        />
      ) : (
        <Stack.Screen
          name={Routes.mainStack.main}
          component={MainStack}
          options={{
            gestureEnabled: false,
            header: () => null,
          }}
        />
      )}
    </Stack.Navigator>
  );
};
