import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {ProfileHeaderComponent} from '@components/profile/ProfileHeader';
const profilePic = require('@assets/card/feeds/profile/profile.png');

export const MainScreen: React.FC = () => (
  <SafeAreaView style={{flex: 1}}>
    <View
      style={{
        padding: 25,
      }}>
      <ProfileHeaderComponent
        profilePic={profilePic}
        name={'Sam Nickel'}
        email={'samnickel@citronium.com'}
      />
    </View>
  </SafeAreaView>
);
