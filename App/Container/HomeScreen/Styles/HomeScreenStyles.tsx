import { StyleSheet } from 'react-native'
import { TypographyStyles } from '@/Themes'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  blankHeader: {
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 40
  },
  text: {
    ...TypographyStyles.titleMedium,
    marginTop: 10,
    marginHorizontal: 20
  }
})
