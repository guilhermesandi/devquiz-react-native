import React from 'react';
import { Text, View, TouchableOpacityProps, ViewStyle, TextStyle } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

interface ButtonProps extends RectButtonProps {
  children: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export function Button({ children, containerStyle, textStyle, ...rest }: ButtonProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <RectButton style={styles.button} {...rest}>
        <Text style={[styles.text, textStyle]}>{children}</Text>
      </RectButton>
    </View>
  );
}