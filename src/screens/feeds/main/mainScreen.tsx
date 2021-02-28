import React from 'react';
import {IFeed} from '@interfaces/IFeed';
import {FeedItemComponent} from '@components/feed/feedItem/FeedItem';
import {ScrollView, SafeAreaView} from 'react-native';
import {EEmotions} from '@shared/enums/EEmotions';
const photo = require('@assets/card/feeds/profile/profile.png');

const feed: IFeed = {
  items: [
    {
      id: 1,
      author: {
        name: 'Sansa Indira',
        photo,
        id: 123,
      },
      reacts: {
        [EEmotions.GOVARD_RAINBOW]: 1,
        [EEmotions.SPEEDRUN]: 2,
      },
      images: ['https://picsum.photos/900/500'],
      text:
        'My last day for this year holiday! So excited to share my memories with you guys! 😁😍',
    },
    {
      id: 2,
      reacts: {
        [EEmotions.GOVARD_RAINBOW]: 1,
        [EEmotions.SPEEDRUN]: 2,
      },
      author: {
        name: 'Sansa Indira',
        photo,
        id: 123,
      },
      images: ['https://picsum.photos/900/500'],
      text:
        'My last day for this year holiday! So excited to share my memories with you guys! 😁😍',
    },
  ],
};

export const MainScreen: React.FC = () => (
  <SafeAreaView>
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 26, paddingBottom: 64}}>
      {feed.items.map((feedItem) => (
        <FeedItemComponent key={feedItem.id} item={feedItem} />
      ))}
    </ScrollView>
  </SafeAreaView>
);
