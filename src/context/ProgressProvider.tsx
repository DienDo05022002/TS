import React from 'react'
import { createContext , ReactNode } from 'react'

interface ProgressContextDefault {
  lastTime: string
  status:  string
}

const progressDefault = {
  lastTime: '11/11/2022',
  status: 'In Progress'
}
export const ProgressContext = createContext<ProgressContextDefault>(progressDefault)

interface ProgressContextProvider {
  children: ReactNode 
}
const ProgressProvider = ({children}: ProgressContextProvider) => {
  return (
    <ProgressContext.Provider value={progressDefault}>
      {children}
    </ProgressContext.Provider>
  )
}

export default ProgressProvider