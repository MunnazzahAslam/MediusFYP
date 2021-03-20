import React from 'react';
import {View , Text , StyleSheet , Image , TouchableOpacity , Platform} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {Avatar} from 'react-native-elements';
import HeaderButton from '../components/HeaderButton';
import {Ionicons} from '@expo/vector-icons';
import Colors from '../constants/Color';
import { NavigationActions } from 'react-navigation';

const PatentScreen = props => {
    return(
        <View style={styles.patent}>
            <Text>Patent Screen!!</Text>
        </View>
       
    );

};

PatentScreen.navigationOptions = ({navData , navigation}) => {
    return {
      headerTitle: 'Patent Registration',
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
        <Ionicons name='arrow-back-circle-sharp' size={40} color={Colors.primaryColor} style={{paddingRight:10}}
        onPress={() => navigation.goBack(null)} />  
  </HeaderButtons>
   ),
    };
  };
  

const styles = StyleSheet.create({
    patent:{
        flex: 1
    }
});

export default PatentScreen;