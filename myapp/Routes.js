import React from 'react';
import {Image,TouchableOpacity} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Home from './src/components/ImgComponent';
import SignUp from './src/components/SignUp';
import Otp from './src/components/Otp';
import PasswordPage from './src/components/PasswordPage';
import Login from './src/components/Login';
import HomePage from './src/components/HomePage';
import Loader from  './src/components/Loader';

import Profile from './src/components/Profile';
import FarmAdmin from './src/components/FarmAdmin';
import Offline from './src/components/Offline';
import LangPref from './src/components/LangPref';
import ChangePsw from './src/components/ChangePsw';
import SignOut from './src/components/SignOut';

const Routes = StackNavigator({
   home : {screen : Home},
   signup : {screen : SignUp,            
         navigationOptions: {
            title: "Product Logo",
            headerLeft : (<Image source = {require('./src/images/img3.jpg')}/>),
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
         headerLeft : (<Image source = {require('./src/images/img3.jpg')}/>),
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
         headerLeft : (<Image source = {require('./src/images/img3.jpg')}/>),
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
         headerLeft : (<Image source = {require('./src/images/img3.jpg')}/>),
         headerStyle: {
         backgroundColor: "#212121"
         },
         headerTintColor: "#fff",
         headerTitleStyle: {
         fontWeight: "bold"
         }
   }},
   homepage : {screen : HomePage,
      navigationOptions: {
         title: "Farm Administration",
         //headerLeft : (<TouchableOpacity><Image source = {require('./src/images/img4.jpg')}/></TouchableOpacity>),
         headerStyle: {
         backgroundColor: "#212121"
         },
         headerTintColor: "#fff",
         headerTitleStyle: {
         fontWeight: "bold"
         }
   }},
   loader : {screen : Loader}
},{
   initialRouteName: "home"
});
export default Routes;

// const drawer = DrawerNavigator({
//    profile : {screen : Profile},
//    farmAdmin : {screen : FarmAdmin},
//    offline : {screen : Offline},
//    langPref : {screen : LangPref},
//    changePsw : {screen : ChangePsw},
//    signOut : {screen : SignOut}
// })