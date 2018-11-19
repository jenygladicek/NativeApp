import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './src/components/ImgComponent';
import SignUp from './src/components/SignUp';
import Otp from './src/components/Otp';
import PasswordPage from './src/components/PasswordPage';
import Login from './src/components/Login';
import HomePage from './src/components/HomePage';
import Loader from  './src/components/Loader';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "signup" component = {SignUp} title = "Product Logo" />
         <Scene key = "otp" component = {Otp} title = "Product Logo" />
         <Scene key = "passwordPage" component = {PasswordPage} title = "Product Logo" />
         <Scene key = "login" component = {Login} title = "Product Logo" />
         <Scene key = "homepage" component = {HomePage} title = "Product Logo" />
         <Scene key = "loader" component = {Loader} title = "Product Logo" />
      </Scene>
   </Router>
)
export default Routes;