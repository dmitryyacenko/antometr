import {EEmotions} from '@shared/enums/EEmotions';

const speedrunEmotion = require('@assets/card/emotions/1.png');
const govardRainbowEmotion = require('@assets/card/emotions/2.png');
const wowEmotion = require('@assets/card/emotions/3.png');

export const emotionsMap: Record<EEmotions, number> = {
  [EEmotions.SPEEDRUN]: speedrunEmotion,
  [EEmotions.GOVARD_RAINBOW]: govardRainbowEmotion,
  [EEmotions.WOW]: wowEmotion,
};
