import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { Colors } from '../../styles/Colors';
import WalletScreen from '../screens/WalletScreen';
import GuideScreen from '../screens/GuideScreen';
import ChartScreen from '../screens/ChartScreen';

const Tab = createBottomTabNavigator();

const Route = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name='home'
              color={focused ? Colors.primary : 'black'}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Wallet'
        component={WalletScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name='wallet-outline'
              color={focused ? Colors.primary : 'black'}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Guide'
        component={GuideScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fontisto
              name='compass'
              color={focused ? Colors.primary : 'black'}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Chart'
        component={ChartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <SimpleLineIcons
              name='graph'
              color={focused ? Colors.primary : 'black'}
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Route;
