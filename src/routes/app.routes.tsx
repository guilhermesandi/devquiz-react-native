import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Challenge } from '../screens/Challenge';
import { Completed } from '../screens/Completed';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="Challenge"
        component={Challenge}
      />
      <Screen
        name="Completed"
        component={Completed}
      />
    </Navigator>
  )
}