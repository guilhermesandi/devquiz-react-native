import React from 'react';
import { NotoSans_400Regular, NotoSans_700Bold } from '@expo-google-fonts/noto-sans';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { StatusBar } from 'react-native';
import { theme } from './src/global/styles/theme';

import { Routes } from './src/routes';
import { Home } from './src/screens/Home';
import { Challenge } from './src/screens/Challenge';
import { Feedback } from './src/screens/Feedback';
import { Completed } from './src/screens/Completed';

export default function App() {
  const [fontsLoaded] = useFonts({
    NotoSans_400Regular,
    NotoSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
      {/* <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home /> */}
      {/* <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.background}
      />
      <Challenge /> */}
      {/* <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.white}
      />
      <Feedback /> */}
      {/* <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.white}
      />
      <Completed /> */}
    </>
  );
}
