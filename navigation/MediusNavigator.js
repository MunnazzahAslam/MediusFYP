import React from 'react';
import {View , Text , StyleSheet , Platform , Image} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import { Ionicons , FontAwesome5 , AntDesign , MaterialCommunityIcons} from '@expo/vector-icons';
import Colors from '../constants/Color';
//components
import CustomDrawer from "../components/CustomDrawer";

//screens
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/Settings';
import ProfileScreen from '../screens/MyProfileScreen';
import CaseInformation from '../screens/CaseInformationScreen';
import RegistrationStatus from "../screens/RegistrationStatusScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import FAQScreen from "../screens/FAQsScreen";
import LogoutScreen from '../screens/logoutScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import TrademarkScreen from '../screens/TrademarkScreen';
import PatentScreen from '../screens/PatentScreen';
import DesignScreen from '../screens/DesignScreen';
import CopyrightScreen from '../screens/CopyrightScreen';
import AboutScreen from '../screens/AboutScreen';
import QuestionScreen from '../screens/QuestionScreen';
import PolicyScreen from '../screens/PolicyScreen';
import ContactScreen from '../screens/ContactScreen';
import TermScreen from '../screens/TermScreen';


const MediusNavigator = createStackNavigator({
    Home: HomeScreen,
    Setting: SettingScreen,
    Password: ChangePasswordScreen,
    Trademark: TrademarkScreen,
    Patent: PatentScreen,
    Design: DesignScreen,
    Copyright: CopyrightScreen,
   
   
});

const Profile = createStackNavigator({
    MyProfile: ProfileScreen,
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
        screen:Profile , 
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
// Drawer Items
const CaseNavigator = createStackNavigator(
    {
     Case: CaseInformation
    },
  );

const RegisterNavigator = createStackNavigator({
    Register: RegistrationStatus
});

const NotificationNavigator = createStackNavigator({
    Notification: NotificationsScreen
});

const PasswordNavigator = createStackNavigator({
    Change: ChangePasswordScreen
});

const HelpNavigator = createStackNavigator({
    Help: FAQScreen,
    About: AboutScreen,
    Question: QuestionScreen,
    Policy: PolicyScreen,
    Contact: ContactScreen,
    Term: TermScreen,
});

const LogoutNavigator = createStackNavigator({
    Logout: LogoutScreen
});

const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: FavNavTab,
            navigationOptions: {
                drawerLabel: 'Home',
                drawerIcon:  <MaterialCommunityIcons  name='home-circle-outline' size={25}  />
              }

        },
        Case: {
           screen: CaseNavigator,
           navigationOptions: {
            drawerLabel: 'Case Information',
            drawerIcon:  <Ionicons  name='information-circle-outline' size={25}  />
          }
       },
        Registration: {
        screen: RegisterNavigator,
        navigationOptions: {
         drawerLabel: 'Registration Status',
         drawerIcon:  <MaterialCommunityIcons  name='registered-trademark' size={25}  />
       }
    },
        Excuse: {
            screen: Profile,
            navigationOptions: {
              drawerLabel: 'My Profile',
              drawerIcon:  <FontAwesome5  name='user-circle' size={25}  />
            }
          },
        Notification: {
            screen: NotificationNavigator,
            navigationOptions: {
             drawerLabel: 'Notifications',
             drawerIcon:  <Ionicons  name='notifications-circle-outline' size={25}  />
           }
        },
        Change: {
            screen: PasswordNavigator,
            navigationOptions: {
             drawerLabel: 'Change Password',
             drawerIcon:  <FontAwesome5  name='lock' size={23}  />
           }
        },
        Help: {
            screen: HelpNavigator,
            navigationOptions: {
             drawerLabel: 'FAQs & Help',
             drawerIcon:  <Ionicons  name='help-circle-outline' size={25}  />
           }
        },
        Logout: {
            screen: LogoutNavigator,
            navigationOptions: {
            //  drawerLabel: 'FAQs & Help',
             drawerIcon:  <AntDesign  name='logout' size={25}  />
           }
        },
    },
    {
        drawerWidth: 300,
        initialRouteName: 'Home',
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