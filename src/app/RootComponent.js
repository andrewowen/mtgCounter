import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Easing,
  Animated,
  StatusBar
} from 'react-native';
import { Container, Provider } from 'unstated';
import { getMyInfo, getLeaderboard } from '../helpers';
import { RootStack } from './RootStack';

export class RootStore extends Container {
  state = {
    myDeck: {},
    leaderboard: []
  };
  refetchLeaderBoard = async () => {
    const leaderboard = await getLeaderboard();
    this.setState(
      {
        leaderboard
      },
      () => {
        console.warn('state updated');
      }
    );
  };
}

type Props = {};
export class RootComponent extends Component<Props> {
  render() {
    const rootStore = new RootStore();
    this.componentDidMount = async () => {
      const deck = await getMyInfo();
      const leaderboard = await getLeaderboard();
      rootStore.setState({
        myDeck: deck,
        leaderboard
      });
    };
    return (
      <Provider inject={[rootStore]}>
        <RootStack />
      </Provider>
    );
  }
}
