import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './src/components/ImgComponent';
import SignUp from './src/components/SignUp';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "signup" component = {SignUp} title = "Product Logo" />
      </Scene>
   </Router>
)
export default Routes;