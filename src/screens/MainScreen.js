import React, { Component } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import PlayerLifeButton from '../components/PlayerLifeButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Subscribe } from 'unstated';
import { RootStore } from '../app/RootComponent';
import { PlayerComponent } from '../components/PlayerComponent';

export class MainScreen extends Component {
  state = {
    players: []
  };

  _addPlayer = () => {
    const randomKey = JSON.stringify(Math.floor(1000 + Math.random() * 1000));
    const newPlayer = { key: randomKey };
    this.setState({
      players: [...this.state.players, newPlayer]
    });
  };

  _deletePlayer = key => {
    const players = [...this.state.players];
    const playerToRemove = players.indexOf(key);
    players.splice(playerToRemove, 1);
    this.setState({ players });
  };
  render() {
    return (
      <Subscribe to={[RootStore]}>
        {rootStore => (
          <>
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
                />
              )}
            />
            <TouchableOpacity onPress={() => this._addPlayer()}>
              <View
                style={{
                  backgroundColor: '#0058A0',
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
          </>
        )}
      </Subscribe>
    );
  }
}
