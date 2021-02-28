import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {Colors} from '@components/shared/colors/colors';
import {BoldTexts} from '@components/shared/text/TextItems';

type TButtonType = 'primary' | 'light' | 'success' | 'danger';
type TButtonSize = 'large' | 'small';

interface IButtonProps {
  type: TButtonType;
  size: TButtonSize;
  label: string;
  Icon?: React.FC;
  onPress: () => void;
}

const buttonColorsMap: Record<TButtonType, string> = {
  primary: Colors.Primary(100),
  light: Colors.White(100),
  success: Colors.Success(100),
  danger: Colors.Error(100),
};

export const Button: React.FC<IButtonProps> = ({
  type,
  size,
  label,
  Icon,
  onPress,
}) => {
  const buttonStyles: ViewStyle = {
    paddingVertical: 16,
    borderRadius: 29,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: buttonColorsMap[type],
  };

  if (type === 'light') {
    buttonStyles.shadowColor = Colors.Grey(100);
    buttonStyles.shadowOffset = {
      width: 0,
      height: 6,
    };
    buttonStyles.shadowOpacity = 0.16;
    buttonStyles.shadowRadius = 6;
    buttonStyles.elevation = 5;
  }

  if (size === 'large') {
    buttonStyles.width = '100%';
  } else {
    buttonStyles.paddingHorizontal = 51;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={buttonStyles}>
      {!!Icon && <Icon />}
      <BoldTexts.button
        styles={{
          marginLeft: Icon ? 15 : undefined,
          color: type === 'light' ? Colors.Dark(100) : Colors.White(100),
        }}>
        {label}
      </BoldTexts.button>
    </TouchableOpacity>
  );
};
