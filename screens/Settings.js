import React from 'react';
import {View , Text , StyleSheet} from 'react-native';

const SettingScreen = props => {
    return(
        <View style={styles.setting}>
            <Text>Setting Screen!!</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    setting:{
        flex: 1
    }
});

export default SettingScreen;