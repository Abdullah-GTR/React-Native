import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import UserScreen from './Screens/UserScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LoginPage from './Screens/login/Login';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

//import Component from 'react-native-paper/lib/typescript/components/List/ListItem';
//import { TabBarIOSItem } from 'react-native';

const DrawerNav = () => {

  return {

  }
}
export default function App() {
  console.log('hello world');
  const Drawer = createDrawerNavigator();
  return (

    // <NavigationContainer>
    //   <Drawer.Navigator>
    //     <Drawer.Screen name="Home" component={HomeScreen} />
    //     <Drawer.Screen name="Profile" component={ProfileScreen} />
    //     <Drawer.Screen name="User" component={UserScreen} />
        
    //   </Drawer.Navigator>
    // </NavigationContainer>
    <GestureHandlerRootView style={{ flex: 1 }}>
            <LoginPage />
        </GestureHandlerRootView>
  );
}

