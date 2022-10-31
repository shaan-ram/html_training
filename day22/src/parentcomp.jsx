import ChildComp from "./childcomp";

let ParentComp = ()=>{
    return <div style={{border:"2px solid grey", margin:"10px", padding:"10px"}}>
            <h1>Parent Comp</h1>
            <ChildComp/>
        </div>
}
export default ParentComp;