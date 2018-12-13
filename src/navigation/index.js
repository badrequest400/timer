import { createStackNavigator } from 'react-navigation';
import Home from '../components/home';
import Timer from '../components/timer';
import Designer from '../components/designer';
import Load from '../components/load';

const RootStack = createStackNavigator(
  {
    Home,
    Timer,
    Designer,
    Load
  },
  { initialRouteName: 'Home' }
);

export default RootStack;
