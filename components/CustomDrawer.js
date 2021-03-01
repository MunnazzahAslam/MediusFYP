import React from 'react';
import {View,Text,ScrollView,StyleSheet} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import {SafeAreaView} from 'react-navigation';
import {Avatar} from 'react-native-elements';
import Colors from '../constants/Color';

const CustomDrawer = props => {
    return(
        <View style={{ flex: 1 }}>

        <ScrollView>
          <SafeAreaView
            // style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never' }}
          >
            <View style={{backgroundColor:Colors.primaryColor}}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Avatar
                    size="xlarge"
                    overlayContainerStyle={{backgroundColor: 'grey'}}
                    rounded
                    icon={{name: 'user', type: 'font-awesome' , color: 'orange' , size:'23'}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    containerStyle={{flex: 2, marginLeft: 10, marginTop: 60}}
                    />
                {/* <Avatar rounded title="US" /> */}
                <Text style={{ color: 'white', marginTop: '7%', fontFamily: 'sans-serif-condensed' }}>hey,Marium</Text>
                <Text style={{ color: 'white', fontFamily: 'sans-serif-condensed' }}>UserName</Text>
              </View>
            </View>

            <DrawerItems {...props} />

            </SafeAreaView>
            </ScrollView>
            </View>
    );
};

const styles = StyleSheet.create({

});

export default CustomDrawer;