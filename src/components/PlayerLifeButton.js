import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const PlayerLifeButton = props => {
  return (
    <TouchableOpacity
      style={[styles.playerLifeButton, { backgroundColor: props.buttonColor }]}
      onPress={props.onPress}
    >
      <Text>{props.buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  playerLifeButton: {
    flex: 1,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default PlayerLifeButton;
