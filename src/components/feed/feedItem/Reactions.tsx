import React from 'react';
import {View} from 'react-native';
import {EEmotions} from '@shared/enums/EEmotions';
import {EmotionComponent} from '@components/feed/feedItem/Emotion';
import {emotionsMap} from '@shared/ui/emotions';

interface IReactionsComponentProps {
  emotions: Record<string, number>;
  onEmotionPressed: (id: EEmotions) => void;
}

export const ReactionsComponent: React.FC<IReactionsComponentProps> = ({
  emotions,
  onEmotionPressed,
}) => {
  const notSelectedEmotions = React.useMemo(
    () =>
      Object.keys(emotionsMap).filter(
        (emotionKey) => !Object.keys(emotions).includes(emotionKey),
      ),
    [emotions],
  );

  const renderEmotion = React.useCallback(
    (emotionId: EEmotions) => (
      <EmotionComponent
        key={emotionId}
        emotionId={emotionId}
        imageSource={emotionsMap[emotionId]}
        count={emotions[emotionId]}
        onPress={onEmotionPressed}
      />
    ),
    [emotions, onEmotionPressed],
  );

  const renderInactiveEmotion = React.useCallback(
    (emotionId: EEmotions) => (
      <EmotionComponent
        key={emotionId}
        emotionId={emotionId}
        imageSource={emotionsMap[emotionId]}
        count={0}
        isInactive={true}
        onPress={onEmotionPressed}
      />
    ),
    [onEmotionPressed],
  );

  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      {/* @ts-ignore */}
      {Object.keys(emotions).map(renderEmotion)}
      {/* @ts-ignore */}
      {notSelectedEmotions.map(renderInactiveEmotion)}
    </View>
  );
};
