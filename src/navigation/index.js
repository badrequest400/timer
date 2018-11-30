import { createStackNavigator } from 'react-navigation';
import Home from '../components/home';
import Timer from '../components/timer';

export default createStackNavigator(
  {
    Home,
    Timer,
  },
  { initialRouteName: 'Home' }
);
