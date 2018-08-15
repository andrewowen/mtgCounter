import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "react-navigation";
import { Container, Provider } from "unstated";
import { MainScreen } from "../screens/MainScreen";
import { MyDecksScreen } from "../screens/MyDecksScreen";
import { getMyInfo, getLeaderboard } from "../helpers";
import { LeaderboardScreen } from "../screens/LeaderboardScreen";

const RootStack = createBottomTabNavigator(
  {
    "Life Counter": {
      screen: MainScreen,
      navigationOptions: () => ({
        tabBarIcon: () => <Icon name="logo-game-controller-a" size={25} />
      })
    },
    "My Decks": {
      screen: MyDecksScreen,
      navigationOptions: () => ({
        tabBarIcon: () => <Icon name="ios-person" size={25} />
      })
    },
    Leaderboard: {
      screen: LeaderboardScreen,
      navigationOptions: () => ({
        tabBarIcon: () => <Icon name="ios-trophy" size={25} />
      })
    }
  },
  {
    initialRouteName: "Leaderboard"
  }
);

export class RootStore extends Container {
  state = {
    maxLife: 40,
    currentLife: 40,
    myDeck: {},
    leaderboard: []
  };

  addLife = () => {
    this.setState((prevState, props) => ({
      currentLife: prevState.currentLife + 1
    }));
  };

  subtractLife = () => {
    this.setState((prevState, props) => ({
      currentLife: prevState.currentLife - 1
    }));
  };

  refetchLeaderBoard = async () => {
    const leaderboard = await getLeaderboard();
    this.setState(
      {
        leaderboard
      },
      () => {
        console.warn("state updated");
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

const styles = StyleSheet.create({});
