import { API_KEY } from "react-native-dotenv";

export const getMyInfo = async () => {
  let myInfo = await (await fetch("https://hawthorn.nishtahir.com/player/8", {
    headers: {
      "x-api-key": API_KEY
    }
  })).json();
  return myInfo;
};

export const getLeaderboard = async () => {
  let leaderboard = await (await fetch(
    "https://hawthorn.nishtahir.com/deck/leaderboard",
    {
      headers: {
        "x-api-key": API_KEY
      }
    }
  )).json();
  return leaderboard;
};
