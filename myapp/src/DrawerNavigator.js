import React from 'react';
import {Image,TouchableOpacity,Text,View} from 'react-native';
import { createDrawerNavigator ,DrawerItems} from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome5";
import {Container,Content,Header,Body,List} from 'native-base';

import Home from './components/HomePage';
import Profile from './components/Profile';
import FarmAdministration from './components/FarmAdmin';
import offline from './components/Offline';
import LanguagePrefer from './components/LangPref';
import ChangePassword from './components/ChangePsw';
import SignOut from './components/SignOut';

const CustomDrawerContentComponent=(props)=>(
    <Container>
      <Header style={{height:200,backgroundColor:'#515359'}}>
        <Body>
          {/* <Image 
          source={require('./logo/logo.jpg')} /> */}
          <Text>User Name</Text>
        </Body>
      </Header>
      <Content>
      <List>
   
        <DrawerItems {...props} activeBackgroundColor='rgba(0, 0, 0, .04)'     
                    
   />
  
      </List>
      </Content>
    </Container>
  )

  const MyDrawerNavigator = createDrawerNavigator({
    profile: {
        screen: Profile,
        navigationOptions: {
          drawerLabel: 'Profile',
          drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} color={tintColor}/>,
          headerLeft:<TouchableOpacity onPress={() => navigation.openDrawer()}><Icon name="bars" style={{color:'white',marginLeft:20}} size={20}/></TouchableOpacity>,
          headerTitle : 'Profile Details',
          headerStyle: {
          backgroundColor: "#212121"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
          fontWeight: "bold"
          }
        }
      },
      farmadministration: {
      screen:FarmAdministration,
        navigationOptions: {
          drawerLabel: 'Farm Administration',
          drawerIcon: ({ tintColor }) => <Icon name="adn" size={17} color={tintColor}/>,
        }
      },
      offline: {
        screen:offline,
          navigationOptions: {
            drawerLabel: 'Offline',
            drawerIcon: ({ tintColor }) => <Icon name="power-off" size={17} color={tintColor}/>,
          }
        },
        languageprefer: {
          screen:LanguagePrefer,
            navigationOptions: {
              drawerLabel: 'LanguagePreference',
              drawerIcon: ({ tintColor }) => <Icon name="globe" size={17} color={tintColor}/>,
            }
          },
          changepassword: {
            screen:ChangePassword,
              navigationOptions: {
                drawerLabel: 'ChangePassword',
                drawerIcon: ({ tintColor }) => <Icon name="unlock-alt" size={17} color={tintColor}/>,
              },
            
            },
      signOut: {
        screen:SignOut,
          navigationOptions: {
            drawerLabel: 'Settings',
            drawerIcon: ({ tintColor }) => <Icon name="cog" size={17} color={tintColor}/>,
    
          }
        },
    homepage : {screen : Home,
    navigationOptions:({navigation}) => ({
        headerLeft:<TouchableOpacity onPress={() => navigation.openDrawer()}><Icon name="bars" style={{color:'white',marginLeft:20}} size={20}/></TouchableOpacity>,
        headerTitle : 'Welcome',
        headerStyle: {
        backgroundColor: "#212121"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
        fontWeight: "bold"
        }
    })
    }
  },{
    initialRouteName:'homepage',
    drawerPosition:'left',
    contentComponent:CustomDrawerContentComponent,
    drawerOpenRoute:'DrawerOpen',
    drawerCloseRoute:'DrawerClose',
    drawerToggleRoute:'DrawerToggle'
    
  });

  export default MyDrawerNavigator;