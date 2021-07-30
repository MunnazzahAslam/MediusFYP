import React ,{ useState , useEffect } from 'react';
import {View , StyleSheet , Image , TouchableOpacity, SafeAreaView , ScrollView , Alert , Switch} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {Avatar} from 'react-native-elements';
import { Input , Icon } from 'react-native-elements';
import HeaderButton from '../components/HeaderButton';
import {Text, RadioButton , TextInput , Provider } from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';
import Colors from '../constants/Color';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import * as yup from 'yup';
import { Formik } from 'formik';
import ModalSelector from 'react-native-modal-selector';
import { RestClient } from '../services/network/index';
import {END_POINTS} from '../constants/apis';
import DropDown from '../components/DropDown';
import { useDispatch , useSelector } from 'react-redux';
import { customisedAction } from '../redux/actions';
import { GET_CITIES, GET_TECHNOLOGIES } from '../constants/actions';
//dispatch: action call krny k lye
//selector: reducer sy data nikalny k lye

const phoneRegExp = RegExp(/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/);
const loginValidationSchema = yup.object().shape({

  title: yup
      .string()
      .required('Title is Required'),
  description: yup
      .string()
      .required('Description is Required'),
  claims: yup
      .number('Number of claims must be a number')
      .typeError('Number of claims must be a number')
      .max(50, ({ max }) => `Please enter a number less than 50`)
      .required('Number of claims is Required')
      .positive('Number of claims must be positive')
      .integer('Number of claims must be a number'),
  number: yup
      .string().matches(phoneRegExp, 'Phone number is not valid')
      .required('Cellphone number is Required'),
  city: yup
      .string()
      .required('City is Required'),
})

//used hooks
const DesignScreen = () => {

  const [value, setValue] = React.useState('first');
  const [term , setTerm] = React.useState('first');
  const [fileName, setfileName] = useState("No file selected");
  const [textInputValue, setTextInputValue] = useState("");
  const [techInputValue, setTechInputValue] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const cities = useSelector(({ genericDataReducer }) => genericDataReducer.cities)
  const technologies = useSelector(({ genericDataReducer }) => genericDataReducer.technologies)
  const dispatch = useDispatch()
  // api calling get cities
          useEffect( () => {
            if(!cities || !cities.length){
            dispatch(customisedAction(GET_CITIES))
            }
            if(!technologies || !technologies.length){
              dispatch(customisedAction(GET_TECHNOLOGIES))
            }

          }, []);

  let pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
        copyToCacheDirectory: true,
        multiple: false
      });
      console.log(result.uri);
      setfileName(result.name)
      console.log(result);
};

  
let openImagePickerAsync = async () => {
  let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (permissionResult.granted === false) {
    alert('Permission to access camera roll is required!');
    return;
  }

  let pickerResult = await ImagePicker.launchImageLibraryAsync();

  if (pickerResult.cancelled === true) {
    return;
  }
  setSelectedImage( pickerResult.uri );
};

    return(
      
      <Provider>
        <ScrollView
        keyboardShouldPersistTaps= "handled"
        >
        <SafeAreaView  style={styles.containerStyle}>

        <Formik
            validateOnMount={true}
            validationSchema={loginValidationSchema}
            initialValues={{ title: '', description: '', number: '',claims: '', city: '' }}
            onSubmit={values => console.log(values)}
        >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                isValid,
            }) => (
         <>
         <View style={styles.Trademark}>
           {/* ImagePicker section */}
           <View style={styles.container}>
                  {/* <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} /> */}
                  {/* <Text style={styles.instructinions}>
                   Select a Photo for your Patent
                  </Text> */}

                  <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                    <Text style={styles.buttonText}>Upload photo</Text>
                  </TouchableOpacity>
                  
          </View>
          <View style={styles.Imagecontainer}>
                      <Image
                        source={ selectedImage ? { uri: selectedImage  } : require('../assets/addIcon.png')}
                        style={styles.thumbnail}
                        // resizeMode={"contain"}
                      />
                    </View>

           <View style={styles.searchSection}>
        <TextInput
         style = {styles.input}
         label = "Title"
         name = "title"
         onChangeText={handleChange('title')}
         onBlur={handleBlur('title')}
         value={values.title}
         theme={{
          colors: {
                      text: 'black', primary: Colors.primaryColor,
                     underlineColor: 'transparent', 
             }
        }}
          />
           {(errors.title && touched.title) &&
              <Text style={styles.errorTextStyle}>{errors.title}</Text>
            }
          </View>

          <View style={styles.searchSection}>
           <TextInput
         label = "Description"
         name = "description"
         style = {styles.input}
         theme={{
          colors: {
                      text: 'black', primary: Colors.primaryColor,
                     underlineColor: 'transparent', 
             }
       }}
       onChangeText={handleChange('description')}
       onBlur={handleBlur('description')}
       value={values.description}
          />
          {(errors.description && touched.description) &&
              <Text style={styles.errorTextStyle}>{errors.description}</Text>
          }
          </View>
         
          <View style={styles.searchSection}>
          <Text  style = {styles.txt}>Application/Registration</Text>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                 <RadioButton value="Normal Registration" />
                 <Text style={styles.radText}>Normal Registration</Text>
           </View>
          <View style={{flexDirection:'row', flexWrap:'wrap' , }}>
              <RadioButton value="Fast Registration" />
                <Text style={styles.radText}>Fast Registration</Text>
          </View>
    </RadioButton.Group>
    </View>
       
    <View style={styles.searchSection}>
                <DropDown 
                  data={technologies}
                  initValue="Select Technology"
                  onChange={(option)=>{ setTechInputValue(option.label)}}
                  style={styles.input}
                  placeholder="Select Technology"
                  value={techInputValue}
                />
            </View>

                    
          <View style={styles.searchSection}>
         <TextInput
         label = "No. of claims"
         style = {styles.input}
         name = "claims"
         keyboardType = "numeric"
         theme={{
          colors: {
                      text: 'black', primary: Colors.primaryColor,
                     underlineColor: 'transparent', 
             }
       }}
          onChangeText={handleChange('claims')}
          onBlur={handleBlur('claims')}
          value={values.claims}
   />
          {(errors.claims && touched.claims) &&
              <Text style={styles.errorTextStyle}>{errors.claims}</Text>
          }
            </View>
                    {/* modal seletor dropdown */}
            {/* <View style={{flex:1, justifyContent:'space-around', padding:50}}> */}
            <View style={styles.searchSection}>
                {/* // Wrapper */}
                <ModalSelector
                    data={cities}
                    initValue="Select City"
                    supportedOrientations={['landscape']}
                    accessible={true}
                    scrollViewAccessibilityLabel={'Scrollable options'}
                    cancelButtonAccessibilityLabel={'Cancel Button'}
                    optionTextStyle = {{color: Colors.primaryColor}}
                    onChange={(option)=>{ setTextInputValue(option.label)}}>
 
                    <TextInput
                         style={styles.input}
                        // style={{borderWidth:1, borderColor:'#ccc', padding:10, height:30}}
                        editable={false}
                        placeholder="Select any city"
                        value={textInputValue} />
                </ModalSelector>
            </View>
         
              <View style={styles.searchSection}>
            <TextInput
            label = "Cellphone"
            style = {styles.input}
            name = "number"
            keyboardType = "numeric"
            theme={{
              colors: {
                      text: 'black', primary: Colors.primaryColor,
                     underlineColor: 'transparent', 
             }
       }}
          onChangeText={handleChange('number')}
          onBlur={handleBlur('number')}
          value={values.number}
      />
      {(errors.number && touched.number) &&
          <Text style={styles.errorTextStyle}>{errors.number}</Text>
      }
          </View>

          <View style={styles.searchSection}>
          <Text style={styles.txt}>Upload documents in PDF format</Text>
          </View>
         <View style={{
           flexDirection: 'row',
           flexWrap: 'wrap',
         }}>
           <Text style={styles.txt}>{fileName}</Text>
          <TouchableOpacity onPress={pickDocument} style={styles.uploadContainer}>
                <Text style={styles.upload}>Upload</Text>
               
            </TouchableOpacity>
            
            </View>
            
          
            <View style={styles.searchSection}>
          <RadioButton.Group onValueChange={newValue => setTerm(newValue)}  >
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          <Text style={styles.txt}>I agree to all terms and conditions</Text>
              <RadioButton  value="Normal Registration" />
              
          </View>
          </RadioButton.Group>
          </View>
          <View style={styles.searchSection}>
           
          <TouchableOpacity onPress={() => null} style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}>Register</Text>
            </TouchableOpacity>
            </View>
        </View>
        </>
          )}
        </Formik>
        </SafeAreaView>
        </ScrollView>
            </Provider>

);
};

DesignScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Design Registration',
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
  container: {
    paddingTop:10,
    // flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  Imagecontainer:{
    marginLeft: 8,
    // height: 82,
    // width: 82,
    overflow: 'hidden',
    // borderRadius: 40,
    // borderWidth: 1
  },
  thumbnail: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
    Trademark:{
      justifyContent: 'center',
    },
    textStyle: {
      justifyContent: 'center',
      margin: 30,
      padding: 4
    },
    radText:{
      fontSize:14,
      paddingTop:3,
      
    },
    containerStyle: {
      marginHorizontal:  20,
      
      },
      agree:{
    
        fontSize: 18,
      },
      txt:{
        // paddingTop: 3,
        // height: 20,
        margin: 10,
        fontSize:16
      },
      errorTextStyle: {
        color: 'red',
        fontSize: 14,
        justifyContent: 'center',
        marginLeft: 10,
    },
      input: {
        height: 50,
        margin: 10,
        fontSize:16,
        // backgroundColor: 'white' 
      },
      upload:{
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        color: 'white'
      },
      uploadContainer:{
        marginTop:8,
        marginLeft: 250,
        marginRight:10,
        elevation: 2,
        backgroundColor: Colors.primaryColor,
        borderRadius: 10,
        padding:11,
      },
      appButtonContainer: {
        marginTop:8,
        marginLeft:120,
        marginRight:110,
        marginBottom: 20,
        elevation: 8,
        backgroundColor: Colors.primaryColor,
        borderRadius: 17,
        padding:11,
        
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
      searchSection: {
        justifyContent: 'center',
    },
    
});

export default DesignScreen;
