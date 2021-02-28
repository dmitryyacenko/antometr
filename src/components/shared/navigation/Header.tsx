import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {StackHeaderProps} from '@react-navigation/stack';
import {BoldTexts} from '@components/shared/text/TextItems';
import {Colors} from '@components/shared/colors/colors';
import {SvgProps} from 'react-native-svg';

interface IHeaderComponentProps extends StackHeaderProps {
  title: string;
  Icon?: React.FC<SvgProps>;
  onIconPress?: () => void;
}
export const HeaderComponent: React.FC<IHeaderComponentProps> = ({
  title,
  Icon,
  onIconPress,
}) => (
  <>
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          height: 83,
          paddingHorizontal: 25,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <BoldTexts.h1 styles={{color: Colors.Dark(100)}}>{title}</BoldTexts.h1>
        {!!Icon && (
          <TouchableOpacity activeOpacity={1} onPress={onIconPress}>
            <Icon width={28} height={28} />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  </>
);
