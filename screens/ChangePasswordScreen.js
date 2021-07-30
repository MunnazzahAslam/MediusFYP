import React, { useState } from 'react';
import {View , Text , StyleSheet , Button} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { TextInput} from 'react-native-paper';
import { Input , Icon } from 'react-native-elements';
import { Ionicons, Feather ,  } from '@expo/vector-icons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Color';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Alert } from 'react-native';
import SweetAlert from 'react-native-sweet-alert';


 ChangePasswordScreen = props => {
  const [text, setText] = useState(true);
  const [secureText , setSecureText] = useState(true);
  const [secureText1 , setSecureText1] = useState(true);

    return(
        <View style={styles.profile}>
          <View  style={styles.searchSection}>
          <Input
           label = "Enter Old Password"
           style = {styles.input}
           secureTextEntry = {text}
           rightIcon = {
           <TouchableOpacity
           onPress = {() => {setText((prev) => !prev )
          } }
           >
             {
               text ? (
                 <Icon name='eye-off-outline'
                 type='ionicon'
                 color='#000000'/>
               ) : (
                 <Icon name = 'eye-outline'
                 type='ionicon'
                 color= {Colors.primaryColor} />
               )
             }
              
           </TouchableOpacity>
          } 
          />
          <Input
           label = "Enter New Password"
           style = {styles.input}
           secureTextEntry = {secureText}
           rightIcon = {
           <TouchableOpacity
           onPress = {() => {setSecureText((prev) => !prev )
          } }
           >
             {
               secureText ? (
                 <Icon name='eye-off-outline'
                 type='ionicon'
                 color='#000000'/>
               ) : (
                 <Icon name = 'eye-outline'
                 type='ionicon'
                 color= {Colors.primaryColor} />
               )
             }
              
           </TouchableOpacity>
          } 
          />
            <Input
           label = "Confirm Password"
           style = {styles.input}
           secureTextEntry = {secureText1}
           rightIcon = {
           <TouchableOpacity
           onPress = {() => {setSecureText1((prev) => !prev )
          } }
           >
             {
               secureText1 ? (
                 <Icon name='eye-off-outline'
                 type='ionicon'
                 color='#000000'/>
               ) : (
                 <Icon name = 'eye-outline'
                 type='ionicon'
                 color= {Colors.primaryColor} />
               )
             }
              
           </TouchableOpacity>
          } 
          />
          <TouchableOpacity onPress={() => 
            Alert.alert('Your Password Has Been Updated!')} 
            style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Save</Text>
          </TouchableOpacity>
          </View>
           
        </View>
    );

};


ChangePasswordScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Change Password!',
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
          <Ionicons name='arrow-back-circle-sharp' size={40} 
          color={Colors.primaryColor} style={{paddingRight:10}}
          onPress={() => navData.navigation.goBack(null)}
           />
      </HeaderButtons>
       
    ),
  };
};





const styles = StyleSheet.create({
    profile:{
      flex: 1,
      justifyContent: 'center',
        // alignItems: 'center'
    },
    input: {
      // height: 43,
      // margin: 20,
      fontSize: 20,
      borderColor: Colors.primaryColor
    },
    searchSection: {
      justifyContent: 'center',
      margin: 30,
    },
    appButtonContainer: {
      marginTop:8,
      marginLeft:120,
      marginRight:110,
      elevation: 8,
      backgroundColor: Colors.primaryColor,
      borderRadius: 17,
      padding:16,
      // paddingVertical: 10,
      // // paddingRight:10,
      // paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
});

export default ChangePasswordScreen;