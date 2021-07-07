import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Button } from '../../components/Button';

import { message } from '../../global/messages/ptBr';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

interface FeedbackProps {
  isCorrect?: boolean;
}

export function Feedback({ isCorrect = true }: FeedbackProps) {
  return (
    <View style={styles.container}>
      {isCorrect ? (
        <>
          <View style={styles.iconCorrectContainer}>
            <Icon
              name='check'
              color={theme.colors.darkGreen}
              size={55}
            />
          </View>
          <Text style={styles.title}>{message.titleCorrectQuestionFeedback}</Text>
        </>
      ) : (
        <>
          <View style={styles.iconIncorrectContainer}>
            <Icon
              name='x'
              color={theme.colors.erro}
              size={55}
            />
          </View>
          <Text style={styles.title}>{message.titleIncorrectQuestionFeedback}</Text>
        </>
      )}
      <Text style={styles.text}>É um kit de desenvolvimento de interface de usuário</Text>
      <Button
        containerStyle={styles.button}
        textStyle={styles.buttonText}
      >
        {message.nextQuestionFeedbackButton}
      </Button>
    </View>
  );
}