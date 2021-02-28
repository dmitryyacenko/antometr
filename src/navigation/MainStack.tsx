import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FeedStack} from './FeedStack';
import {CreateStack} from './CreateStack';
import {ProfileStack} from './ProfileStack';
import {TabBar} from '@components/navigation/TabBar';
import {Routes} from '@navigation/Routes';

const Tab = createBottomTabNavigator();

export const MainStack: React.FC = () => (
  <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
    <Tab.Screen name={Routes.feed.entry} component={FeedStack} />
    <Tab.Screen name={Routes.create.entry} component={CreateStack} />
    <Tab.Screen name={Routes.profile.entry} component={ProfileStack} />
  </Tab.Navigator>
);
