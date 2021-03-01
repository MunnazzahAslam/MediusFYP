import React from 'react';
import {View , Text , StyleSheet , Platform , Image} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer , NavigationContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import { Ionicons , FontAwesome5} from '@expo/vector-icons';
import Colors from '../constants/Color';


import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/Settings';
import MyProfile from '../screens/MyProfileScreen';
import CustomDrawer from "../components/CustomDrawer";


const MediusNavigator = createStackNavigator({
    Home: HomeScreen,
    Setting: SettingScreen,
});

const MyProfileScreen = createStackNavigator({
    MyProfile: MyProfile,
    Home: HomeScreen,
    Setting: SettingScreen,

});

const MySettings = createStackNavigator({
    Setting: SettingScreen
});



const TabOptions = {
    Home: {
        screen:MediusNavigator , 
        navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return(
            <Ionicons name='ios-home' size={25} color={tabInfo.tintColor} />);
        },
        tabBarColor: Colors.primaryColor
    }},
    MyProfile: {
        screen:MyProfileScreen , 
        navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return(
                <FontAwesome5 name='user-circle' size={25} color={tabInfo.tintColor} />
          );
        },
        tabBarColor: Colors.primaryColor
    }},
    Setting: {
        screen:MySettings , 
        navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return(
                <Ionicons  name='ios-settings' size={25} color={tabInfo.tintColor} />
          );
        },
        tabBarColor: Colors.primaryColor
    }},

    
    
};


const FavNavTab = Platform.OS == 'android' ? 
createMaterialBottomTabNavigator(
    TabOptions , {
        activeColor: 'white',
        shifting: true
    }
) : createBottomTabNavigator(
    TabOptions , {
            tabBarOptions: {
                    activeTintColor: 'white'

        }
        }           
);


const MainNavigator = createDrawerNavigator(
    {
        Events: {
            screen: FavNavTab,
            navigationOptions: {
              drawerLabel: 'Home',
              drawerIcon:  <Ionicons  name='ios-settings' size={25}  />
            }
          },
          Excuse: {
            screen: MyProfileScreen,
            navigationOptions: {
              drawerLabel: 'Profile',
              drawerIcon:  <Ionicons  name='ios-settings' size={25}  />
            }
          },
      
      
    },
    {
        drawerWidth: 300,
        initialRouteName: 'Events',
        contentComponent: CustomDrawer,
        contentOptions: {
          activeTintColor: 'white',
          activeBackgroundColor: Colors.primaryColor,
          inactiveTintColor: 'black',
          labelStyle: 'normal'
        }
    }
  );


export default createAppContainer(MainNavigator);