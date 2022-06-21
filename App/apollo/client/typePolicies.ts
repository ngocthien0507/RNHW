import { TypePolicies } from '@apollo/client'

const typePolicies: TypePolicies = {
  Message: {
    fields: {
      status: {
        read(status: string) {
          return status || 'Done'
        }
      }
    }
  }
}

export default typePolicies
