import React from 'react'
import { Text, View, ActivityIndicator, FlatList } from 'react-native'

// Graphql
import { useGetContinentByCodeQuery } from '@/apollo/generated'

// Navigation
import {
  useNavigation,
  NavigationProp,
  useRoute,
  RouteProp,
  StackActions,
  useTheme
} from '@react-navigation/native'
import { AppStackType } from '@/Navigation/Type/AppNavigationType'

// Styles
import styles from './Styles/ContinentScreenStyle'

type NavigationPropType = NavigationProp<AppStackType, 'ContinentScreen'>

type RouteType = RouteProp<AppStackType, 'ContinentScreen'>

type MiniCountry = {
  __typename: 'Country'
  code: string
  name: string
}

const renderKeyExtractor = (item: MiniCountry, index: number) =>
  `CountryKey${item.code}${index}`
const ContinentScreen = () => {
  const navigation = useNavigation<NavigationPropType>()
  const route = useRoute<RouteType>()

  const { code } = route.params

  const theme = useTheme()

  const textColor = {
    color: theme.colors.TextColor
  }

  const { data, loading } = useGetContinentByCodeQuery({
    fetchPolicy: 'cache-and-network',
    variables: { code }
  })

  const continent = data?.continent

  const countries = data?.continent?.countries || []

  const onPressCountry = (code: string) => () => {
    navigation.dispatch(StackActions.push('CountryDetailScreen', { code }))
  }

  const renderCountry = ({
    item,
    index
  }: {
    item: MiniCountry
    index: number
  }) => {
    return (
      <Text
        key={`CountryItem${item.code}${index}`}
        style={[styles.text, styles.continentText]}
        onPress={onPressCountry(item.code)}
      >
        {item.name}
      </Text>
    )
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
      <Text style={[styles.title, textColor]}>{continent?.name}</Text>

      <View style={styles.infoWrapper}>
        <Text style={(styles.text, textColor)}>code</Text>
        <Text style={(styles.text, textColor)}>{continent?.code}</Text>
      </View>
      <View style={styles.infoWrapper}>
        <Text style={(styles.text, textColor)}>countries</Text>
        <FlatList
          contentContainerStyle={styles.list}
          data={countries}
          extraData={countries}
          renderItem={renderCountry}
          keyExtractor={renderKeyExtractor}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default ContinentScreen
