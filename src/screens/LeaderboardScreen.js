import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Easing,
  Animated
} from 'react-native';
import { Subscribe } from 'unstated';
import { RootStore } from '../app/RootComponent';
import { getCommanderCardImage } from '../helpers';

export class LeaderboardScreen extends Component<Props> {
  state = {
    isFetching: false
  };

  _renderLeaderBoard = (item, index) => {
    return (
      <View style={styles.leaderboard}>
        <View style={styles.leaderboard_deckName}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Leaderboard Details', {
                item
              });
            }}
          >
            <Text>
              {index + 1}. {item.commander}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.leaderboard_deckElo}>
          <Text>{Number(item.elo).toFixed(2)}</Text>
        </View>
      </View>
    );
  };

  _onRefresh = store => {
    this.setState({ isFetching: true }, () => {
      this._fetchData(store);
    });
  };

  _fetchData = async store => {
    await store.refetchLeaderBoard();
    this.setState({ isFetching: false }, () => {
      console.warn('refreshed');
    });
  };

  render() {
    const { isFetching } = this.state;

    return (
      <Subscribe to={[RootStore]}>
        {rootStore => (
          <FlatList
            style={styles.container}
            refreshing={isFetching}
            onRefresh={() => this._onRefresh(rootStore)}
            data={rootStore.state.leaderboard}
            keyExtractor={item => JSON.stringify(item.id)}
            renderItem={({ item, index }) => (
              this._renderLeaderBoard(item, index)
            )}
          />
        )}
      </Subscribe>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  leaderboard: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 3,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15
  },
  leaderboard_deckName: {
    flex: 2
  },
  leaderboard_deckElo: {
    flex: 1,
    flexDirection: 'row-reverse'
  }
});
