import React from 'react';
import {View , Text , StyleSheet} from 'react-native';

const OTPScreen = props => {
    return(
        <View style={styles.otp}>
            <Text>OTP Screen!!</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    otp:{
        flex: 1
    }
});

export default OTPScreen;