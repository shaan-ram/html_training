import { useState } from "react";
import ironman from "./assets/images/ironman.jpg"
import spiderman from "./assets/images/spiderman.jpg"
import blackpanther from "./assets/images/blackpanther.jpg"
import thor from "./assets/images/thor.jpg"
import { Button, Text,View,StyleSheet, Platform,Image } from "react-native";
export default function App(){

  let [name,updateName] = useState({title:'',firstname:'',lastname:'',image:''})
  let changeImage=( img )=>{
    if(img ==="ironman"){
      updateName({
        title:"Ironman",
        firstname:"Tony",
        lastname:"Stark",
        image:ironman
      })
    }
    else if(img ==="thor"){
       updateName({
        title:"Thor",
        firstname:"Thor",
        lastname:"Odinson",
        image:thor
      })
    }
    else if(img ==="blackpanther"){
      updateName({
        title:"Blackpanther",
        firstname:"T",
        lastname:"Challa",
        image:blackpanther
      })
    }
    else{
      updateName({
        title:"Spiderman",
        firstname:"Peter",
        lastname:"Parker",
        image:spiderman
      })
    }
  }
  return(    
    <View style={mystyle.viewstyle}>

      <View>
        <Text style={{fontSize:42, color: "purple"}}>Avengers</Text>
      </View>
      <Text/>

      <View>

        <Text style={{fontSize:22}}>
        Title : {name.title}{"\n"}  
        Firstname: {name.firstname}{"\n"}
        Lastname: {name.lastname}</Text>
        <Image source={name.image}></Image>


      <View style={{flexDirection:"row"}}>
        <Button onPress={()=>changeImage("thor")} title="Thor"></Button>
        <Button onPress={()=>changeImage("blackpanther")} title="blackpanther"></Button>
      </View>
      <View style={{flexDirection:"row"}}>
        <Button onPress={()=>changeImage("ironman")} title="Ironman"></Button> 
        <Button onPress={()=>changeImage("spiderman")} title="spiderman"></Button>
        <Text/>
      </View>


      </View>

     </View>
   
  )
}
let mystyle = StyleSheet.create({
  viewstyle:{
    flex:1,justifyContent:'center',alignItems:'center',paddingTop: Platform.OS ==="android"?30:0
  }
})