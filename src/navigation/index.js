import { createStackNavigator } from 'react-navigation';
import Home from '../components/home';
import Timer from '../components/timer';
import Designer from '../components/designer';

const RootStack = createStackNavigator(
  {
    Home,
    Timer,
    Designer,
  },
  { initialRouteName: 'Home' }
);

export default RootStack;
