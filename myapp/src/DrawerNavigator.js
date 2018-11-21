import React from 'react';
import {Image,TouchableOpacity,Text,View} from 'react-native';
import { DrawerNavigator ,DrawerItems} from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome5";

import Profile from './components/Profile';
import FarmAdmin from './components/FarmAdmin';
import Offline from './components/Offline';
import LangPref from './components/LangPref';
import ChangePsw from './components/ChangePsw';
import SignOut from './components/SignOut';
import HomePage from './components/HomePage';

const Drawer = DrawerNavigator({
    // homepage : {screen : HomePage,
    //     navigationOptions:({navigation}) => ({
    //        title: "Welcome",
    //        headerLeft : <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}><Text>Menu</Text></TouchableOpacity>,
    //        headerStyle: {
    //        backgroundColor: "#212121"
    //        },
    //        headerTintColor: "#fff",
    //        headerTitleStyle: {
    //        fontWeight: "bold"
    //        }
    //     })
    // },
    profile : {screen : Profile,
        navigationOptions: ({navigation}) => ({
            drawerLabel: 'Profile',
            drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} color={tintColor} />,
        })
    },
   farmAdmin : {screen : FarmAdmin},
   offline : {screen : Offline},
   langPref : {screen : LangPref},
   changePsw : {screen : ChangePsw},
   signOut : {screen : SignOut}
    },{
        contentComponent: props => (    
        <View>
            <Text>Custom Header</Text>
            <DrawerItems {...props}/>
            <Text>Custom Footer</Text>
      </View>),
    });

  export default Drawer;