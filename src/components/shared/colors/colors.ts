const darkBase: number[] = [56, 56, 56];
const errorBase: number[] = [243, 22, 41];
const greyBase: number[] = [169, 169, 169];
const primaryBase: number[] = [50, 127, 235];
const successBase: number[] = [10, 185, 122];
const whiteBase: number[] = [255, 255, 255];
const screenBase: number[] = [250, 250, 250];

const mixin = (base: number[]) => (opacity: number): string =>
  `rgba(${base.join(', ')}, ${opacity / 100})`;

export const Colors = {
  Dark: mixin(darkBase),
  Error: mixin(errorBase),
  Grey: mixin(greyBase),
  Primary: mixin(primaryBase),
  Success: mixin(successBase),
  White: mixin(whiteBase),
  Screen: mixin(screenBase),
};
