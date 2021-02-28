import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from '@screens/feeds/main/mainScreen';
import {ArticleScreen} from '@screens/feeds/article/articleScreen';
import {Routes} from '@navigation/Routes';
import {HeaderComponent} from '@components/shared/navigation/Header';

const Stack = createStackNavigator();

export const FeedStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={Routes.feed.main}
      component={MainScreen}
      options={{
        header: (props) => <HeaderComponent title={'Feed'} {...props} />,
      }}
    />
    <Stack.Screen name={Routes.feed.article} component={ArticleScreen} />
  </Stack.Navigator>
);
