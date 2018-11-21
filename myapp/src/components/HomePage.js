import React, {Component} from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,TextInput,Button} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";

import Drawer from './../DrawerNavigator';

export default class HomePage extends Component{
    constructor(props) {
        super(props);
      }
      static navigationOptions = ({navigation}) =>{
        return{
            headerLeft:(
                <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}><Icon name="bars" style={{color:'white',marginLeft:20}} size={20}/></TouchableOpacity>
            )
        }
    }
    render(){
        return(
            <View>
            <Text>Home Page</Text>
            <Drawer screenProps={{navigation: this.props.navigation}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
});

