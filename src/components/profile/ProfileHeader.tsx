import React from 'react';
import {BoldTexts, SemiBoldTexts} from '@components/shared/text/TextItems';
import {Image, TouchableOpacity, View} from 'react-native';
import {Colors} from '@components/shared/colors/colors';
import NewPhotoIcon from '@assets/profile/new-photo.svg';

interface IProfileHeaderComponentProps {
  name: string;
  email: string;
  profilePic: number;
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
        source={profilePic}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {}}
        style={{
          position: 'absolute',
          width: 36,
          height: 36,
          borderRadius: 18,
          borderWidth: 2,
          borderColor: Colors.White(100),
          bottom: -2,
          right: -2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.Primary(100),
        }}>
        <NewPhotoIcon width={22} height={22} />
      </TouchableOpacity>
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
