import { Text, View , SafeAreaView, StyleSheet, Platform, Pressable} from "react-native";
import { useState } from "react";
export default function App() {

  let [color1,updateColor] = useState("")
  let ChangeColor=(color)=>{
    updateColor(color)
  }
  return<View style={[styles.container,{backgroundColor:color1}]}>
         <View style={styles.footer}>

        <Text onPress={()=>ChangeColor('#283618')} style={{ paddingTop: 50, flex:2.5, backgroundColor: '#283618', width: 100, height: 100}}></Text>
        <Text onPress={()=>ChangeColor('#606c38')} style={{ paddingTop: 50, flex:2.5, backgroundColor: '#606c38', width: 100, height: 100}}></Text>
        <Text onPress={()=>ChangeColor('#588157')} style={{ paddingTop: 50, flex:2.5, backgroundColor: '#588157', width: 100, height: 100}}></Text>
        <Text onPress={()=>ChangeColor('#84a59d')} style={{ paddingTop: 50, flex:2.5, backgroundColor: '#84a59d', width: 100, height: 100}}></Text>
        </View>
      </View>

}
const styles = StyleSheet.create({
    container:{
    flex : 1,
    flexDirection:"column",
    paddingTop : Platform.OS == 'android' ? 20:0
  },

  footer:{
    flex:1,
    alignItems:"flex-end",
    flexDirection:"row",
  },
})