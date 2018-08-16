import React, { Component } from 'react';
import {
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import PlayerLifeButton from '../components/PlayerLifeButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Subscribe } from 'unstated';
import { RootStore } from '../app/RootComponent';
import { PlayerComponent } from '../components/PlayerComponent';
import { mana } from '../helpers';

export class MainScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const iconSize = 30;
    const iconColor = '#fff';
    return {
      headerRight: (
        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={navigation.getParam('addPlayer')}
        >
          <Icon name="add" size={iconSize} color={iconColor} />
        </TouchableOpacity>
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ addPlayer: this._addPlayer });
  }

  state = {
    players: [{ key: '00000' }],
    playerBackgroundColor: [
      mana.mountain,
      mana.island,
      mana.plains,
      mana.forest,
      mana.swamp
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
          </>
        )}
      </Subscribe>
    );
  }
}
