import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PlayerLifeButton from './PlayerLifeButton';

export class PlayerComponent extends Component {
  state = {
    currentLife: 40,
    minLife: 0
  };
  addLife = () => {
    this.setState(prevState => ({
      currentLife: prevState.currentLife + 1
    }));
  };

  subtractLife = () => {
    this.setState(prevState => ({
      currentLife: prevState.currentLife - 1
    }));
  };

  render() {
    const { store } = this.props;
    return (
      <View style={styles.playerContainer}>
        <View style={styles.playerLifeContainer}>
          <PlayerLifeButton
            buttonText="+"
            onPress={this.addLife}
            currentLife={this.state.currentLife}
          />
          <Text style={styles.playerLifeText}>{this.state.currentLife}</Text>
          <PlayerLifeButton
            buttonText="-"
            onPress={this.subtractLife}
            currentLife={this.state.currentLife}
          />
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row-reverse',
            fontFamily: 'SourceCodePro-Bold'
          }}
        >
          <View
            style={{
              alignContent: 'center',
              justifyContent: 'center',
              alignContent: 'center'
            }}
          >
            <Text style={{ color: '#fff', fontSize: 18 }}>delete</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playerContainer: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: '#2C303A',
    padding: 10,
    marginTop: 10,
    height: 140
  },
  playerLifeContainer: {
    flexDirection: 'column',
    height: '100%',
    width: '30%',
    borderRadius: 10,
    backgroundColor: '#2E7AC6'
  },
  playerLifeText: {
    flex: 2,
    color: 'white',
    fontSize: 50,
    fontFamily: 'SourceCodePro-Bold',
    alignSelf: 'center'
  }
});
