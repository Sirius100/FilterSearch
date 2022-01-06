import React from 'react'

export const MyFunctionsData = {
  log: () => console.log('hello'),
}

export const ContextFunc = React.createContext(MyFunctionsData)
