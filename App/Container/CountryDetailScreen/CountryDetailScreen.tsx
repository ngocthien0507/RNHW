import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native'

// Graphql
import { useGetCountryByCodeQuery } from '@/apollo/generated'

// Navigation
import {
  useNavigation,
  NavigationProp,
  useRoute,
  RouteProp
} from '@react-navigation/native'
import { AppStackType } from '@/Navigation/Type/AppNavigationType'

// Styles
import styles from './Styles/CountryDetailScreenStyle'
import { Colors } from '@/Themes'

type NavigationPropType = NavigationProp<AppStackType, 'CountryDetailScreen'>

type RouteType = RouteProp<AppStackType, 'CountryDetailScreen'>

export type CountryDetailScreenProps = {}
const CountryDetailScreen = () => {
  const navigation = useNavigation<NavigationPropType>()
  const route = useRoute<RouteType>()

  const { code } = route.params

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
      <ActivityIndicator size={'large'} color={Colors.TextColor} />
    ) : null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.flag}>{country?.emoji}</Text>
      <Text style={styles.title}>{country?.name}</Text>

      <View style={styles.infoWrapper}>
        <Text style={styles.text}>alpha2Code</Text>
        <Text style={styles.text}>{country?.code}</Text>
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.text}>callingCodes</Text>
        <Text style={styles.text}>+{country?.phone}</Text>
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.text}>alpha2Code</Text>
        <Text
          onPress={onPressContinent}
          style={[styles.text, styles.continentText]}
        >
          {country?.continent.name}
        </Text>
      </View>
    </View>
  )
}

export default CountryDetailScreen
