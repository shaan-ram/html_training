import { useState } from "react";
import ParentComp from "./parentcomp";
import CousinComp from "./cousincomp";
import FamilyContext from "./family.context"

let GrandparentComp = ()=>{
    let [gift,updateGift]=useState(0)
    return <div style={{border:"2px solid grey", margin:"10px", padding:"10px"}}>
            <h1>Grand parent COmp</h1>
            <button onClick={()=> updateGift(Math.round(Math.random()*1000))}>Value</button>
            <FamilyContext.Provider value={gift}>
                <ParentComp/>
                <CousinComp/>
            </FamilyContext.Provider>
    </div>
}
export default GrandparentComp;