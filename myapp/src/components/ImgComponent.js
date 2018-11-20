import React, {Component} from 'react';
import {StyleSheet,View,Image,TouchableOpacity} from 'react-native';

export default class ImgComponent extends Component{
  render() {
    const navigator = this.props.navigation;
    onPressGo = ()=>{
      navigator.navigate('loader');
      setTimeout(()=>navigator.navigate('signup'),1000);   
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

