import { StyleSheet } from 'react-native'
import { Colors, TypographyStyles } from '@/Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.BackgroundColor,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  flag: {
    fontSize: 50
  },
  title: {
    ...TypographyStyles.titleLarge
  },
  text: {
    ...TypographyStyles.body1
  },
  continentText: {
    color: Colors.Link,
    textDecorationLine: 'underline'
  },
  infoWrapper: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  list: {
    alignItems: 'flex-end',
    paddingBottom: 100
  }
})
