import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './views/Home';
import CartScreen from './views/Details';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: { title: 'Home' }
        },
        Details: {
            screen: CartScreen,
            navigationOptions: { title: 'Cart' }
        }
    },
    {
        initialRouteName: "Home"
    }
);

export default AppNavigator;