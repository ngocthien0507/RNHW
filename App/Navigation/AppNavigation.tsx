import React, { useState } from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

// NavigationActions
import { screenTracking } from './NavigationAction'

// Components
import { FloatingButton } from '@/Components'

// Types
import { AppStackType } from './Type/AppNavigationType'

// Screens
import { HomeScreen } from '@/Container/HomeScreen'
import { CountryDetailScreen } from '@/Container/CountryDetailScreen'
import { ContinentScreen } from '@/Container/ContinentScreen'

import { Light, Dark } from '@/Themes'

const defaultCardStyle = { backgroundColor: 'white' }

const config = {
  screens: {
    CountryDetailScreen: 'country/:code',
    ContinentScreen: 'continent/:code'
  }
}

const linking = {
  prefixes: ['rnhw://'],
  config: config
}

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
      <NavigationContainer
        linking={linking}
        theme={theme}
        onStateChange={screenTracking}
      >
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
      <FloatingButton onPress={onChangeTheme} />
    </SafeAreaProvider>
  )
}

export default AppNavigation
