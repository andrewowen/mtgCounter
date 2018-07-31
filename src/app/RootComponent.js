/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { createBottomTabNavigator } from "react-navigation";
import { Container, Provider } from "unstated";
import { MainScreen } from "../screens/MainScreen";
import { MyDecksScreen } from "../screens/MyDecksScreen";
import { getMyInfo } from "../helpers";

const RootStack = createBottomTabNavigator(
  {
    Home: MainScreen,
    MyDecks: MyDecksScreen
  },
  {
    navigationOptions: () => ({
      tabBarIcon: () => <Icon name="rocket" size={30} />
    }),
    initialRouteName: "Home"
  }
);

export class RootStore extends Container {
  state = {
    maxLife: 40,
    currentLife: 40,
    myDeck: {}
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
}

type Props = {};
export class RootComponent extends Component<Props> {
  componentDidMount = async () => {
    const rootStore = new RootStore();
    const myDeck = await getMyInfo();
    rootStore.setState({
      myDeck
    });
  };

  render() {
    const rootStore = new RootStore();
    return (
      <Provider inject={[rootStore]}>
        <RootStack />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});
