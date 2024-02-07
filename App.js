import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import PhotoScreen from './app/screens/PhotoScreen';
import ImageUploadScreen from './app/screens/ImageUploadScreen';
import ResultsScreen from './app/screens/ResultsScreen';
import ResultsNegativeScreen from './app/screens/ResultsNegative';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen name="FMD Detector" component={WelcomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Photo" component={PhotoScreen}/>
        <Stack.Screen name="ImageUpload" component={ImageUploadScreen}/>
        <Stack.Screen name="Results" component={ResultsScreen}/>
        <Stack.Screen name="ResultsNegative" component={ResultsNegativeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
