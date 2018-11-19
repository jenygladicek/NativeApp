import React, {Component} from 'react';
import {StyleSheet,View,Text,Button,Image,TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class ImgComponent extends Component{
  render() {
    onPressGo = ()=>{
      Actions.loader();
      setTimeout(()=>Actions.signup(),1000);   
    }
    return (
      <View style={styles.conntainer}>
      <TouchableOpacity onPress={onPressGo}><Image source = {require('../images/img1.jpg')}/></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conntainer : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#FFFFFF'
  }
});

