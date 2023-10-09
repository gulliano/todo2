import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import ItemTodo from './ItemTodo';

const ListerTodo = () => {
  /***
   *  init all state : todos , loading
   * 
   */

  const [todos , setTodos ] = useState([]) ;
  const [loading , setLoading ] = useState(true) ;

  useEffect(() => {
    console.log('lister ')

    firestore().collection('Todo').onSnapshot(querySnapshot=>{

      const dataTodos = [] ;
      
        querySnapshot.forEach(doc=>{

            dataTodos.push( { id:doc.id,
                                ...doc.data()
                              })

        })
        setTodos(dataTodos)

      loading && setLoading(false) ;

    })



    
   
  }, [])
  
  return (
    <View>
      
      {loading ? <ActivityIndicator animating={true}/> 
              : <FlatList 
                  data={todos}
                  renderItem={({item})=><ItemTodo todo={item} />}
                  keyExtractor={item => item.id }
              /> }

    </View>
  )
}

export default ListerTodo