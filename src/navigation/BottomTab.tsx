import React from 'react';
//import { Ionicons } from "@expo/vector-icons";
//import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import All from '../screens/Search';
import Favorite from '../screens/Favorite';
import {IconProps} from 'react-native-vector-icons/Icon';

type TabStackProps = {
  Search: undefined;
  Favorite: undefined;
};

const BottomTab = createBottomTabNavigator<TabStackProps>();

const BottomTabScreens = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName: any;

          if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Favorite') {
            iconName = focused ? 'star' : 'star-outline';
          }
          return <Icon size={25} color="black" name={iconName} />;
        },

        tabBarLabelStyle: {fontSize: 14, paddingBottom: 15},
        tabBarStyle: {
          height: 70,
          borderTopRightRadius: 33,
          borderTopLeftRadius: 33,
        },
        tabBarIconStyle: {marginTop: 5},
      })}>
      <BottomTab.Screen name="Search" component={All} />
      <BottomTab.Screen name="Favorite" component={Favorite} />
    </BottomTab.Navigator>
  );
};

export default BottomTabScreens;
