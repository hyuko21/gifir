import { createStackNavigator } from 'react-navigation';

import Home from './components/Home';
import Gifs from './components/Gifs';
import Favorites from './components/Favorites';

export default createStackNavigator({ 
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home',
      headerTitleStyle: { fontWeight: 'bold' },
    },
  }, 
  Gifs: {
    screen: Gifs,
    navigationOptions: {
      headerTitle: 'Gifs',
      headerTitleStyle: { fontWeight: 'bold' },
    },
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      headerTitle: 'Favorites',
      headerTitleStyle: { fontWeight: 'bold' },
    },
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
