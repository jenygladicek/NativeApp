import React, {Component} from 'react';
import {StyleSheet,View,TextInput,Text,CheckBox,Button} from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class ImgComponent extends Component{
    constructor(props) {
        super(props);
        this.state = { text: '' ,checked : false};
      }
  render() {
    onPressSignUp = () => {
        alert('hi');
    }
    return (
      <View style={styles.conntainer}>
      <Text style={styles.text}>Mobile Number</Text><TextInput style={styles.input} onChangeText={(text) => this.setState({text})} value={this.state.text}></TextInput>
      <View style={{flexDirection : 'row',marginTop:20,marginBottom:20}}><CheckBox value={this.state.checked}/><Text style={styles.text}>I agree to Stellapps Terms of Use and Privacy Policy</Text></View>
      <Button onPress={onPressSignUp} title='Sign Up'></Button>
      <View style={{marginTop:20,marginBottom:20,justifyContent : 'center',alignItems : 'center'}}><Text style={styles.text}>Already Member? Sign In</Text></View>
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
        borderBottomWidth: 1,      
     },
     text : {
         fontSize : 15,
         color : 'grey'
     }
  });