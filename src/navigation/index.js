import { createStackNavigator } from 'react-navigation';
import Home from '../components/home';
import Timer from '../components/timer';

const RootStack = createStackNavigator(
  {
    Home,
    Timer,
  },
  { initialRouteName: 'Home' }
);

export default RootStack;
