import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import UserScreen from './Screens/UserScreen';
import LoginPage from './Screens/login/Login';
import RegisterPage from './Screens/login/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 900);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Register" component={RegisterPage} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
