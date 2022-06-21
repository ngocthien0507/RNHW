import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

// NavigationActions
import { screenTracking } from './NavigationAction'

// Types
import { AppStackType } from './Type/AppNavigationType'

// Screens
import { HomeScreen } from '@/Container/HomeScreen'
import { CountryDetailScreen } from '@/Container/CountryDetailScreen'
import { ContinentScreen } from '@/Container/ContinentScreen'

const defaultCardStyle = { backgroundColor: 'white' }

const AppNavigation = () => {
  const AppStack = createNativeStackNavigator<AppStackType>()
  return (
    <SafeAreaProvider>
      <NavigationContainer onStateChange={screenTracking}>
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
    </SafeAreaProvider>
  )
}

export default AppNavigation
