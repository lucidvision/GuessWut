import { StackNavigator, TabNavigator } from 'react-navigation';
import {
  AddFriend,
  Friends,
  HostGame,
  HostingGames,
  PlayGame,
  PlayingGames,
  Profile,
  Settings,
} from '~/screens';

const PlayingStack = StackNavigator({
  Playing: {
    screen: PlayingGames,
  },
  Play: {
    screen: PlayGame,
  },
});

const HostingStack = StackNavigator({
  Hosting: {
    screen: HostingGames,
  },
  Host: {
    screen: HostGame,
  },
});

const FriendStack = StackNavigator({
  Friends: {
    screen: Friends,
  },
  Add: {
    screen: AddFriend,
  },
});

const UserStack = StackNavigator({
  Profile: {
    screen: Profile,
  },
  Settings: {
    screen: Settings,
  },
});

const RootNavigation = TabNavigator({
  Playing: PlayingStack,
  Hosting: HostingStack,
  Friends: FriendStack,
  Me: UserStack,
});

export default RootNavigation;
