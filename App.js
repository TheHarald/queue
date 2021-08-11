import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Main } from './pages/Main';
import { Start } from './pages/Start';
import { Test } from './pages/Test/Test';
import { AppContext } from './context'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

export default function App() {

  const [user, setUser] = useState()


  return (
    <AppContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <AuthStack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <AuthStack.Screen
            name='Start'
            component={Start}

          />

          <AuthStack.Screen
            name='Main'
            component={Main}
          />


        </AuthStack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>

  );
}


