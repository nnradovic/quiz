import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import Home from './Home';
import Game from './Game';

const App = createStackNavigator({
  Home: { screen: Home },
  Game: { screen: Game},
});
const AppNavigator = createAppContainer(App);

export default AppNavigator;


