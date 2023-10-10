import { View, Text, FlatList } from 'react-native'
import React from 'react'
import leboncoinStyles from './leboncoinStyles'
import { products } from './data'
import ItemLeboncoin from './ItemLeboncoin'

const Leboncoin = () => {
  return (
    <View style={leboncoinStyles.container}>
        <FlatList 
            data={products}
            renderItem={({item}) => <ItemLeboncoin product={item} />}
            keyExtractor={item => item.id}
        />
    </View>
  )
}

export default Leboncoin