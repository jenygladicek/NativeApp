import React, {Component} from 'react';
import {StyleSheet,View,Text,Button,Image,TouchableOpacity,TextInput} from 'react-native';
import { Actions } from 'react-native-router-flux';
import OtpInputs from 'react-native-otp-inputs'

export default class Otp extends Component{
  render() {
    onPressVerify = ()=>{
      Actions.passwordPage()
    }
    return (
      <View style={styles.conntainer}>
      <Text style={styles.otptext}>Verify your Mobile Number</Text>
      <Text style={styles.otptext}>Enter your OTP here</Text>
      <View style={{flexDirection : 'row',marginTop:20,marginBottom:20}}><OtpInputs handleChange={code => console.log(code)} numberOfInputs={4} inputContainerStyles={{borderBottomColor: 'red',borderBottomWidth: 1,margin :0,padding :0}}/></View>
      <Button color='#009887' onPress={onPressVerify} title='Verify'></Button>
      <View style={{marginTop:20,marginBottom:20,justifyContent : 'center',alignItems : 'center'}}><Text style={{fontSize : 15,color : 'grey'}}>Didn't get the Code? Resend code.</Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conntainer : {
    flex : 1,
    backgroundColor : '#FFFFFF',
    padding : 20
  },
  otptext : {
    fontSize : 15,
    textAlign : 'center'
}
});

