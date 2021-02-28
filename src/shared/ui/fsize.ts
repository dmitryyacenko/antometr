import {RFValue} from 'react-native-responsive-fontsize';

export const fsize = (size: number) => Math.max(size, RFValue(size));
