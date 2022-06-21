const Light = {
  Transparent: 'transparent',
  TextColor: '#000',
  BackgroundColor: '#fff',
  SubText: '#757575',
  Primary: '#F6BACB',
  Link: '#0179E9'
}

const Dark = {
  Transparent: 'transparent',
  TextColor: '#fff',
  BackgroundColor: '#000',
  SubText: '#ffffff',
  Primary: '#F6BACB',
  Link: '#0179E9'
}

export type ColorTypes =
  | 'Transparent'
  | 'BackgroundColor'
  | 'TextColor'
  | 'SubText'
  | 'Primary'
  | 'Link'

export { Light, Dark }
