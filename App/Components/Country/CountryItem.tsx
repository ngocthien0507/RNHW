import React, { memo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

// GraphQl
import { CountryMinimalFragment } from '@/apollo/generated'

// Styles
import styles from './Styles/CountryItemStyle'

export type CountryItemProps = {
  data: CountryMinimalFragment
  onPress: (code: string) => void
}
const CountryItem = (props: CountryItemProps) => {
  const { data, onPress } = props
  return (
    <TouchableOpacity
      style={[styles.countryWrapper, styles.shadow]}
      onPress={() => onPress(data.code)}
    >
      <Text style={styles.flag}>{data.emoji}</Text>
      <View style={styles.infoGroup}>
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.subText}>{data.capital}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default memo(CountryItem)
