import React, {Component} from 'react';
import {StyleSheet,View,Text,Button,Image,TouchableOpacity,TextInput} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Otp extends Component{
    constructor(props) {
        super(props);
        this.state = { Password: '' };
      }
  render() {
    onPressSubmit = ()=>{
      Actions.login()
    }
    return (
        <View style={styles.conntainer}>
        <Text style={styles.text}>Password</Text><TextInput style={styles.input} value={this.state.Password} onChangeText={(psw) => this.setState({Password : psw})} secureTextEntry={true}></TextInput>
        <View style={{marginTop:20,marginBottom:20}}><Button color='#009887' onPress={onPressSubmit} title='Submit' disabled={!this.state.Password}></Button></View>
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

