import React, { Component } from 'react';
import {
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import PlayerLifeButton from '../components/PlayerLifeButton';
import Icon from 'react-native-vector-icons/Ionicons';
import { Subscribe } from 'unstated';
import { RootStore } from '../app/RootComponent';
import { PlayerComponent } from '../components/PlayerComponent';

export class MainScreen extends Component {
  state = {
    players: [{ key: '00000' }],
    playerBackgroundColor: [
      '#E6AF98',
      '#BBDEF4',
      '#FFFBDC',
      '#AECFB3',
      '#838383'
    ],
    selectedBackgroundColor: '',
    currentIndex: 1
  };

  _setPlayerBackgroundColor = () => {
    if (this.state.currentIndex < this.state.playerBackgroundColor.length - 1) {
      const selectedBackgroundColor = this.state.playerBackgroundColor[
        this.state.currentIndex
      ];
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
      return selectedBackgroundColor;
    } else {
      const selectedBackgroundColor = this.state.playerBackgroundColor[
        this.state.currentIndex
      ];
      this.setState({ currentIndex: 0 });
      return selectedBackgroundColor;
    }
  };

  _addPlayer = () => {
    const timestamp = Date.now();
    const newPlayer = { key: timestamp.toString() };
    this.setState(
      {
        selectedBackgroundColor: this._setPlayerBackgroundColor()
      },
      () => {
        this.setState({
          players: [...this.state.players, newPlayer]
        });
      }
    );
  };

  _deletePlayer = key => {
    const players = [...this.state.players];
    const playerToRemove = players.indexOf(key);
    players.splice(playerToRemove, 1);
    this.setState({ players });
  };

  _renderAddPlayerButton = () => {
    if (this.state.players.length < 5) {
      return (
        <TouchableOpacity onPress={() => this._addPlayer()}>
          <View
            style={{
              backgroundColor: '#423184',
              height: 40,
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                alignSelf: 'center',
                color: '#ffff',
                fontFamily: 'SourceCodePro-Bold'
              }}
            >
              Add Player
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
  };
  render() {
    return (
      <Subscribe to={[RootStore]}>
        {rootStore => (
          <>
            <StatusBar barStyle="light-content" />
            <FlatList
              style={{ height: '100%' }}
              data={this.state.players}
              keyExtractor={item => item.key}
              renderItem={({ item, index }) => (
                <PlayerComponent
                  index={index}
                  key={item.key}
                  store={rootStore}
                  deletePlayer={this._deletePlayer}
                  item={item}
                  backgroundColor={this.state.selectedBackgroundColor}
                />
              )}
            />
            {this._renderAddPlayerButton()}
          </>
        )}
      </Subscribe>
    );
  }
}
