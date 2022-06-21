import React from 'react'
import { StatusBar, StyleSheet, TouchableOpacity } from 'react-native'

import ReduxNavigation from '@/Navigation'
import { Colors } from '@/Themes'

const RootContainer = () => {
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <ReduxNavigation />
      <TouchableOpacity style={styles.floatingButton} />
    </>
  )
}

const styles = StyleSheet.create({
  floatingButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.Primary,
    position: 'absolute',
    bottom: 10,
    right: 10,

    shadowColor: Colors.TextColor,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 1
  }
})

export default RootContainer
