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

const tabIconSize = 25;
const tabBarPrimaryColor = '#55409A';
const tabBarPrimaryTextColor = '#fff';

const LifeCounterNavigator = createStackNavigator(
  {
    'Life Counter': {
      screen: MainScreen,
      navigationOptions: () => ({
        title: 'Life Counter',
        headerStyle: {
          backgroundColor: tabBarPrimaryColor
        },
        headerTitleStyle: {
          color: tabBarPrimaryTextColor
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
          backgroundColor: tabBarPrimaryColor
        },
        headerTitleStyle: {
          color: tabBarPrimaryTextColor
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
          backgroundColor: tabBarPrimaryColor
        },
        headerTitleStyle: {
          color: tabBarPrimaryTextColor
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
        tabBarIcon: () => (
          <Icon name="logo-game-controller-a" size={tabIconSize} />
        )
      })
    },
    'My Decks': {
      screen: MyDecksNavigator,
      navigationOptions: () => ({
        tabBarIcon: () => <Icon name="ios-person" size={tabIconSize} />
      })
    },
    Leaderboard: {
      screen: LeaderboardNavigator,
      navigationOptions: () => ({
        headerTitle: 'Leaderboard',
        tabBarIcon: () => <Icon name="ios-trophy" size={tabIconSize} />
      })
    }
  },
  {
    initialRouteName: 'Life Counter',
    tabBarOptions: {
      activeTintColor: tabBarPrimaryColor,
      style: {
        height: 60,
        padding: 5
      }
    }
  }
);
