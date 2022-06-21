import { StyleSheet } from 'react-native'
import { TypographyStyles, Light } from '@/Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    color: Light.Link,
    textDecorationLine: 'underline'
  },
  infoWrapper: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
