import React, { memo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

// Navigation
import { useTheme } from '@react-navigation/native'

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
  const theme = useTheme()

  const textColor = {
    color: theme.colors.TextColor
  }

  const subTextColor = {
    color: theme.colors.SubText
  }

  return (
    <TouchableOpacity
      style={[
        styles.countryWrapper,
        styles.shadow,
        {
          backgroundColor: theme.colors.BackgroundColor,
          borderColor: theme.colors.TextColor
        }
      ]}
      onPress={() => onPress(data.code)}
    >
      <Text style={styles.flag}>{data.emoji}</Text>
      <View style={styles.infoGroup}>
        <Text style={[styles.text, textColor]}>{data.name}</Text>
        <Text style={[styles.subText, subTextColor]}>{data.capital}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default memo(CountryItem)
