import React from 'react';
import { View, Text, Image, ImageProps, ViewStyle } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearProgress } from 'react-native-elements';

import { calcProgress } from '../../helpers/calcProgress';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

interface ChallengeCardProps extends RectButtonProps {
  image: ImageProps;
  title: string;
  totalChallenges: number;
  completedChallenges: number;
  style?: ViewStyle;
}

export function ChallengeCard({
  image,
  title,
  totalChallenges,
  completedChallenges,
  style,
  ...rest
}: ChallengeCardProps) {
  return (
    <View style={[styles.container, style]}>
      <RectButton
        style={styles.button}
        {...rest}
      >
        <Image
          source={image}
          style={styles.image}
        />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.challenge}>
          <Text style={styles.text}>{completedChallenges} de {totalChallenges}</Text>
          <LinearProgress
            color={theme.colors.chartPrimary}
            trackColor={theme.colors.chartSecondary}
            value={calcProgress(totalChallenges, completedChallenges)}
            variant={'determinate'}
            style={styles.progress}
          />
        </View>
      </RectButton>
    </View>
  );
}