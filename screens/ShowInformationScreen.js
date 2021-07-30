import React ,{ useState , useEffect } from 'react';
import {View , StyleSheet , Image , TouchableOpacity, SafeAreaView , ScrollView , Alertcls} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import {Text, RadioButton , TextInput , Provider } from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';
import Colors from '../constants/Color';
import {INFORMATION} from '../data/dummy-data';

const ShowInformation = props => {

    const [formData , setFormData] = useState(null);
  useEffect(() => {
    // console.log(INFORMATION);
    // console.log(props.navigation.state.params);
    const {params} = props.navigation.state
    if (params) {
      const {id} = params
      if( id && INFORMATION && INFORMATION.length) {
        let data = INFORMATION.filter(info => info.caseId === id )
        if(data && data.length)
            setFormData(data[0])
      }
      
    } 
  } , [props.navigation.state.params] );

  return(
      <ScrollView>
          {formData ? 
      <View style={{flex:1}}>

          <View style={styles.searchSection}>

              <Image source={{ uri: formData.imageUrl}} style={styles.image} resizeMode="contain" />
          </View>
           <View style={styles.searchSection}>
           <Text style = {styles.heading}>Brand Name</Text>
        <TextInput
         style = {styles.input}
         editable = {false}> {formData.title}</TextInput>
          </View>
          <View style={styles.searchSection}>
              <Text style = {styles.heading}>Description</Text>
        <TextInput
         style = {styles.input}
         editable = {false}> {formData.description}</TextInput>
          </View>
          <View style={styles.searchSection}>
          <Text style = {styles.heading}>Technology</Text>
        <TextInput
         style = {styles.input}
         editable = {false}> {formData.technology}</TextInput>
          </View>
          <View style={styles.searchSection}>
          <Text style = {styles.heading}>Field</Text>
        <TextInput
         style = {styles.input}
         editable = {false}> {formData.field}</TextInput>
          </View>
          <View style={styles.searchSection}>
          <Text style = {styles.heading}>No.Of Claims</Text>
        <TextInput
         style = {styles.input}
         editable = {false}> {formData.claims}</TextInput>
          </View>
          <View style={styles.searchSection}>
          <Text style = {styles.heading}>Contact</Text>
        <TextInput
         style = {styles.input}
         editable = {false}> {formData.contact}</TextInput>
          </View>
          <View style={styles.searchSection}>
          <Text style = {styles.heading}>City</Text>
        <TextInput
         style = {styles.input}
         editable = {false}> {formData.city}</TextInput>
          </View>
          <View style={styles.searchSection}>
          <Text style = {styles.heading}>Documents Uploaded</Text>
        <TextInput
         style = {styles.input}
         editable = {false}> {formData.document}</TextInput>
          </View>
      </View>
 : <View>
     <Text>
         No data Available
     </Text>
 </View> } 
      </ScrollView>
  );
};

ShowInformation.navigationOptions = navData => {
    return {
      headerTitle: 'Case Information',
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
    Trademark:{
      justifyContent: 'center',
    },
    image:{
        width: '100%',
        height: 200
    },
    textStyle: {
      justifyContent: 'center',
      margin: 30,
      padding: 4
    },
    containerStyle: {
      marginHorizontal:  20,
      
      },
    heading: {
        margin: 10,
        marginBottom: 0,
        fontSize:18,
        fontWeight: 'bold',

    },
    input: {
        height: 50,
        margin: 10,
        fontSize:16,
        // backgroundColor: 'white' 
    },
    searchSection: {
        justifyContent: 'center',
    },
    
});

export default ShowInformation;