import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Subscribe } from "unstated";
import { RootStore } from "../app/RootComponent";

export class LeaderboardScreen extends Component<Props> {
  state = {
    isFetching: false
  };

  _renderHeader = ({ item }) => {
    return <Text>Hi</Text>;
    );
  };

  _renderLeaderBoard = (item, index) => {
    return (
      <View style={styles.leaderboard}>
        <View style={styles.leaderboard__deckName}>
          <TouchableOpacity
            onPress={() =>
              alert(`W: ${item.wins} L: ${item.games - item.wins}`)
            }
          >
            <Text>
              {index + 1}. {item.commander}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.leaderboard__deckElo}>
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
      console.warn("refreshed");
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
            renderItem={({ item, index }) =>
              this._renderLeaderBoard(item, index)
            }
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
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 3,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15
  },
  leaderboard__deckName: {
    flex: 2
  },
  leaderboard__deckElo: {
    flex: 1,
    flexDirection: "row-reverse"
  }
});
