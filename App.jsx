import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Todo from './src/Todo'

import { PaperProvider } from 'react-native-paper';
const App = () => {

  return (
    <PaperProvider>
       <Todo/>
    </PaperProvider>
       
 
  )
}

export default App