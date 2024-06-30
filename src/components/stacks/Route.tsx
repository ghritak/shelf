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
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

const Route = () => {
  const tabBarStyle =
    Platform.OS === 'android'
      ? { height: 64, paddingTop: 6 }
      : { paddingTop: 6 };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: tabBarStyle,
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'android' ? 14 : -4,
          fontWeight: 500,
          fontSize: 11,
        },
      }}
    >
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
        initialParams={{ screen: 'Today' }}
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
