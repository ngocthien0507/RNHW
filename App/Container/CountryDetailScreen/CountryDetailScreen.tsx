import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native'

// Graphql
import { useGetCountryByCodeQuery } from '@/apollo/generated'

// Navigation
import {
  useNavigation,
  NavigationProp,
  useRoute,
  RouteProp,
  useTheme
} from '@react-navigation/native'
import { AppStackType } from '@/Navigation/Type/AppNavigationType'

// Styles
import styles from './Styles/CountryDetailScreenStyle'

type NavigationPropType = NavigationProp<AppStackType, 'CountryDetailScreen'>

type RouteType = RouteProp<AppStackType, 'CountryDetailScreen'>

export type CountryDetailScreenProps = {}
const CountryDetailScreen = () => {
  const navigation = useNavigation<NavigationPropType>()
  const route = useRoute<RouteType>()

  const { code } = route.params

  const theme = useTheme()

  const textColor = {
    color: theme.colors.TextColor
  }

  const { data, loading } = useGetCountryByCodeQuery({
    fetchPolicy: 'cache-and-network',
    variables: { code }
  })

  const country = data?.country

  const onPressContinent = () => {
    navigation.navigate('ContinentScreen', { code: country?.continent.code! })
  }

  if (!data) {
    return loading ? (
      <ActivityIndicator size={'large'} color={theme.colors.TextColor} />
    ) : null
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.BackgroundColor
        }
      ]}
    >
      <Text style={styles.flag}>{country?.emoji}</Text>
      <Text style={[styles.title, textColor]}>{country?.name}</Text>

      <View style={styles.infoWrapper}>
        <Text style={[styles.text, textColor]}>alpha2Code</Text>
        <Text style={[styles.text, textColor]}>{country?.code}</Text>
      </View>
      <View style={styles.infoWrapper}>
        <Text style={[styles.text, textColor]}>callingCodes</Text>
        <Text style={[styles.text, textColor]}>+{country?.phone}</Text>
      </View>
      <View style={styles.infoWrapper}>
        <Text style={[styles.text, textColor]}>alpha2Code</Text>
        <Text
          onPress={onPressContinent}
          style={[[styles.text, textColor], styles.continentText]}
        >
          {country?.continent.name}
        </Text>
      </View>
    </View>
  )
}

export default CountryDetailScreen
