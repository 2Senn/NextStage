import React from 'react'
import { View, Text } from 'react-native'
import { QueryClientProvider, QueryClient } from 'react-query'
import Main from './navigation'

const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  )
}

export default App
