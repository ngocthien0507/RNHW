import '@react-navigation/native'

// Override the theme in react native navigation to accept our custom theme props.
declare module '@react-navigation/native' {
  export type ExtendedTheme = {
    dark: boolean
    colors: {
      Transparent: string
      TextColor: string
      BackgroundColor: string
      SubText: string
      Primary: string
      Link: string
    }
  }
  export function useTheme(): ExtendedTheme
}
