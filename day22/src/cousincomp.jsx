
import FamilyContext from "./family.context"

let CousinComp = ()=>{
    return <div style={{border:"2px solid grey", margin:"10px", padding:"10px"}}>
            <h1>Cousin Comp</h1>
            <FamilyContext.Consumer>{(val)=><h2>Gift Recieved{ val }</h2>}</FamilyContext.Consumer>
            </div>
}
export default CousinComp;