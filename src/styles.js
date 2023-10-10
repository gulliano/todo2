import { Dimensions, StyleSheet } from "react-native";
const {width} = Dimensions.get("window")
export default StyleSheet.create({
  container:{
    flex : 1 , 
    backgroundColor:'#2B1908',
    padding:10,
    
  }  
  ,
  addInput:{
    //borderColor : "orange" ,
    backgroundColor: "#fff" , 
    borderWidth : 1 ,
    paddingHorizontal:5, 
    borderRadius :30 ,
    marginBottom: 25, 
  },
  titleAdd :{ 
    textAlign: 'center',
 
    color: "#fff",
    fontSize : 25 ,
    fontWeight: "700",
    paddingVertical : 30 , 
    
  },
  addContainer:{
    height:150,
    width : width - 20 , 
    justifyContent:"center" , 
   
  },

 listItem:{
    //borderColor : "orange" ,
    backgroundColor: "#fff" , 
    borderWidth : 1 ,
    height:  50, 
    flexDirection:"row" , 
    justifyContent:"center" , 

  

    paddingHorizontal:10, 
    marginVertical:10, 
    borderRadius :30 ,
  },
  textItemView:{

    flex: 10 , 
   
    justifyContent:"center",
    marginVertical:10, 
 
    fontWeight:"600" ,  
  },
  textItem:{
    color :"#2B1908" ,
    fontSize : 18 ,
    fontWeight:"600" ,  
  }
})