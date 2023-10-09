import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import firestore from '@react-native-firebase/firestore'

const App = () => {

  useEffect(() => {
    console.log("app start")
    firestore().collection('Todo').get().then(snapShot=>{


      console.log('snapShot' , snapShot)
    })

  }, [])


  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App