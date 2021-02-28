import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Dimensions} from 'react-native';

export const TabBarBase: React.FC = () => {
  const {height} = Dimensions.get('window');
  return (
    <Svg
      height="100%"
      width="100%"
      viewBox="0 0 375 180"
      style={{
        left: 0,
        right: 0,
        bottom: height * -0.43,
        elevation: 8,
        position: 'absolute',
      }}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M188 116C207.33 116 223 100.33 223 81C223 77.1572 222.381 73.4591 221.236 70H360C368.284 70 375 76.7157 375 85V180H0V85C0 76.7157 6.71573 70 15 70H154.764C153.619 73.4591 153 77.1572 153 81C153 100.33 168.67 116 188 116Z"
        fill="white"
      />
    </Svg>
  );
};
