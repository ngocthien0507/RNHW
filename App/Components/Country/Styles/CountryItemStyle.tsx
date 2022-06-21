import { StyleSheet } from 'react-native'
import { TypographyStyles, Colors } from '@/Themes'

export default StyleSheet.create({
  countryWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
    backgroundColor: Colors.BackgroundColor,
    padding: 5
  },
  text: {
    ...TypographyStyles.titleSmall,
    color: Colors.TextColor
  },
  subText: {
    ...TypographyStyles.body1,
    color: Colors.SubText
  },
  flag: {
    fontSize: 50,
    marginRight: 5
  },
  shadow: {
    shadowColor: Colors.TextColor,
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
