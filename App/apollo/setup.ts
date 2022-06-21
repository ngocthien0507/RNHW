import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client'

// Config
import typePolicies from './client/typePolicies'
import AppConfig from '@/Config/AppConfig'

const cache = new InMemoryCache({
  typePolicies
})
const httpLink = new HttpLink({
  uri: AppConfig.GRAPHQL_SERVER
})

const apolloClient = new ApolloClient({
  cache,
  link: from([httpLink]),
  queryDeduplication: true,
  defaultOptions: {
    watchQuery: {
      returnPartialData: true,
      fetchPolicy: 'cache-and-network',
      nextFetchPolicy: 'cache-first',
      notifyOnNetworkStatusChange: true
    }
  }
})

export default apolloClient
