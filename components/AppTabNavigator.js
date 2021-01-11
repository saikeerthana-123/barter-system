import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DonateScreen from '../screens/DonateScreen';
import RequestScreen from '../screens/RequestScreen';



export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: DonateScreen,
    navigationOptions :{
      tabBarLabel : "Request",
    }
  },
  BookRequest: {
    screen: RequestScreen,
    navigationOptions :{
      tabBarLabel : "Donate",
    }
  }
});
