import React from 'react';
import {View , Text , StyleSheet , Image , TouchableOpacity , Platform} from 'react-native';
// import {View , Text , StyleSheet , Button} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {FontAwesome5 , Ionicons , MaterialIcons , Feather} from '@expo/vector-icons';
import Card from '../components/Card';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Color';

const FAQScreen = props => {
    return(
        <View style={styles.faqs}>
          <Ionicons name='help-circle-outline' size={60} color={Colors.primaryColor} />
            <Text style={{ color:'black' , fontSize:23 , fontWeight:'bold'}}>How Can We Help?</Text>

            {/* Cards */}
            <View style={{flexDirection:'column'}} >
            <View style={{flexDirection:'row'}}>
              {/* About Medius*/}
          <TouchableOpacity   onPress={() => {
          props.navigation.navigate({
              routeName: 'About'
          }); }}>
            <View style={styles.help}>
                <Card style= {styles.aboutContainer} >
                  <MaterialIcons name='mobile-friendly' size={26} color={Colors.accentColor} />
                  <Text style={styles.textProp}>About Medius</Text>
                  <Text style={styles.Text2}>All the information about medius</Text>
                </Card>
            </View>
          </TouchableOpacity>
         
        {/* PatentScreen */}
        <TouchableOpacity style={styles.help} onPress={() => {
          props.navigation.navigate({
              routeName: 'Question'
          }); }}>
          <Card style= {styles.faqContainer} >
            <Ionicons name='md-chatbubbles-outline' size={26} color={Colors.accentColor} />
            <Text style={styles.textProp}>FAQ</Text>
            <Text style={styles.Text2}>Frequently asked questions</Text>
          </Card>
          </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={styles.help} onPress={() => {
          props.navigation.navigate({
              routeName: 'Contact'
          });
      }}>
          <Card style= {styles.contactContainer} >
            <Feather name='phone-call' size={26} color={Colors.accentColor} />
            <Text style={styles.textProp}>Contact Us</Text>
            <Text style={styles.Text2}>Contact information about medius</Text>
          </Card>
          </TouchableOpacity>

          <TouchableOpacity style={styles.help} onPress={() => {
          props.navigation.navigate({
              routeName: 'Policy'
          });
      }}>
       
          <Card style= {styles.policyContainer} >
            <Ionicons name='md-newspaper-sharp' size={26} color={Colors.accentColor} />
            <Text style={styles.textProp}>Privacy Policy</Text>
            <Text style={styles.Text2}>Privacy policy of medius</Text>
          </Card>
          </TouchableOpacity>
          </View>
          </View>
          <TouchableOpacity style={styles.help} onPress={() => {
          props.navigation.navigate({
              routeName: 'Term'
          });
      }}>
       
          <Card style= {styles.termsContainer} >
            <FontAwesome5 name='handshake' size={26} color={Colors.accentColor} />
            <Text style={styles.textProp}>Terms & Conditions</Text>
            <Text style={{ paddingTop: 10,
        alignItems: 'flex-start',
        fontSize: 12,
        color: Colors.primaryColor,
  }}>Terms & Conditions </Text>
          </Card>
          </TouchableOpacity>
        </View>
    );

};


FAQScreen.navigationOptions = ({navData , navigation}) => {
    return {
      headerTitle: 'Help',
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
            onPress={() => navigation.goBack(null)} />  
        </HeaderButtons>
         
      ),
    };
  };
  



const styles = StyleSheet.create({
    faqs:{
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    help:{
      // flex: 1,
      // borderRadius: 4,
      // shadowColor: 'black',
      // shadowOpacity: 0.15,
      // shadowOffset: { width: 0, height: 1 },
      // shadowRadius: 1,
      alignItems: 'flex-end',
      // padding: 15,
      flexDirection: 'row',
      flexWrap: 'wrap',
        // paddingTop: 30,
        // paddingBottom: 50,
        //  marginVertical: 50,
      marginTop:40,
      marginLeft:10,
      marginRight:10,
      justifyContent: 'flex-end',
        //  paddingRight: 70,
      },
     
      buttonConatiner: {
         height: 150,
    },
    aboutContainer: {
      // flex:1,
      height: 160,
      width: 185,
      
    },
    faqContainer: {
      
      height: 160,
      width: 185,
    },
    contactContainer: {
      marginTop: 10,
      height: 160,
      width: 185,
      
    },
    policyContainer: {
      marginTop: 10,
      height: 160,
      width: 185,
    },
    termsContainer: {
      marginTop: 10,
      height: 160,
      width: 185,

    },
    textProp:{
      paddingTop:10,
        fontSize: 20,
        color: '#bbbbbb',
        fontWeight: 'bold'
  
    },
      
      Text2: {
        paddingTop: 10,
        alignItems: 'flex-start',
        fontSize: 12,
        color: Colors.primaryColor,
  
      },
      
});

export default FAQScreen;