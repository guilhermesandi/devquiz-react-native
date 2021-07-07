import React, { useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { LinearProgress } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

import { calcProgress } from '../../helpers/calcProgress';

import { Button } from '../../components/Button';

import { theme } from '../../global/styles/theme';
import { message } from '../../global/messages/ptBr';
import { styles } from './styles';
import { challenges } from '../../utils/challenges';

interface Challenge {
  id: string;
  title: string;
  icon: string;
  questionAnswered: number;
  level: string;
  questions: [
    {
      title: string;
      answers: [
        {
          id: number;
          title: string;
          isRight: boolean;
        },
      ]
    },
  ],
}

interface Params {
  item: Challenge;
}

export function Challenge() {
  const routes = useRoute();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctQuestions, setCorrectQuestions] = useState(0);
  
  const { item } = routes.params as Params;

  const navigation = useNavigation();

  const checkAnswer = () => {
    setIsAnswered(true);
    if (item.questions[currentQuestion].answers[selected - 1].isRight) {
      setCorrect(selected);
      setCorrectQuestions(correctQuestions + 1);
      setSelected(0);
    } else {
      setIncorrect(selected);
      const response = item.questions[currentQuestion].answers.find((answer) => answer.isRight)?.id;
      if (response) {
        setCorrect(response);
      }
      setSelected(0);
    }
  }

  const nextAnswer = () => {
    setSelected(0);
    setCorrect(0);
    setIncorrect(0);
    setIsAnswered(false);
    if (currentQuestion < item.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const index = challenges.findIndex((challenge) => challenge.id === item.id);
      challenges[index].questionAnswered = correctQuestions;
      navigation.navigate('Completed', {
        successes: correctQuestions,
        total: item.questions.length,
        title: item.title,
      });
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.background}
        translucent={false}
      />
      <View>
        <View style={styles.information}>
          <Text style={styles.informationText}>{message.question} {currentQuestion + 1}</Text>
          <Text style={styles.informationText}>{message.rangeQuestion} {item.questions.length}</Text>
        </View>
        <LinearProgress
          color={theme.colors.chartPrimary}
          trackColor={theme.colors.chartSecondary}
          value={calcProgress(item.questions.length, currentQuestion + 1)}
          variant={'determinate'}
          style={styles.progress}
        />
      </View>

      <View>
        <Text style={styles.question}>
          {item.questions[currentQuestion].title}
        </Text>

        {item.questions[currentQuestion].answers.map((question) => (
          <TouchableOpacity
            key={question.id}
            activeOpacity={0.7}
            style={
              [
                styles.answersContainer,
                selected === question.id && (styles.answersContainerChecked),
                correct === question.id && (styles.answersContainerCorrect),
                incorrect === question.id && (styles.answersContainerIncorrect),
              ]
            }
            disabled={isAnswered}
            onPress={() => setSelected(question.id)}
          >
            <Text
              style={
                [
                  styles.answersText,
                  selected === question.id && (styles.answersTextChecked),
                  correct === question.id && (styles.answersTextCorrect),
                  incorrect === question.id && (styles.answersTextIncorrect),
                ]
              }
            >
              {question.title}
            </Text>
            <View
              style={
                [
                  styles.checkBox,
                  selected === question.id && (styles.checkBoxChecked),
                  correct === question.id && (styles.checkBoxCorrect),
                  incorrect === question.id && (styles.checkBoxIncorrect),
                ]
              }
            >
              {selected === question.id && (
                <Icon
                  name='check'
                  color={theme.colors.black}
                />
              )}
              {correct === question.id && (
                <Icon
                  name='check'
                  color={theme.colors.white}
                />
              )}
              {incorrect === question.id && (
                <Icon
                  name='x'
                  color={theme.colors.white}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttons}>
        <Button
          containerStyle={styles.skipButton}
          enabled={!isAnswered}
          onPress={nextAnswer}
        >
          {message.skip}
        </Button>
        {!isAnswered ? (
          <Button
            containerStyle={styles.confirmButton}
            textStyle={styles.confirmText}
            enabled={selected !== 0}
            onPress={checkAnswer}
          >
            {message.confirm}
          </Button>
        ) : (
          <Button
            containerStyle={styles.confirmButton}
            textStyle={styles.confirmText}
            enabled
            onPress={nextAnswer}
          >
            {message.next}
          </Button>
        )}
      </View>
    </View> 
  );
}
