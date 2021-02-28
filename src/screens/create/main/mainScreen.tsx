import React from 'react';
import {SafeAreaView, View, TextInput, Image, ScrollView} from 'react-native';
import {Colors} from '@components/shared/colors/colors';
import {BoldTexts, regularStyles} from '@components/shared/text/TextItems';
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import {Button} from '@components/shared/button/button';

export const MainScreen: React.FC = () => {
  const [photos, setPhotos] = React.useState<string[]>([]);
  const [
    showImagePlaceholder,
    setShowImagePlaceholder,
  ] = React.useState<boolean>(false);

  const onPhotoSelected = React.useCallback(
    (response: ImagePickerResponse) => {
      if (response.didCancel || response.errorCode || !response.base64) {
        setShowImagePlaceholder(false);
        return;
      }
      setPhotos([...photos, `data:${response.type};base64,${response.base64}`]);
      setShowImagePlaceholder(false);
    },
    [photos],
  );

  const selectPhoto = React.useCallback(() => {
    setShowImagePlaceholder(true);
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
      },
      onPhotoSelected,
    );
  }, [onPhotoSelected]);

  return (
    <SafeAreaView>
      <View
        style={{
          marginTop: 24,
          padding: 24,
          height: '100%',
          borderRadius: 24,
          backgroundColor: Colors.White(50),
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <BoldTexts.h3>Write a caption</BoldTexts.h3>
          <TextInput
            placeholder="Enter your caption here"
            multiline={true}
            numberOfLines={4}
            style={{
              marginTop: 16,
              padding: 16,
              backgroundColor: Colors.White(100),
              borderRadius: 24,
              ...regularStyles.label,
            }}
          />
          {photos.map((photo) => (
            <Image
              key={photo}
              style={{
                marginTop: 24,
                borderRadius: 24,
                resizeMode: 'cover',
                height: 200,
              }}
              source={{
                uri: photo,
              }}
            />
          ))}
          {!!showImagePlaceholder && (
            <View
              style={{
                marginTop: 24,
                borderRadius: 24,
                backgroundColor: Colors.Grey(40),
                height: 200,
                width: '100%',
              }}
            />
          )}
          <View style={{marginTop: 24}}>
            <Button
              onPress={selectPhoto}
              label={'Add photo'}
              type={'primary'}
              size={'large'}
            />
          </View>
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            bottom: 130,
            width: '100%',
            marginLeft: 24,
          }}>
          <Button
            onPress={selectPhoto}
            label={'Save'}
            type={'primary'}
            size={'large'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
