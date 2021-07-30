import React from 'react';
import {View , Text , StyleSheet , Image , TouchableOpacity , Platform} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {Avatar} from 'react-native-elements';
import HeaderButton from '../components/HeaderButton';
import Card from '../components/Card';
import Colors from '../constants/Color';


const HomeScreen = props => {
  
    return(
        <View style={styles.home}>
          <Card style= {styles.buttonConatiner}>
              <Text style={styles.Text1}>Medius</Text>
              <Text style={styles.Text2}>Marium Adnan</Text>
              <View>
              <Avatar
               size={120}
              overlayContainerStyle={{backgroundColor: '#d8d8d8' , left:200 , bottom:95}}
              rounded
              source={require('../assets/avatar.png')}
               />
               </View>
          </Card>
          <View style={{flexDirection:'column'}} >
            <View style={{flexDirection:'row'}}>
              {/* TrademarkScreen */}
          <TouchableOpacity   onPress={() => {
          props.navigation.navigate({
              routeName: 'Trademark'
          }); }}>
            <View style={styles.trade}>
                <Card style= {styles.tradeConatiner} >
                  <Text style={styles.textProp}>Trade Mark</Text>
                  <Image source={require('../assets/trademark.png')}  
                  style={{ width: 90, height: 90, left: 20 , top: 10 , tintColor:Colors.primaryColor}}  />
                </Card>
            </View>
          </TouchableOpacity>
         
        {/* PatentScreen */}
        <TouchableOpacity style={styles.trade} onPress={() => {
          props.navigation.navigate({
              routeName: 'Patent'
          }); }}>
          <Card style= {styles.patentConatiner} >
            <Text style={styles.textProp}>Patents</Text>
            <Image source={require('../assets/policy.png')}  
            style={{ width: 90, height: 90, left: 20 , top: 10 , tintColor:Colors.primaryColor}}  />
          </Card>
          </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={styles.trade} onPress={() => {
          props.navigation.navigate({
              routeName: 'Copyright'
          });
      }}>
          <Card style= {styles.copyrightsConatiner} >
            <Text style={styles.textProp}>Copyrights</Text>
            <Image source={require('../assets/copyrights.png')}  
            style={{ width: 90, height: 90, left: 20 , top: 10 , tintColor:Colors.primaryColor}}  />
          </Card>
          </TouchableOpacity>

          <TouchableOpacity style={styles.trade} onPress={() => {
          props.navigation.navigate({
              routeName: 'Design'
          });
      }}>
       
          <Card style= {styles.designConatiner} >
            <Text style={styles.textProp}>Designs</Text>
            <Image source={require('../assets/web-design.png')}  
            style={{ width: 90, height: 90, left: 20 , top: 10 , tintColor:Colors.primaryColor}}  />
          </Card>
          </TouchableOpacity>
          </View>
          </View>
         </View>
        //  <CategoryGridTile style={{backgroundColor:'#bbbbb'}} />
    );

};

HomeScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Home',
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
           <Item
           title="Notification"
           iconName="md-notifications-outline"
           color='black'
           onPress={() => {
            navData.navigation.navigate({routeName: 'Setting'});
        }} />
           
          <Avatar
           size="small"
           overlayContainerStyle={{backgroundColor: 'orange'}}
           rounded
           title="US"
           onPress={() => console.log("Works!")}
           activeOpacity={0.1}
           containerStyle={{flex: 1, marginRight: 10}}
          
          />

          </HeaderButtons>
      )
    };
  };
  

const styles = StyleSheet.create({
    home:{
        // flex: 1,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
    },
  
    trade:{
    // flex: 1,
    // borderRadius: 4,
    shadowColor: 'black',
    shadowOpacity: 0.23,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    alignItems: 'flex-end',
    // padding: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
      // paddingTop: 30,
      // paddingBottom: 50,
      //  marginVertical: 50,
    marginTop:40,
    marginLeft:6,
    justifyContent: 'flex-end',
      //  paddingRight: 70,
    },
   
    buttonConatiner: {
       height: 150,
  },
  tradeConatiner: {
    // flex:1,
    height: 170,
    width: 170,
    
  },
  patentConatiner: {
    
    height: 170,
    width: 170,
  },
  copyrightsConatiner: {
    marginTop: 5,
    height: 170,
    width: 170,
    
  },
  designConatiner: {
    marginTop: 5,
    height: 170,
    width: 170,
  },
  textProp:{
      // alignItems: 'flex-start',
      fontSize: 20,
      color: '#bbbbbb',
      fontWeight: 'bold'

  },
    Text1: {
      alignItems: 'flex-start',
      fontSize: 34,
      color: '#bbbbbb',
      fontWeight: 'bold'
    },
    Text2: {
      paddingTop: 10,
      alignItems: 'flex-start',
      fontSize: 24,
      color: '#bbbbbb',

    },
    avatars:{
      flex: 1,
      flexDirection:'row',
      // justifyContent: 'fle',
     
    }
});

export default HomeScreen;