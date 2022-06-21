import React from 'react'
import {
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withSpring
} from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

// Styles
import styles from './Styles/FloatingButtonStyle'

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen')

const springConfig = {
  damping: 13,
  mass: 0.7,
  stiffness: 100
}

const FloatingButton = (props: TouchableOpacityProps) => {
  const translateX = useSharedValue(screenWidth - 80)
  const translateY = useSharedValue(screenHeight - 120)

  const context = useSharedValue({
    x: 0,
    y: 0
  })

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {
        x: translateX.value,
        y: translateY.value
      }
    })
    .onUpdate((event) => {
      translateX.value = event.translationX + context.value.x
      translateY.value = event.translationY + context.value.y
    })
    .onEnd(() => {
      if (translateX.value > screenWidth / 2) {
        translateX.value = screenWidth - 80
      } else {
        translateX.value = 10
      }

      if (translateY.value < 0 || translateY.value > screenHeight - 80) {
        translateY.value = translateY.value < 0 ? 50 : screenHeight - 80
      }
    })

  const followX = useDerivedValue(() => {
    return withSpring(translateX.value, springConfig)
  })
  const followY = useDerivedValue(() => {
    return withSpring(translateY.value, springConfig)
  })

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: followX.value }, { translateY: followY.value }]
  }))

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.buttonWrapper, animatedStyle]}>
        <TouchableOpacity style={styles.floatingButton} {...props}>
          <Text>switch</Text>
        </TouchableOpacity>
      </Animated.View>
    </GestureDetector>
  )
}

export default FloatingButton
