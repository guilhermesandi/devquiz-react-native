import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { theme } from '../../global/styles/theme';

import { styles } from './styles';

interface CategoryCardProps extends RectButtonProps {
  children: string;
  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
}

export function CategoryCard({
  children,
  borderColor = theme.colors.border,
  backgroundColor = theme.colors.white,
  textColor = theme.colors.lightGrey,
  style,
  ...rest
}: CategoryCardProps) {
  return (
    <View style={[
      styles.container,
      style,
      {
        borderColor,
        backgroundColor
      }
    ]}>
      <RectButton
        style={styles.button}
        {...rest}
      >
        <Text style={[
          styles.title,
          { color: textColor }
        ]}>
          {children}
        </Text>
      </RectButton>
    </View>
  );
}