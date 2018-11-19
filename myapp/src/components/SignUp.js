import React, {Component} from 'react';
import {StyleSheet,View,TextInput,Text,CheckBox,Button,Alert,TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class ImgComponent extends Component{
    constructor(props) {
        super(props);
        this.state = { text: '' ,checked : false,buttonDisabled : true,agree : false};
      }
  render() {
    onPressSignUp = () => {
        Actions.otp();
    }
    const otpmsg = <Text>You'll receive an SMS to verify your phone number</Text>;
    const emptymsg = <Text></Text>;
    return (
      <View style={styles.conntainer}>
      <Text style={styles.text}>Mobile Number</Text><TextInput style={styles.input} value={this.state.text} onChangeText={(text)=> this.setState({text : text})} keyboardType="numeric"></TextInput>
      <View style={{flexDirection : 'row',marginTop:20,marginBottom:20}}>
        <CheckBox value={this.state.checked} onValueChange={(checkval)=>
            {
                this.setState({checked :checkval});
                if(this.state.text || this.state.checked) 
                    Alert.alert('Terms of Use','Lorel ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna wirl aliqua. Up exlaborum incididunt.', [{text: "Don't Agree", onPress: () =>{this.setState({checked : false});}, style: 'cancel'},{text: 'Agree', onPress: () => {this.setState({buttonDisabled : true,agree : true})}}])
                else 
                    Alert.alert('','Please enter mobile number and check I agree',[{text: "Ok", onPress: () =>this.setState({checked : false})}])
            }}/>
            <Text style={styles.text}>I agree to Stellapps Terms of Use and Privacy Policy</Text>
      </View>
      <Button color='#009887' onPress={onPressSignUp} title='Sign Up' disabled={(!this.state.text || !this.state.checked) || !this.state.agree}></Button>
      {/* <TouchableOpacity disabled={true}><Text style={styles.button}>SIGN UP</Text></TouchableOpacity> */}
      <View style={{marginTop:20,marginBottom:20,justifyContent : 'center',alignItems : 'center'}}><Text style={styles.text} onPress={()=>Actions.login()}>Already Member? Sign In</Text></View>
      <View style={{marginTop:20,marginBottom:20,justifyContent : 'center',alignItems : 'center'}}>{this.state.agree ? otpmsg : emptymsg }</View>
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
     },
    //  button :{
    //     backgroundColor:'#009887',
    //     padding:10,
    //     textAlign:'center',
    //     color : 'white',
    //     fontWeight:'bold'
    //  }
  });