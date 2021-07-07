import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  BackHandler,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import trophyStarImg from '../../assets/trophy-with-stars.png';
import trophyImg from '../../assets/trophy.png';

import { Button } from '../../components/Button';

import { message } from '../../global/messages/ptBr';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

interface Params {
  successes: number;
  title: string;
  total: number;
}

export function Completed() {
  const routes = useRoute();
  const navigation = useNavigation();

  const { successes, title, total } = routes.params as Params;

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Home');
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.white}
        translucent={false}
      />
      {successes === total ? (
        <>
          <Image 
            source={trophyStarImg}
            style={styles.image}
          />
          <Text style={styles.title}>{message.titleChallengeCompletedSuccess}</Text>
        </>
      ) : (
        <>
          <Image 
            source={trophyImg}
            style={styles.image}
          />
          <Text style={styles.title}>{message.titleChallengeCompleted}</Text>
        </>
      )}
      <View style={styles.textContainer}>
        <Text style={styles.text}>{message.textChallengeCompleted1}</Text>
        <Text style={styles.challenge}>{title}</Text>
        <Text style={styles.text}>{message.textChallengeCompleted2} {successes} {message.textChallengeCompleted3} {total} {message.textChallengeCompleted4}</Text>
      </View>
      <Button
        containerStyle={styles.button}
        textStyle={styles.buttonText}
        onPress={() => navigation.navigate('Home')}
      >
        {message.backChallengeCompletedButton}
      </Button>
    </View>
  );
}