import React from 'react';
import { StackNavigator } from 'react-navigation';

import LoginStack from './src/LoginStack';
import Drawer from './src/DrawerNavigator';

const Routes = StackNavigator({
   loginStack : {screen : LoginStack},
   drawerStack : {screen : Drawer}
},{
   initialRouteName: 'loginStack',
   headerMode: 'none',
   title: 'Main'
});
export default Routes;
