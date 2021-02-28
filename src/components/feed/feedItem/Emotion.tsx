import React from 'react';
import {EEmotions} from '@shared/enums/EEmotions';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Grayscale} from 'react-native-color-matrix-image-filters';

interface IEmotionProps {
  emotionId: EEmotions;
  imageSource: number;
  count: number;
  isInactive?: boolean;
  onPress: (id: EEmotions) => void;
}

export const EmotionComponent: React.FC<IEmotionProps> = ({
  emotionId,
  imageSource,
  count,
  isInactive,
  onPress,
}) => {
  const _onPress = React.useCallback(() => {
    onPress(emotionId);
  }, [emotionId, onPress]);

  return (
    <View style={{marginRight: 16}} key={emotionId}>
      <TouchableOpacity activeOpacity={0.5} onPress={_onPress}>
        {isInactive ? (
          <Grayscale>
            <Image
              source={imageSource}
              style={{
                opacity: 0.6,
                resizeMode: 'contain',
                width: 32,
                height: 32,
              }}
            />
          </Grayscale>
        ) : (
          <Image
            source={imageSource}
            style={{
              resizeMode: 'contain',
              width: 32,
              height: 32,
            }}
          />
        )}
        {count > 0 && (
          <View
            style={{
              position: 'absolute',
              backgroundColor: '#d23c3c',
              justifyContent: 'center',
              alignItems: 'center',
              width: 16,
              height: 16,
              borderRadius: 8,
              right: -4,
              top: -4,
            }}>
            <Text style={{color: '#fff'}}>{count}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};
