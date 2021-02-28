import React from 'react';
import {BoldTexts, SemiBoldTexts} from '@components/shared/text/TextItems';
import {Image, TouchableOpacity, View} from 'react-native';
import {Colors} from '@components/shared/colors/colors';
import NewPhotoIcon from '@assets/profile/new-photo.svg';

interface IProfileHeaderComponentProps {
  name?: string;
  email?: string;
  profilePic?: string;
}
export const ProfileHeaderComponent: React.FC<IProfileHeaderComponentProps> = ({
  name,
  email,
  profilePic,
}) => (
  <View
    style={{
      alignItems: 'center',
      flexDirection: 'row',
    }}>
    <View>
      <Image
        style={{
          width: 86,
          height: 86,
          borderRadius: 43,
        }}
        source={{uri: profilePic}}
      />
    </View>
    <View
      style={{
        marginLeft: 24,
      }}>
      <BoldTexts.h3>{name}</BoldTexts.h3>
      <SemiBoldTexts.label styles={{color: Colors.Dark(80)}}>
        {email}
      </SemiBoldTexts.label>
    </View>
  </View>
);
