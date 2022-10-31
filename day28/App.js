import { Text, View , SafeAreaView, Button, Alert} from "react-native";
import { useState } from "react";
export default function App(){

  let [message, setMessage] = useState("")

  let pressHander = () =>{
    console.log("Clicked")
    Alert.alert("Alert", "Do you think its gonna rain now..??",[
      { text : "Yes", onPress: () => setMessage("yezz :(")},
      { text : "No", onPress: () => setMessage("Nooo :)")},
    ])
  }
  return( <SafeAreaView>
           <View style={{ paddingTop: 50, backgroundColor: 'orange'}}>
            <Text>{message}</Text>
             <Button onPress={pressHander} title="clickMe"></Button>
          </View>
          </SafeAreaView>)
        
}

// import { Text, View, Button, Dimensions, SafeAreaView } from "react-native";
// import { useState } from "react";
// export default function App(){

//   let [sdimensions, setSDimensions] = useState({});
//   let [wdimensions, setWDimensions] = useState({});
//   let getDimensions = ()=>{
//     setSDimensions(Dimensions.get("screen"));
//     setWDimensions(Dimensions.get("window"));
//   }
  
//   return( <SafeAreaView>
//            <View style={{ paddingTop: 50, backgroundColor: 'orange'}}>
//             <Text>{"screen Dimensions"}</Text>
//             <Text>Screen Width: { sdimensions.width}</Text>
//             <Text>Screen Height: { sdimensions.height}</Text>
//             <Text>{"window Dimensions"}</Text>
//             <Text>Window Width: { wdimensions.width}</Text>
//             <Text>Window Height: { wdimensions.height}</Text>

//              <Button onPress={getDimensions} title="Get Dimensions"></Button>
//           </View>
//           </SafeAreaView>)
        
// }



// import { Text, View, Button, Dimensions, SafeAreaView, Platform } from "react-native";
// import { useState } from "react";
// export default function App(){

//   console.log(JSON.stringify(Platform))
//   return <SafeAreaView>
//     <View>
//       <Text>{"Platform"}</Text>
//       <Text>{Platform.OS}</Text>

//     </View>
//   </SafeAreaView>
// }
// let mystyle = StyleSheet.create({
//   viewstyle:{
//     paddingTop : Platform.OS === "android" ? 30 : 0
//   }
// })

// import { Image, View} from "react-native";
// export default function App(){

//   return <View>
//     <Image source={ require("./assets/images/ironman.jpg")}/>
//     <Image source={ thor } style={{ width: 100, height: 100 }}/>
//     <Image url="https://www.google.com/url?sa=i&url=https%3A%2F%2Fsproutsocial.com%2Finsights%2Fsocial-media-image-sizes-guide%2F&psig=AOvVaw1Niyok9L7HIqO6li3IkBKr&ust=1666431169441000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOiOkIGC8foCFQAAAAAdAAAAABAEhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fsproutsocial.com%2Finsights%2Fsocial-media-image-sizes-guide%2F&psig=AOvVaw1Niyok9L7HIqO6li3IkBKr&ust=1666431169441000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOiOkIGC8foCFQAAAAAdAAAAABAEhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fsproutsocial.com%2Finsights%2Fsocial-media-image-sizes-guide%2F&psig=AOvVaw1Niyok9L7HIqO6li3IkBKr&ust=1666431169441000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOiOkIGC8foCFQAAAAAdAAAAABAE"></Image>
//   </View>

// }