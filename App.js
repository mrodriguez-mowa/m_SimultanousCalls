import React, { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './components/Main.js';
import Calling from './components/Calling.js';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (<NavigationContainer>
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingBottom: 16 }}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Main}
          options={{ title: 'Welcome' }}
        />

        <Stack.Screen name="Call" options={{ title: 'Números agregados' }} component={Calling} />
      </Stack.Navigator>


    </ScrollView>
  </NavigationContainer>

  );
}
