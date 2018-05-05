import { StackNavigator, SwitchNavigator, TabNavigator } from 'react-navigation';
import {
  AddFriend,
  Friends,
  HostGame,
  HostingGames,
  Loading,
  Login,
  PlayGame,
  PlayingGames,
  Profile,
  Settings,
  Signup,
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

const AppTab = TabNavigator({
  Playing: PlayingStack,
  Hosting: HostingStack,
  Friends: FriendStack,
  Me: UserStack,
});

const AuthStack = StackNavigator({
  Login: {
    screen: Login,
  },
  Signup: {
    screen: Signup,
  },
});

const RootNavigation = SwitchNavigator(
  {
    Loading,
    App: AppTab,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Loading',
  },
);

export default RootNavigation;
