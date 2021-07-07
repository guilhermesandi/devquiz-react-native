import React, { useState, useEffect }  from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Image, ScrollView, FlatList, Dimensions } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import { ScoreCard } from '../../components/ScoreCard';
import { CategoryCard } from '../../components/CategoryCard';
import { ChallengeCard } from '../../components/ChallengeCard';

import { challenges } from '../../utils/challenges';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { message } from '../../global/messages/ptBr';

export function Home() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [percentage, setPercentage] = useState(0);
  const [difficulty, setDifficulty] = useState('');

  const numberColumns = 2;
  const itemWidth = (Dimensions.get('window').width) / numberColumns;

  const handleDifficulty = (level: string) => {
    if (difficulty === level) {
      setDifficulty('');
    } else {
      setDifficulty(level);
    }
  }

  useEffect(() => {
    let total = 0;
    let answered = 0;
    challenges.forEach((challenge) => {
      total += challenge.questions.length;
      answered += challenge.questionAnswered;
    });

    setPercentage((1 / (total / answered)) * 100);
  }, [challenges, isFocused]);

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.header}
        colors={[theme.colors.gradientStart, theme.colors.gradientEnd]}
        start={[0, 1]}
        end={[1, 0]}
      >
        <View style={styles.userContainer}>
          <View style={styles.user}>
            <Text style={styles.greeting}>
              {message.greeting},
            </Text>
            <Text style={styles.username}>
              Guilherme
            </Text>
          </View>
          <View>
            <Image
              source={{
                uri: 'https://avatars.githubusercontent.com/u/38008649?v=4'
              }}
              style={styles.avatar}
            />
          </View>
        </View>
      </LinearGradient>
      <ScoreCard
        percentage={percentage}
      />
      <View style={styles.levelsContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <CategoryCard
            backgroundColor={
              difficulty === 'Easy' ? theme.colors.white : theme.colors.levelButtonEasy
            }
            borderColor={
              difficulty === 'Easy' ? theme.colors.levelButtonTextEasy : theme.colors.levelButtonBorderEasy
            }
            textColor={theme.colors.levelButtonTextEasy}
            style={{ marginLeft: 20 }}
            onPress={() => handleDifficulty('Easy')}
          >
            {message.levelButtonEasy}
          </CategoryCard>
          <CategoryCard
            backgroundColor={
              difficulty === 'Average' ? theme.colors.white : theme.colors.levelButtonAverage
            }
            borderColor={
              difficulty === 'Average' ? theme.colors.levelButtonTextAverage : theme.colors.levelButtonBorderAverage
            }
            textColor={theme.colors.levelButtonTextAverage}
            onPress={() => handleDifficulty('Average')}
          >
            {message.levelButtonAverage}
          </CategoryCard>
          <CategoryCard
            backgroundColor={
              difficulty === 'Hard' ? theme.colors.white : theme.colors.levelButtonHard
            }
            borderColor={
              difficulty === 'Hard' ? theme.colors.levelButtonTextHard : theme.colors.levelButtonBorderHard
            }
            textColor={theme.colors.levelButtonTextHard}
            onPress={() => handleDifficulty('Hard')}
          >
            {message.levelButtonHard}
          </CategoryCard>
          <CategoryCard
            backgroundColor={
              difficulty === 'Hardcore' ? theme.colors.white : theme.colors.levelButtonHardcore
            }
            borderColor={
              difficulty === 'Hardcore' ? theme.colors.levelButtonTextHardcore : theme.colors.levelButtonBorderHardcore
            }
            textColor={theme.colors.levelButtonTextHardcore}
            style={{ marginRight: 20 }}
            onPress={() => handleDifficulty('Hardcore')}
          >
            {message.levelButtonHardcore}
          </CategoryCard>
        </ScrollView>
      </View>
      <FlatList
        style={styles.challengeContainer}
        data={challenges.filter((challenge) => {
          return challenge.level.includes(difficulty);
        })}
        keyExtractor={(item) => item.id}
        numColumns={numberColumns}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View>
              <ChallengeCard
                key={item.id}
                image={item.icon}
                title={item.title}
                totalChallenges={item.questions.length}
                completedChallenges={item.questionAnswered}
                style={{ width: itemWidth - 28 }}
                onPress={() => navigation.navigate('Challenge', {
                  item,
                })}
              />
            </View>
          );
        }}
      />
    </View>
  );
}