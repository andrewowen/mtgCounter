import { Navigation } from "react-native-navigation";

import MainScreen from "./MainScreen";
import MyDecksScreen from "./MyDecksScreen";

export function registerScreens() {
  Navigation.registerComponent("mtg.MainScreen", () => MainScreen);
  Navigation.registerComponent("mtg.MyDecksScreen", () => MyDecksScreen);
}
