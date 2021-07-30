import React from 'react';
import {View , Text , StyleSheet , Button ,TouchableOpacity, ScrollView} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {FontAwesome5 , Ionicons , AntDesign , Entypo,MaterialCommunityIcons} from '@expo/vector-icons';
import {Avatar} from 'react-native-elements';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Color';
import { Alert } from 'react-native';
import { TextInput , HelperText} from 'react-native-paper';




const ProfileScreen = () => {

  const [text, setText] = React.useState('');

  const onChangeText = text => setText(text);

 const hasErrors = () => {
   return !text.includes('@');
 };
 
    return(
      <ScrollView>
        <View style={styles.profile}>
          <View style={styles.avt}>
       <FontAwesome5 name="user-circle" size={100} color={Colors.primaryColor} />
       </View>

       <View style={styles.searchSection}>
         <TextInput  
           mode='outlined'
           theme={{
            colors: {
                       placeholder: Colors.accentColor , text: 'black', primary: Colors.primaryColor,
                       underlineColor: 'transparent', 
               }
         }}
          // onChangeText={this.uaserNameTextChange}  
          label="First Name"  
          style={styles.input}
          left={
            <TextInput.Icon
            name="account"
            color={Colors.accentColor}
            style={{paddingTop:7}}
        />
            }
        />  
       </View>

       <View style={styles.searchSection}>
         <TextInput  
           mode='outlined'
           theme={{
            colors: {
                       placeholder: Colors.accentColor , text: 'black', primary: Colors.primaryColor,
                       underlineColor: 'transparent', 
               }
         }}
          // onChangeText={this.uaserNameTextChange}  
          label="Last Name"  
          style={styles.input}
          left={
            <TextInput.Icon
            name="account"
            color={Colors.accentColor}
            style={{paddingTop:7}}
        />
            }
        />  
       </View>
       
       
       <View style={styles.searchSection}>
         <TextInput  
         value={text} onChangeText={onChangeText}
           mode='outlined'
           theme={{
            colors: {
                       placeholder: Colors.accentColor , text: 'black', primary: Colors.primaryColor,
                       underlineColor: 'transparent', 
               }
         }}
          // onChangeText={this.uaserNameTextChange}  
          label="User Name"  
          style={styles.input}
          left={
            <TextInput.Icon
            name="account"
            color={Colors.accentColor}
            style={{paddingTop:7}}
        />
            }
        />  
      
       </View>

       <View style={styles.searchSection}>
         <TextInput  
           mode='outlined'
           theme={{
            colors: {
                       placeholder: Colors.accentColor , text: 'black', primary: Colors.primaryColor,
                       underlineColor: 'transparent', 
               }
         }}
          // onChangeText={this.uaserNameTextChange}  
          label="Email"  
          style={styles.input}
          left={
            <TextInput.Icon
            name="email"
            color={Colors.accentColor}
            style={{paddingTop:7}}
        />
            }
        />  
       </View>

       <View style={styles.searchSection}>
         <TextInput  
           mode='outlined'
           keyboardType='numeric'
           theme={{
            colors: {
                       placeholder: Colors.accentColor , text: 'black', primary: Colors.primaryColor,
                       underlineColor: 'transparent', 
               }
         }}
          // onChangeText={this.uaserNameTextChange}  
          label="Contact"  
          style={styles.input}
          left={
            <TextInput.Icon
            name="phone-plus"
            color={Colors.accentColor}
            style={{paddingTop:7}}
        />
            }
        />  
       </View>

       <View style={styles.searchSection}>
         <TextInput  
           mode='outlined'
           theme={{
            colors: {
                       placeholder: Colors.accentColor , text: 'black', primary: Colors.primaryColor,
                       underlineColor: 'transparent', 
               }
         }}
          // onChangeText={this.uaserNameTextChange}  
          label="CNIC"  
          style={styles.input}
          left={
            <TextInput.Icon
            name="card-text-outline"
            color={Colors.accentColor}
            style={{paddingTop:7}}
        />
            }
        />  
       </View>

        <TouchableOpacity onPress={() => Alert.alert('Your Profile Has Been Updated!')} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>Save</Text>
  </TouchableOpacity>
    
        </View>
        </ScrollView>
    );

};


ProfileScreen.navigationOptions = navData => {
  return {
    headerTitle: 'profile Screen!!',
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
  avt:{
    justifyContent: 'center',
     alignItems: 'center',
     paddingTop: 10,

  },
  input: {
   
    // flex:1,
    // width: 200,
    height: 43,
    // padding: 8,
  //  borderBottomWidth: 1,
  //   borderBottomColor: Colors.accentColor, 
    // borderWidth: 1,
    // borderColor: 'black',
    margin: 10,
    fontSize:20,
  },
    profile:{
        // flex: 1,
        justifyContent: 'center',
      //  alignItems: 'center'
    },
    textInputStyle: {  
      // // borderColor: '#9a73ef',  
      // // borderWidth: 1,  
      borderBottomWidth: 1,
      borderBottomColor: Colors.accentColor,
      height: 40,  
      fontSize: 20,
      fontWeight: 'bold',
      // marginLeft: 20,  
      margin: 12,
      padding: 8,  
     
    },  
    btn:{

      marginLeft:100,
      marginRight:100,

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
    searchSection: {
      // flexDirection:'row',
      justifyContent: 'center',
      // paddingLeft: 20,
      // justifyContent: 'center',
      // alignItems: 'center',
      // backgroundColor: '#fff',
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
},
});

export default ProfileScreen;