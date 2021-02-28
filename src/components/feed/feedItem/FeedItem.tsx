import React from 'react';
import {IFeedItem} from '@interfaces/IFeed';
import {Image, View} from 'react-native';
import {AuthorComponent} from './author';
import {Colors} from '@components/shared/colors/colors';
import {RegularTexts} from '@components/shared/text/TextItems';
import {ReactionsComponent} from '@components/feed/feedItem/Reactions';

interface IFeedItemComponentProps {
  item: IFeedItem;
}
export const FeedItemComponent: React.FC<IFeedItemComponentProps> = ({
  item,
}) => (
  <View
    style={{
      borderRadius: 15,
      backgroundColor: Colors.White(100),
      paddingVertical: 17,
      paddingHorizontal: 15,
      marginTop: 30,
    }}>
    <AuthorComponent author={item.author} />
    <View
      style={{
        marginTop: 17,
        marginBottom: 20,
        height: 1,
        backgroundColor: Colors.Grey(20),
      }}
    />
    {!!item.text && (
      <RegularTexts.content
        styles={{
          color: Colors.Dark(80),
          marginBottom: 20,
        }}>
        {item.text}
      </RegularTexts.content>
    )}
    {!!item.images &&
      item.images.map((image, index) => (
        <Image
          key={index}
          source={{uri: image}}
          style={{
            marginBottom: 20,
            resizeMode: 'cover',
            height: 200,
            borderRadius: 10,
          }}
        />
      ))}
    <ReactionsComponent emotions={item.reacts} onEmotionPressed={() => {}} />
  </View>
);
