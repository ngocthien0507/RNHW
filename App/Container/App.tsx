import React from 'react'
import { ApolloProvider } from '@apollo/client'

// apollo
import apolloClient from '@/apollo/setup'

// Container
import RootContainer from './RootContainer'

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <RootContainer />
    </ApolloProvider>
  )
}

export default App
