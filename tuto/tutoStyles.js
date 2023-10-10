import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container :{
        flex : 1 ,
        backgroundColor:"#000",
        flexDirection:"row",

        alignItems:"center",
       justifyContent:"center"
    },
    box1:{
        width:50,
        height:50,
        backgroundColor :"yellow"
    },
    box2:{
        width:50,
        height:50,
        backgroundColor :"red"
    },
    box3:{
        width:50,
        height:50,
        backgroundColor :"blue"
    },
    subContainer:{
        width:350,
        height:50,
        backgroundColor :"#fff",
        flexDirection: "row",
        justifyContent:"space-between", 
        opacity: 0.7
    },
    cardContainer :{
        width:350,
        height:400,
        backgroundColor :"#fff",
        flexDirection: "row",
        alignItems:"flex-end" , 
       
    },

})