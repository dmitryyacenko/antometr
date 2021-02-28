import React from 'react';
import {Text, TextStyle} from 'react-native';
import {fsize} from '@shared/ui/fsize';

const boldCommonStyles: TextStyle = {
  fontWeight: 'bold',
  fontFamily: 'NunitoSans-Bold',
};

interface IBoldStyledTexts {
  overline: TextStyle;
  display: TextStyle;
  button: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  h1: TextStyle;
  label: TextStyle;
  content: TextStyle;
}

const boldStyles: IBoldStyledTexts = {
  button: {
    fontSize: fsize(18),
  },
  overline: {
    fontSize: fsize(14),
    letterSpacing: 0.2,
  },
  h2: {
    fontSize: fsize(24),
  },
  h3: {
    fontSize: fsize(20),
    lineHeight: fsize(33),
  },
  h4: {
    fontSize: fsize(18),
  },
  h1: {
    fontSize: fsize(24),
  },
  label: {
    fontSize: fsize(16),
    lineHeight: fsize(26),
  },
  content: {
    fontSize: fsize(14),
    lineHeight: fsize(24),
  },
  display: {
    fontSize: fsize(16),
    lineHeight: fsize(25),
  },
};

interface IRegularStyledTexts {
  body: TextStyle;
  h3: TextStyle;
  display: TextStyle;
  label: TextStyle;
  content: TextStyle;
}

const regularCommonStyles: TextStyle = {
  fontWeight: 'normal',
  fontFamily: 'NunitoSans-Regular',
};

export const regularStyles: IRegularStyledTexts = {
  label: {
    fontSize: fsize(16),
    lineHeight: fsize(26),
  },
  h3: {
    fontSize: fsize(20),
  },
  display: {
    fontSize: fsize(14),
    lineHeight: fsize(25),
  },
  body: {
    fontSize: fsize(13),
    lineHeight: fsize(24),
  },
  content: {
    fontSize: fsize(14),
    lineHeight: fsize(24),
  },
};

interface ISemiBoldStyledTexts {
  display: TextStyle;
  label: TextStyle;
  content: TextStyle;
}

const semiBoldCommonStyles: TextStyle = {
  fontWeight: '600',
  fontFamily: 'NunitoSans-SemiBold',
};

const semiBoldStyles: ISemiBoldStyledTexts = {
  label: {
    fontSize: fsize(16),
    lineHeight: fsize(27),
  },
  display: {
    fontSize: fsize(16),
    lineHeight: fsize(25),
  },
  content: {
    fontSize: fsize(14),
    lineHeight: fsize(24),
  },
};

export const BoldTexts: Record<
  keyof IBoldStyledTexts,
  React.FC<{styles?: TextStyle}>
> = {
  button: ({styles, children}) => (
    <Text style={[boldCommonStyles, boldStyles.button, styles || {}]}>
      {children}
    </Text>
  ),
  overline: ({styles, children}) => (
    <Text style={[boldCommonStyles, boldStyles.overline, styles || {}]}>
      {children}
    </Text>
  ),
  h2: ({styles, children}) => (
    <Text style={[boldCommonStyles, boldStyles.h2, styles || {}]}>
      {children}
    </Text>
  ),
  h3: ({styles, children}) => (
    <Text style={[boldCommonStyles, boldStyles.h3, styles || {}]}>
      {children}
    </Text>
  ),
  h4: ({styles, children}) => (
    <Text style={[boldCommonStyles, boldStyles.h4, styles || {}]}>
      {children}
    </Text>
  ),
  h1: ({styles, children}) => (
    <Text style={[boldCommonStyles, boldStyles.h1, styles || {}]}>
      {children}
    </Text>
  ),
  label: ({styles, children}) => (
    <Text style={[boldCommonStyles, boldStyles.label, styles || {}]}>
      {children}
    </Text>
  ),
  content: ({styles, children}) => (
    <Text style={[boldCommonStyles, boldStyles.content, styles || {}]}>
      {children}
    </Text>
  ),
  display: ({styles, children}) => (
    <Text style={[boldCommonStyles, boldStyles.display, styles || {}]}>
      {children}
    </Text>
  ),
};

export const RegularTexts: Record<
  keyof IRegularStyledTexts,
  React.FC<{styles?: TextStyle}>
> = {
  body: ({styles, children}) => (
    <Text style={[regularCommonStyles, regularStyles.body, styles || {}]}>
      {children}
    </Text>
  ),
  h3: ({styles, children}) => (
    <Text style={[regularCommonStyles, regularStyles.h3, styles || {}]}>
      {children}
    </Text>
  ),
  display: ({styles, children}) => (
    <Text style={[regularCommonStyles, regularStyles.display, styles || {}]}>
      {children}
    </Text>
  ),
  label: ({styles, children}) => (
    <Text style={[regularCommonStyles, regularStyles.label, styles || {}]}>
      {children}
    </Text>
  ),
  content: ({styles, children}) => (
    <Text style={[regularCommonStyles, regularStyles.content, styles || {}]}>
      {children}
    </Text>
  ),
};

export const SemiBoldTexts: Record<
  keyof ISemiBoldStyledTexts,
  React.FC<{styles?: TextStyle}>
> = {
  label: ({styles, children}) => (
    <Text style={[semiBoldCommonStyles, semiBoldStyles.label, styles || {}]}>
      {children}
    </Text>
  ),
  content: ({styles, children}) => (
    <Text style={[semiBoldCommonStyles, semiBoldStyles.content, styles || {}]}>
      {children}
    </Text>
  ),
  display: ({styles, children}) => (
    <Text style={[semiBoldCommonStyles, semiBoldStyles.display, styles || {}]}>
      {children}
    </Text>
  ),
};
