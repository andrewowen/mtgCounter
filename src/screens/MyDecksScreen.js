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
    return (
      <Subscribe to={[RootStore]}>
        {rootStore => (
          <FlatList
            style={{ marginTop: 20 }}
            data={rootStore.state.myDeck.decks}
            keyExtractor={item => JSON.stringify(item.id)}
            renderItem={({ item }) => (
              <View
                style={{
                  padding: 20,
                  backgroundColor: "#9ECCC9",
                  borderWidth: 10,
                  borderStyle: "solid",
                  borderColor: "#549288"
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontStyle: "normal",
                    fontWeight: "bold"
                  }}
                >
                  {item.alias.toUpperCase()}
                </Text>
              </View>
            )}
          />
        )}
      </Subscribe>
    );
  }
}
