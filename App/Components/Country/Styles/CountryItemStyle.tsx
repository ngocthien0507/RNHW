import { StyleSheet } from 'react-native'
import { TypographyStyles } from '@/Themes'

export default StyleSheet.create({
  countryWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
    padding: 5
  },
  text: {
    ...TypographyStyles.titleSmall
  },
  subText: {
    ...TypographyStyles.body1
  },
  flag: {
    fontSize: 50,
    marginRight: 5
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 1
  },
  infoGroup: {
    flexDirection: 'column'
  }
})
