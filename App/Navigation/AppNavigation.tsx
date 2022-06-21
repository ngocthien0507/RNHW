import React, { useState } from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

// NavigationActions
import { screenTracking } from './NavigationAction'

// Types
import { AppStackType } from './Type/AppNavigationType'

// Screens
import { HomeScreen } from '@/Container/HomeScreen'
import { CountryDetailScreen } from '@/Container/CountryDetailScreen'
import { ContinentScreen } from '@/Container/ContinentScreen'

import { Light, Dark } from '@/Themes'

const defaultCardStyle = { backgroundColor: 'white' }

const AppNavigation = () => {
  const AppStack = createNativeStackNavigator<AppStackType>()

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...(isDarkTheme ? Dark : Light)
    }
  }

  const onChangeTheme = () => setIsDarkTheme((current) => !current)

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme} onStateChange={screenTracking}>
        <AppStack.Navigator
          screenOptions={{
            contentStyle: defaultCardStyle,
            headerTitle: '',
            headerBackTitle: ''
          }}
          initialRouteName={'HomeScreen'}
        >
          <AppStack.Screen
            name={'HomeScreen'}
            component={HomeScreen}
            options={{
              headerShown: false
            }}
          />
          <AppStack.Screen
            name={'CountryDetailScreen'}
            component={CountryDetailScreen}
          />
          <AppStack.Screen
            name={'ContinentScreen'}
            component={ContinentScreen}
          />
        </AppStack.Navigator>
      </NavigationContainer>
      <TouchableOpacity style={styles.floatingButton} onPress={onChangeTheme}>
        <Text>{isDarkTheme ? 'Light' : 'Dark'}</Text>
      </TouchableOpacity>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  floatingButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Light.Primary,
    position: 'absolute',
    bottom: 10,
    right: 10,

    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default AppNavigation
