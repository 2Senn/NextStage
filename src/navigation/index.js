import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/home'
import AddCat from '../screens/add'
import Splash from '../screens/splash'

const MainStack = createNativeStackNavigator()

const Main = () => {


  return (
    <NavigationContainer>
      <MainStack.Navigator 
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Splash"
      >
        <MainStack.Screen name="Splash" component={Splash} />
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="AddCat" component={AddCat} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default Main
