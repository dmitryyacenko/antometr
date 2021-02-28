import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {ProfileHeaderComponent} from '@components/profile/ProfileHeader';
import { Auth } from 'aws-amplify';
import { ICognitoUser } from '@interfaces/ICognitoUser';
const profilePic = require('@assets/card/feeds/profile/profile.png');

export const MainScreen: React.FC = () => {
  const [user, setUser] = React.useState<ICognitoUser>();

  React.useEffect(() => {
    Auth.currentUserInfo().then((cognitoUser: ICognitoUser) => {
      console.log(cognitoUser);
      setUser(cognitoUser);
    });
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          padding: 25,
        }}>
        <ProfileHeaderComponent
          profilePic={user?.attributes.picture}
          name={user?.attributes.name}
          email={user?.attributes.email}
        />
      </View>
    </SafeAreaView>
  )
};
