import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/components/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import Route from './src/components/stacks/Route';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='dark' />
      <Route />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
