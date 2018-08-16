import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const PlayerLifeButton = props => {
  return (
    <TouchableOpacity
      style={styles.playerLifeButton}
      onPress={props.onPress}
      disabled={props.currentLife === 0}
    >
      <Text style={{ fontSize: 18, color: '#fff' }}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  playerLifeButton: {
    flex: 1,
    color: '#fff',
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default PlayerLifeButton;
