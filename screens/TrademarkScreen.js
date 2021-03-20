import React from 'react';
import {View , Text , StyleSheet , Image , TouchableOpacity , Platform} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {Avatar} from 'react-native-elements';
import HeaderButton from '../components/HeaderButton';
import {Ionicons} from '@expo/vector-icons';
import Colors from '../constants/Color';
import { NavigationActions } from 'react-navigation';

const TrademarkScreen = props => {
    return(
        <View style={styles.Trademark}>
            <Text>Trademark Screen!!</Text>
        </View>
       
    );

};

TrademarkScreen.navigationOptions = ({navData , navigation}) => {
    return {
      headerTitle: 'Trademarks Registration',
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
    Trademark:{
        flex: 1
    }
});

export default TrademarkScreen;