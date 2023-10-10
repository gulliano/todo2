import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles'
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/firestore';
import { Divider } from 'react-native-paper';


const AddTodo = () => {

  const [task, setTask] = useState("") ;

  const send = (value) => { 

    console.log("send" , value) ;
    firestore().collection("Todo").add({
                                          task    : value,
                                          status  : false,
                                          dateins : Date.now() , 

                                        })
    setTask("") ; 

   }

  return (
    <View style={styles.addContainer}>

      <Text style={styles.titleAdd} > THE TODO </Text>
      <TextInput 
        placeholder={"Ajouter une tache"}
        style ={styles.addInput}
        value={task}
        onChangeText={text=>setTask(text)}
        onSubmitEditing={(value) =>send(value.nativeEvent.text)}
      
      
      
      />


    </View>
  )
}

export default AddTodo