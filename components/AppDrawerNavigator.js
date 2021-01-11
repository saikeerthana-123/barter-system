import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSidebarMenu from '../customsidebarmenu.js';

export const AppDrawerNavigator = createDrawerNavigator({
   Home : { screen : AppTabNavigator }, },{
       contentComponent:CustomSidebarMenu },
     { initialRouteName : 'Home' 
    })