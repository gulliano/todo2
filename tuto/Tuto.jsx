import { View, Text } from 'react-native'
import React from 'react'
import tutoStyles from './tutoStyles'

const Tuto = () => {
  return (
    <View style={tutoStyles.container}>
         <View style={
            tutoStyles.subContainer
        }>
        <View style={
            tutoStyles.subContainer
        }>
            <View style={tutoStyles.box1} />
            <View style={tutoStyles.box2} />
            <View style={tutoStyles.box3} />
        </View>
        </View>
  
    </View>
  )
}

export default Tuto