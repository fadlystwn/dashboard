import React from 'react'
import useProvideAuth from './use-provide-auth'
import { authContext } from './auth-context'

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export default ProvideAuth
