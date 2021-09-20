import React from 'react';
import { ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

export interface IconProps extends SvgProps {
  icon: React.FunctionComponent;
  width?: number;
  height?: number;
  color?: string;
  style?: ViewStyle;
  stroke?: string;
  strokeWidth?: number;
}

const Icon: React.FunctionComponent<IconProps> = ({
  icon,
  color = 'white',
  width = 20,
  height = 20,
  style,
  stroke,
  strokeWidth = 1.5,
  ...props
}) => {
  const IconSVG: React.FunctionComponent<SvgProps> = icon;

  return <IconSVG width={width} height={height} fill={color} style={style} stroke={stroke} strokeWidth={strokeWidth} {...props} />;
};

export default Icon;
