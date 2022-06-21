import { StyleSheet } from 'react-native'
import { Colors, TypographyStyles } from '@/Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackgroundColor
  },
  list: {
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  blankHeader: {
    width: '100%',
    height: 200,
    backgroundColor: Colors.Primary,
    borderBottomLeftRadius: 40
  },
  text: {
    ...TypographyStyles.titleMedium,
    color: Colors.TextColor,
    marginTop: 10,
    marginHorizontal: 20
  }
})
