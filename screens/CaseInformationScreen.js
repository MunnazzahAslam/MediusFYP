import React, { useState } from 'react';
import {View , Text , StyleSheet , Button , FlatList} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { TextInput} from 'react-native-paper';
import { Input , Icon } from 'react-native-elements';
import { Ionicons, Feather ,  } from '@expo/vector-icons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Color';
import { CASE } from '../data/dummy-data';
import CaseGridTile from '../components/CaseGridStyle'; 


const CaseInformation = props => {
  const renderItems = itemData => {
    return(
      <CaseGridTile
        id={itemData.item.id}
        title={itemData.item.title}
        date={itemData.item.date}
        navigation={props.navigation}
       />
    );
  }; 
  
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CASE}
      renderItem={renderItems}
      // numColumns={1}
    />
  );

};


CaseInformation.navigationOptions = navData => {
  return {
    headerTitle: 'Registered Cases',
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

export default CaseInformation;