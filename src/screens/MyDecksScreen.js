import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ToucableOpacity
} from "react-native";
import { Subscribe } from "unstated";
import { RootStore } from "../app/RootComponent";

export class MyDecksScreen extends Component<Props> {
  render() {
    const decks = [{ a: "1" }, { a: "2" }];

    return (
      <Subscribe to={[RootStore]}>
        {rootStore => (
          <FlatList
            data={decks}
            keyExtractor={item => item.a}
            renderItem={({ item }) => (
              <View
                style={{
                  padding: 20,
                  backgroundColor: "#B5B8B8",
                  borderWidth: 1
                }}
              >
                <Text>{item.a}</Text>
              </View>
            )}
          />
        )}
      </Subscribe>
    );
  }
}
