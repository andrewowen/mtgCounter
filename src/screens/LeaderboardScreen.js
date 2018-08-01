import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Subscribe } from "unstated";
import { RootStore } from "../app/RootComponent";
import { getLeaderBoard } from "../helpers";

export class LeaderboardScreen extends Component<Props> {
  state = {
    isFetching: false
  };

  _renderHeader = ({ item }) => {
    return <Text>Hi</Text>;
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
    return (
      <Subscribe to={[RootStore]}>
        {rootStore => (
          <FlatList
            style={{ marginTop: 20 }}
            refreshing={this.state.isFetching}
            onRefresh={() => this._onRefresh(rootStore)}
            data={rootStore.state.leaderboard}
            keyExtractor={item => JSON.stringify(item.id)}
            renderItem={({ item, index }) => (
              <View
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  flexDirection: "row",
                  padding: 15,
                  borderBottomWidth: 3,
                  borderBottomStartRadius: 15,
                  borderBottomEndRadius: 15
                }}
              >
                <View style={{ flex: 2 }}>
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
                <View style={{ flex: 1, flexDirection: "row-reverse" }}>
                  <Text>{Number(item.elo).toFixed(2)}</Text>
                </View>
              </View>
            )}
          />
        )}
      </Subscribe>
    );
  }
}
