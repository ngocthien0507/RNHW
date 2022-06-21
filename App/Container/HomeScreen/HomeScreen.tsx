import React, { useMemo, useCallback } from 'react'
import { Text, View, FlatList, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// Graphql
import {
  useGetCountriesQuery,
  CountryMinimalFragment
} from '@/apollo/generated'

// Navigation
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { AppStackType } from '@/Navigation/Type/AppNavigationType'

// Component
import { CountryItem } from '@/Components'

// Styles
import styles from './Styles/HomeScreenStyles'

type NavigationPropType = NavigationProp<AppStackType, 'HomeScreen'>

const renderKeyExtractor = (item: CountryMinimalFragment, index: number) =>
  `CountryKey${item.code}${index}`
const HomeScreen = () => {
  const navigation = useNavigation<NavigationPropType>()

  const { data, loading } = useGetCountriesQuery({
    variables: {},
    fetchPolicy: 'cache-first'
  })

  const countries = useMemo(() => data?.countries || [], [data?.countries])

  const onPressCountry = useCallback(
    (countryCode: string) => {
      navigation.navigate('CountryDetailScreen', { code: countryCode })
    },
    [navigation]
  )

  const renderCountry = ({
    item,
    index
  }: {
    item: CountryMinimalFragment
    index: number
  }) => {
    return (
      <CountryItem
        key={`CountryItem${item.code}${index}`}
        data={item}
        onPress={onPressCountry}
      />
    )
  }

  const renderEmpty = useMemo(() => (loading ? <ActivityIndicator /> : null), [
    loading
  ])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.blankHeader} />
      <Text style={styles.text}>List of countries</Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={countries}
        extraData={countries}
        renderItem={renderCountry}
        keyExtractor={renderKeyExtractor}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmpty}
      />
    </SafeAreaView>
  )
}

export default HomeScreen
