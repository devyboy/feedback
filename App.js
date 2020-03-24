/**
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SplashPage from "./pages/SplashPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import WhatIsPage from "./pages/WhatIs";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator headerMode="float">
            <Stack.Screen name="splash" component={SplashPage} options={{ headerShown: false }}/>
            <Stack.Screen 
              name="login" 
              component={LoginPage} 
              options={{ 
                headerBackTitleVisible: false, 
                cardShadowEnabled: false,
                headerTintColor: "black",
                title: "Login"
              }}
            />
            <Stack.Screen 
              name="register" 
              component={RegisterPage} 
              options={{ 
                headerBackTitleVisible: false, 
                cardShadowEnabled: false,
                headerTintColor: "black",
                title: "Register"
              }}
            />
            <Stack.Screen 
              name="home" 
              component={HomePage} 
              options={{ 
                headerBackTitleVisible: false, 
                cardShadowEnabled: false,
                headerTintColor: "black",
                title: null
              }}
            />
            <Stack.Screen 
              name="whatis" 
              component={WhatIsPage} 
              options={{ 
                headerBackTitleVisible: false, 
                cardShadowEnabled: false,
                headerTintColor: "black",
                title: "Learn More"
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};
