import { View, Text} from 'react-native'
import React from 'react'
import firestore from '@react-native-firebase/firestore';
import styles from '../styles';
import { Button } from 'react-native-paper';

import Icon from 'react-native-vector-icons/AntDesign';
const ItemTodo = ({todo}) => {

    const supprimer = () => { 

        firestore().collection("Todo").doc(todo.id).delete() ;

     }

     const realiser = () => { 

        firestore().collection("Todo").doc(todo.id).update({
            status : !todo.status ,  
        })
      }
  return (

      // <View style={{height:50, width:350, backgroundColor:"#fff" ,margin:10 ,flexDirection:"row"}} >
      //     <View style={{backgroundColor:"green" , flex:5}} ></View>
      //     <View style={{backgroundColor:"red" , flex:1}} ></View>
      //     <View style={{backgroundColor:"#ccc" , flex:1}} ></View>
      // </View>

    <View style={styles.listItem}>

          <View style={styles.textItemView}  >{todo.status ? <Text style={ { ...styles.textItem , textDecorationLine:'line-through' , color:"green"}}>{todo?.task}</Text> 
                              :  <Text style={styles.textItem}>{todo?.task}</Text>
                              }</View>
                            
          <View style={{  flex: 1  , justifyContent:"center"}} >
              {!todo.status ?<Icon name="checkcircleo" size={28} color="#900"  onPress={realiser}/> :
              <Icon name="closecircle" size={28} color="#900" onPress={supprimer}/>}
          </View>

          
          
  
    </View>
  )
}

export default ItemTodo