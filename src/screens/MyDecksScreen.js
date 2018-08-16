import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { Subscribe } from "unstated";
import { RootStore } from "../app/RootComponent";

export class MyDecksScreen extends Component<Props> {
  render() {
    return (
      <Subscribe to={[RootStore]}>
        {rootStore => (
          <FlatList
            data={rootStore.state.myDeck.decks}
            keyExtractor={item => JSON.stringify(item.id)}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.decklist}
                onPress={() => {
                  this.props.navigation.navigate('My Deck Details', {
                    item
                  });
                }}
              >
                <Text>
                  {item.commander}
                </Text>
              </TouchableOpacity>
            )}
          />
        )}
      </Subscribe>
    );
  }
}

const styles = StyleSheet.create({
  decklist: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 3,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15
  }
})
