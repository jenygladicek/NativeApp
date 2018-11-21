import React from 'react';
import {Image,TouchableOpacity,Text} from 'react-native';
import { StackNavigator,DrawerNavigator} from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome5";

import Home from './components/ImgComponent';
import SignUp from './components/SignUp';
import Otp from './components/Otp';
import PasswordPage from './components/PasswordPage';
import Login from './components/Login';
import Loader from  './components/Loader';
import HomePage from './components/HomePage';

const Routes = StackNavigator({
   home : {screen : Home},
   signup : {screen : SignUp,            
         navigationOptions: {
            title: "Product Logo",
            headerLeft : (<Image source = {require('./images/img3.jpg')}/>),
            headerStyle: {
            backgroundColor: "#212121"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
            fontWeight: "bold"
            }
   }},
   otp : {screen : Otp,
      navigationOptions: {
         title: "Product Logo",
         headerLeft : (<Image source = {require('./images/img3.jpg')}/>),
         headerStyle: {
         backgroundColor: "#212121"
         },
         headerTintColor: "#fff",
         headerTitleStyle: {
         fontWeight: "bold"
         }
   }},
   passwordPage : {screen : PasswordPage,
      navigationOptions: {
         title: "Product Logo",
         headerLeft : (<Image source = {require('./images/img3.jpg')}/>),
         headerStyle: {
         backgroundColor: "#212121"
         },
         headerTintColor: "#fff",
         headerTitleStyle: {
         fontWeight: "bold"
         }
   }},
   login : {screen :Login,
      navigationOptions: {
         title: "Product Logo",
         headerLeft : (<Image source = {require('./images/img3.jpg')}/>),
         headerStyle: {
         backgroundColor: "#212121"
         },
         headerTintColor: "#fff",
         headerTitleStyle: {
         fontWeight: "bold"
         }
   }},
   homepage : {screen : HomePage,
    navigationOptions:({navigation}) => ({
       title: "Welcome",
       //headerLeft : <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}><Text style={{color:'white'}}>Menu</Text></TouchableOpacity>,
       headerStyle: {
       backgroundColor: "#212121"
       },
       headerTintColor: "#fff",
       headerTitleStyle: {
       fontWeight: "bold"
       }
    })
    },
   loader : {screen : Loader}
},{
   initialRouteName: "home"
});
export default Routes;
