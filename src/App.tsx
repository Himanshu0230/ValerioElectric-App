import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ExploreScreen from './screens/ExploreScreen'
import ChargeScreen from './screens/ChargeScreen'
import BulletinScreen from './screens/BulletinScreen'
import ProfileScreen from './screens/ProfileScreen'
import ExploreIcon from '../assets/icons/ExploreIcon'
import ChargeIcon from '../assets/icons/ChargeIcon'
import BulletinIcon from '../assets/icons/BulletinIcon'
import ProfileIcon from '../assets/icons/ProfileIcon'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="EXPLORE"
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: { fontFamily: 'Roboto-Regular'},
          tabBarInactiveTintColor: '#000000',
          tabBarActiveTintColor: '#069DFF',
          tabBarStyle: { elevation: 14}
        }}
      >
        <Tab.Screen
          name="EXPLORE"
          component={ExploreScreen}
          options={{
            tabBarIcon: ({ color }) => <ExploreIcon color={color} width={24} height={24} />
          }}
        />
        <Tab.Screen
          name="CHARGE"
          component={ChargeScreen}
          options={{
            tabBarIcon: ({ color }) => <ChargeIcon color={color} width={24} height={24}/>
          }}
        />
        <Tab.Screen
          name="BULLETIN"
          component={BulletinScreen}
          options={{
            tabBarIcon: ({ color }) => <BulletinIcon color={color} width={24} height={24}/>
          }}
        />
        <Tab.Screen
          name="PROFILE"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => <ProfileIcon color={color} width={24} height={24}/>
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})