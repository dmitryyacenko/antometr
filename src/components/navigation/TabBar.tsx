import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {TouchableOpacity, View} from 'react-native';
import {Routes} from '@navigation/Routes';
import HomeIcon from '@assets/navigation/home.svg';
import HomeInactiveIcon from '@assets/navigation/home_inactive.svg';
import AddIcon from '@assets/navigation/add.svg';
import ProfileIcon from '@assets/navigation/profile.svg';
import ProfileInactiveIcon from '@assets/navigation/profile_inactive.svg';
import {TabBarBase} from '@components/navigation/TabBarBase';
import {hasNotch} from 'react-native-device-info';
import {Colors} from '@components/shared/colors/colors';

export const TabBar: React.FC<BottomTabBarProps> = ({
  descriptors,
  state,
  navigation,
}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  const goToHome = React.useCallback(() => {
    navigation.navigate(Routes.feed.entry);
  }, [navigation]);

  const goToCreate = React.useCallback(() => {
    navigation.navigate(Routes.create.entry);
  }, [navigation]);

  const goToProfile = React.useCallback(() => {
    navigation.navigate(Routes.profile.entry);
  }, [navigation]);

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <>
      <TabBarBase />
      <View
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          right: 0,
          flexDirection: 'row',
          paddingTop: hasNotch() ? 20 : 15,
          justifyContent: 'space-around',
          height: hasNotch() ? 90 : 70,
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={goToHome}
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          {state.index === 0 ? <HomeIcon /> : <HomeInactiveIcon />}
          {state.index === 0 && (
            <View
              style={{
                marginTop: 10,
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: Colors.Primary(100),
              }}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={goToCreate}
          style={{
            top: -30,
            flex: 1,
            alignItems: 'center',
          }}>
          <AddIcon />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={goToProfile}
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          {state.index === 2 ? <ProfileIcon /> : <ProfileInactiveIcon />}
          {state.index === 2 && (
            <View
              style={{
                marginTop: 10,
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: Colors.Primary(100),
              }}
            />
          )}
        </TouchableOpacity>
      </View>
    </>
  );
};
