import { API_KEY } from 'react-native-dotenv';

export const mana = {
  mountain: '#E6AF98',
  island: '#BBDEF4',
  plains: '#FFFBDC',
  forest: '#AECFB3',
  swamp: '#838383'
};

export const getMyInfo = async () => {
  let myInfo = await (await fetch('https://hawthorn.nishtahir.com/players/9', {
    headers: {
      'x-api-key': API_KEY
    }
  })).json();
  return myInfo;
};

export const getLeaderboard = async () => {
  let leaderboard = await (await fetch(
    'https://hawthorn.nishtahir.com/decks/leaderboard',
    {
      headers: {
        'x-api-key': API_KEY
      }
    }
  )).json();
  return leaderboard;
};

export const getCommanderCardImage = async commander => {
  const url =
    `https://api.magicthegathering.io/v1/cards?` +
    `name=${commander}&` +
    `supertypes=legendary&` +
    `types=creature`;
  let res = await (await fetch(url)).json();
  let comm = res.cards[0];
  return comm;
};
