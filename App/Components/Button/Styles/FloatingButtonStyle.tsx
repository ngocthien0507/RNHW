import { StyleSheet } from 'react-native'
import { Light } from '@/Themes'

export default StyleSheet.create({
  buttonWrapper: {
    position: 'absolute'
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Light.Primary,

    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
