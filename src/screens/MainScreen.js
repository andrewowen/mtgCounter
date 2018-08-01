import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Circle } from "react-native-svg";
import { SafeAreaView } from "react-navigation";
import PlayerLifeButton from "../components/PlayerLifeButton";

export class MainScreen extends Component {
  render() {
    const { currentLife, addLife, subtractLife } = this.props;
    return (
      <>
        <View style={styles.playerContainer}>
          <View style={styles.playerLifeContainer}>
            <PlayerLifeButton buttonText="+" onPress={addLife} />
            <Text style={styles.playerLifeText}>{currentLife}</Text>
            <PlayerLifeButton buttonText="-" onPress={subtractLife} />
          </View>
        </View>
        <View style={{ flex: 3 }} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  playerContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#2C303A",
    marginTop: 20,
    padding: 10
  },
  playerLifeContainer: {
    flexDirection: "column",
    height: "100%",
    width: "30%",
    borderRadius: 10,
    backgroundColor: "#2E7AC6"
  },
  playerLifeText: {
    flex: 2,
    color: "white",
    fontSize: 70,
    fontFamily: "SourceCodePro-Bold",
    alignSelf: "center"
  }
});
