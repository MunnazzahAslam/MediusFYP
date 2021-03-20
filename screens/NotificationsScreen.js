import React from 'react';
import {View , Text , StyleSheet , Button} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {FontAwesome5} from '@expo/vector-icons';

import HeaderButton from '../components/HeaderButton';

const NotificationsScreen = props => {
    return(
        <View style={styles.profile}>
            <Text>Welcome to Notifications</Text>
        </View>
    );

};


NotificationsScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Notifications Status',
      headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
        
            title="Menu"
            iconName="ios-menu"
            color='black'
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
      headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <FontAwesome5 
          
          name="user-circle"
          color='black'
          size={23}
          onPress={() => {
           console.log('My profile')
          }}
          />
          <Item
           title="Logout"
           iconName="log-out-outline"
           color='black'
           onPress={() => {
            console.log('My Logout')
           }} />
           
          
         
          </HeaderButtons>
      )
    };
  };
  



const styles = StyleSheet.create({
    profile:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default NotificationsScreen;