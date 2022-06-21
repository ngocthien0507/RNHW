// @ts-nocheck

import { NavigationState } from '@react-navigation/routers'

export type StackAction = 'replace' | 'push' | 'pop' | 'popToTop'

export const getActiveRouteName = (state: NavigationState | undefined) => {
  if (state) {
    const route = state.routes[state.index]
    if (route.state) {
      // Dive into nested navigators
      return getActiveRouteName(route.state)
    }
    return route.name
  }
}

export const screenTracking = (state: NavigationState | undefined) => {
  const currentRouteName = getActiveRouteName(state)
  console.log(`=== NAVIGATING to ---> ${currentRouteName}`)
}
