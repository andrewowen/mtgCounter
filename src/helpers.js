import { API_KEY } from "react-native-dotenv";

export const getMyInfo = async () => {
  let myInfo = await await fetch("https://hawthorn.nishtahir.com/player/8", {
    headers: {
      "x-api-key": API_KEY
    }
  });
  return myInfo;
};
