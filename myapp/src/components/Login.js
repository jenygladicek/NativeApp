import React, {Component} from 'react';
import {StyleSheet,View,Text,Button,Image,TouchableOpacity,TextInput} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Otp extends Component{
    constructor(props) {
        super(props);
        this.state = { RMobNo: '',RPassword  : '',buttonDisabled : true};
      }
  render() {
    handleRMobNo = ()=>{
        this.setState({'RMobNo' : psw})
    }
    handleRPassword = (psw) =>{
        this.setState({'RPassword' : psw})
    }
    onPressSignIn = () =>{
        Actions.homepage();
    }
    return (
        <View style={styles.conntainer}>
        <Text style={styles.text}>Registered MooON Mobile Number</Text><TextInput style={styles.input} value={this.state.RMobNo} onChangeText={mNo => this.setState({RMobNo : mNo})} keyboardType="numeric"></TextInput>
        <Text style={styles.text}>MooON Password</Text><TextInput style={styles.input} value={this.state.RPassword} onChangeText={psw => this.setState({RPassword : psw})} secureTextEntry={true}></TextInput>
        <Text style={{textAlign:'right'}}>Forgot?</Text>
        <View style={{marginTop:20,marginBottom:20}}><Button color='#009887' onPress={onPressSignIn} title='Sign In' disabled={!this.state.RMobNo || ! this.state.RPassword}></Button></View>
        <View style={{marginTop:20,marginBottom:20,justifyContent : 'center',alignItems : 'center'}}><Text style={styles.text} onPress={()=>Actions.signup()}>New Member? Sign Up</Text></View>
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
      input: {
          borderBottomColor: 'grey',
          borderBottomWidth: 1      
       },
       text : {
           fontSize : 15,
           color : 'grey'
       }
});

