import React from 'react';
import {Image, View} from 'react-native';
import {IAuthor} from '@interfaces/IAuthor';
import {BoldTexts} from '@components/shared/text/TextItems';

interface IAuthorComponentProps {
  author: IAuthor;
}
export const AuthorComponent: React.FC<IAuthorComponentProps> = ({author}) => (
  <View
    style={{
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
    }}>
    <Image
      source={require('../../../assets/card/feeds/profile/profile.png')}
      style={{
        width: 47,
        height: 47,
        borderRadius: 50,
      }}
    />
    <View
      style={{
        marginLeft: 24,
        flex: 5,
      }}>
      <BoldTexts.display>{author.name}</BoldTexts.display>
    </View>
  </View>
);
