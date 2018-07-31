import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PlayerLifeButton from "../components/PlayerLifeButton";
import Icon from "react-native-vector-icons/FontAwesome";
import { Subscribe } from "unstated";
import { RootStore } from "../app/RootComponent";

export class MainScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Title"
    };
  };

  render() {
    return (
      <Subscribe to={[RootStore]}>
        {rootStore => (
          <>
            <View style={styles.playerContainer}>
              <View style={styles.playerLifeContainer}>
                <PlayerLifeButton buttonText="+" onPress={rootStore.addLife} />
                <Text style={styles.playerLifeText}>
                  {rootStore.state.currentLife}
                </Text>
                <PlayerLifeButton
                  buttonText="-"
                  onPress={rootStore.subtractLife}
                />
              </View>
            </View>
            <View style={{ flex: 3 }} />
          </>
        )}
      </Subscribe>
    );
  }
}

const styles = StyleSheet.create({
  playerContainer: {
    flex: 1,
    alignItems: "center",
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
