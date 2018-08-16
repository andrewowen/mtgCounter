import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import { MainScreen } from '../screens/MainScreen';
import { MyDecksScreen } from '../screens/MyDecksScreen';
import { LeaderboardScreen } from '../screens/LeaderboardScreen';
import DetailComponent from '../screens/DetailScreen';

const LifeCounterNavigator = createStackNavigator(
  {
    'Life Counter': {
      screen: MainScreen,
      navigationOptions: () => ({
        title: 'Life Counter',
        headerStyle: {
          backgroundColor: '#55409A'
        },
        headerTitleStyle: {
          color: '#fff'
        }
      })
    }
  },
  {
    initialRouteName: 'Life Counter'
  }
);

const MyDecksNavigator = createStackNavigator(
  {
    'My Decks': {
      screen: MyDecksScreen,
      navigationOptions: () => ({
        title: 'My Decks',
        headerStyle: {
          backgroundColor: '#55409A'
        },
        headerTitleStyle: {
          color: '#fff'
        }
      })
    },
    'My Deck Details': DetailComponent
  },
  {
    initialRouteName: 'My Decks'
  }
);

const LeaderboardNavigator = createStackNavigator(
  {
    Leaderboard: {
      screen: LeaderboardScreen,
      navigationOptions: () => ({
        title: 'Leaderboard',
        headerStyle: {
          backgroundColor: '#55409A'
        },
        headerTitleStyle: {
          color: '#fff'
        }
      })
    },
    'Leaderboard Details': DetailComponent
  },
  {
    initialRouteName: 'Leaderboard'
  }
);

export const RootStack = createBottomTabNavigator(
  {
    'Life Counter': {
      screen: LifeCounterNavigator,
      navigationOptions: () => ({
        tabBarIcon: () => <Icon name="logo-game-controller-a" size={25} />
      })
    },
    'My Decks': {
      screen: MyDecksNavigator,
      navigationOptions: () => ({
        tabBarIcon: () => <Icon name="ios-person" size={25} />
      })
    },
    Leaderboard: {
      screen: LeaderboardNavigator,
      navigationOptions: () => ({
        headerTitle: 'Leaderboard',
        tabBarIcon: () => <Icon name="ios-trophy" size={25} />
      })
    }
  },
  {
    initialRouteName: 'Life Counter',
    tabBarOptions: { activeTintColor: '#55409A' }
  }
);
