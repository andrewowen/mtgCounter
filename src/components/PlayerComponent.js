import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PlayerLifeButton from './PlayerLifeButton';

export class PlayerComponent extends Component {
  state = {
    currentLife: 40,
    minLife: 0,
    color: this.props.backgroundColor || '#E6AF98'
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
    const { store, item, deletePlayer, backgroundColor } = this.props;
    const color = backgroundColor;
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View
          style={[
            styles.playerContainer,
            { backgroundColor: this.state.color }
          ]}
        >
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
        </View>
        <View
          style={[
            styles.playerDeleteButton,
            { backgroundColor: this.state.color }
          ]}
        >
          <TouchableOpacity
            style={{ fontFamily: 'SourceCodePro-Bold' }}
            onPress={() => deletePlayer(item)}
          >
            <View>
              <Icon name="ios-close-circle" size={25} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playerContainer: {
    flex: 5,
    flexDirection: 'row',
    backgroundColor: '#2C303A',
    padding: 10,
    marginBottom: 10,
    height: 140
  },
  playerLifeContainer: {
    flexDirection: 'column',
    height: '100%',
    width: '30%',
    borderRadius: 10,
    backgroundColor: '#2C303A'
  },
  playerLifeText: {
    flex: 2,
    color: 'white',
    fontSize: 50,
    fontFamily: 'SourceCodePro-Bold',
    alignSelf: 'center'
  },
  playerDeleteButton: {
    flex: 1,
    flexDirection: 'row-reverse',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
