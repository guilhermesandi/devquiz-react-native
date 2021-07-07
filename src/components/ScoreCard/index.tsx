import React from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { View, Text } from 'react-native';
import { message } from '../../global/messages/ptBr';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

interface ScoreCardProps {
  percentage: number;
}

export function ScoreCard({ percentage }: ScoreCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.score}>
        <AnimatedCircularProgress
          size={80}
          width={10}
          fill={percentage}
          tintColor={theme.colors.chartPrimary}
          backgroundColor={theme.colors.chartSecondary}
          duration={1000}
          rotation={0}
        >
          {
            (fill) => (
              <Text style={styles.scoreText}>{Math.floor(fill)}%</Text>
            )
          }
        </AnimatedCircularProgress>
      </View>
      <View style={styles.textContainer}>
        {percentage === 0 ? (
          <>
            <Text style={styles.title}>{message.titleScoreCard}</Text>
            <Text style={styles.text}>{message.textScoreCard}</Text>
          </>
        ) : (
          <>
            <Text style={styles.title}>{message.titleScoreCardWithCompleteTask}</Text>
            <Text style={styles.text}>{message.textScoreCardWithCompleteTask}</Text>
          </>
        )}
      </View>
    </View>
  );
}