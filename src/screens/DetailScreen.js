import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Easing,
  Animated
} from 'react-native';
import { Subscribe } from 'unstated';
import { RootStore } from '../app/RootComponent';
import { getCommanderCardImage } from '../helpers';

export default class DetailScreen extends React.Component {
  state = {
    imageURI: 'png',
    loaded: false,
    commanderName: ''
  };
  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item', 'NO-ITEM');
    this.componentDidMount = async () => {
      const commander = await getCommanderCardImage(item.commander);
      this.setState({
        imageURI: commander.imageUrl.toString(),
        loaded: true,
        commanderName: commander.name
      });
    };
    if (this.state.loaded) {
      return (
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Image
            source={{
              uri: this.state.imageURI
            }}
            style={{
              height: 400,
              width: 400
            }}
            resizeMode="contain"
          />
          <Text>{this.state.commanderName}</Text>
        </View>
      );
    }
    return (
      <View style={{height: "100%", justifyContent: "center"}}>
        <Text style={{alignSelf:"center"}}>Loading...</Text>
      </View> 
    )
  }
}
