import { useContext } from "react"
import FamilyContext from "./family.context"

let ChildComp = ()=>{
    let grandGift = useContext(FamilyContext)
    return <div style={{border:"2px solid grey", margin:"10px", padding:"10px"}}>
            <h1>Child Comp</h1>
            {/* <FamilyContext.Consumer>{(val)=><h2>Gift Recieved{ val }</h2>}</FamilyContext.Consumer>0 */}
            <FamilyContext/>
            <FamilyContext/>
            <FamilyContext/>
            </div>
}
export default ChildComp;