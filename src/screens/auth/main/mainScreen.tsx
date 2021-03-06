import React, {useCallback} from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import {emotionsMap} from '@shared/ui/emotions';
import {EEmotions} from '@shared/enums/EEmotions';
import {fsize} from '@shared/ui/fsize';
import {BoldTexts} from '@components/shared/text/TextItems';
import {Button} from '@components/shared/button/button';
import GoogleIcon from '@assets/buttonIcons/google.svg';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '@navigation/Routes';

export const AuthScreen: React.FC = () => {
  const {navigate} = useNavigation();

  const onLoginPress = useCallback(() => {
    navigate(Routes.mainStack.main);
  }, [navigate]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          padding: 24,
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
          }}>
          <Image
            source={emotionsMap[EEmotions.WOW]}
            style={{
              resizeMode: 'contain',
              width: fsize(70),
              height: fsize(70),
            }}
          />
        </View>
        <View
          style={{
            marginTop: 40,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <BoldTexts.h3>Log in</BoldTexts.h3>
        </View>
        <View
          style={{
            marginTop: 150,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Button
            Icon={GoogleIcon}
            type={'light'}
            size={'large'}
            label={'Log in with Google'}
            onPress={onLoginPress}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
