import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Splash from '../components/Splash';
import BottomTabScreens from './BottomTab';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {initializeValue} from '../store/reducers/favoriteSlice';

const Stack = () => {
  const [loading, setLoading] = React.useState(true);
  const didMount = React.useRef(false);
  const favorite: any = useAppSelector(state => state.favorite.favoritePeople);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (didMount.current) {
      // avoid  render at start
      (async () => {
        let stringifiedFavorite = JSON.stringify(favorite);
        await AsyncStorage.setItem('@favorite', stringifiedFavorite);
      })();
    } else {
      didMount.current = true;
    }
  }, [favorite]);

  React.useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem('@favorite');
        if (value !== null) {
          let result = JSON.parse(value);
          dispatch(initializeValue(result));
        }
      } catch (e) {
        console.log(e);
      } finally {
        const timeout = setTimeout(() => {
          setLoading(false);
        }, 800);

        return () => clearTimeout(timeout);
      }
    })();
  }, []);

  if (loading) {
    return <Splash />;
  }

  return <BottomTabScreens />;
};

export default Stack;
