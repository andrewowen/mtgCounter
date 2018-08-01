/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { MainScreen } from "../screens/MainScreen";

type Props = {};
export default class App extends Component<Props> {
  state = {
    maxLife: 40,
    currentLife: 40
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
  render() {
    const { currentLife } = this.state;
    return (
      <MainScreen
        currentLife={currentLife}
        addLife={this.addLife}
        subtractLife={this.subtractLife}
      />
    );
  }
}

const styles = StyleSheet.create({});
