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

import SplashPage from './pages/SplashPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import WhatIsPage from './pages/WhatIsPage';
import ProfilePage from './pages/ProfilePage';
import NonUserPage from './pages/NonUserPage';
import SearchPage from './pages/SearchPage';
import PersonPage from './pages/PersonPage';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state'
]);

const Stack = createStackNavigator();

export default function App() {
  const [userToken, onTokenChange] = React.useState(null);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode='float'>
          {userToken == null ? (
            <>
              <Stack.Screen
                name='splash'
                component={SplashPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name='login'
                component={LoginPage}
                options={{
                  headerBackTitleVisible: false,
                  headerTintColor: '#000',
                  title: 'Login'
                }}
                initialParams={{ loginFunc: onTokenChange }}
              />
              <Stack.Screen
                name='register'
                component={RegisterPage}
                options={{
                  headerBackTitleVisible: false,
                  headerTintColor: '#000',
                  title: 'Register'
                }}
              />
              <Stack.Screen
                name='whatis'
                component={WhatIsPage}
                options={{
                  headerBackTitleVisible: false,
                  headerTintColor: '#000',
                  title: 'Learn More'
                }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name='home'
                component={HomePage}
                options={{
                  headerBackTitleVisible: false,
                  headerTintColor: '#000',
                  title: 'Feedback'
                }}
              />
              <Stack.Screen
                name='profile'
                component={ProfilePage}
                options={{
                  headerBackTitleVisible: false,
                  headerTintColor: '#000',
                  title: 'Profile'
                }}
              />
              <Stack.Screen
                name='nonuser'
                component={NonUserPage}
                options={{
                  headerBackTitleVisible: false,
                  headerTintColor: '#000',
                  title: 'Non-user request'
                }}
              />
              <Stack.Screen
                name='search'
                component={SearchPage}
                options={{
                  headerBackTitleVisible: false,
                  headerTintColor: '#000',
                  title: 'Give Feedback'
                }}
              />
              <Stack.Screen
                name='person'
                component={PersonPage}
                options={{
                  headerBackTitleVisible: false,
                  headerTintColor: '#000',
                  title: 'Give Feedback'
                }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
