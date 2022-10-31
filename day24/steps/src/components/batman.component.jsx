import { useNavigate } from "react-router-dom";


function Batman(){
let womenNav = useNavigate();
    return <div>
        <h2>Batman</h2>
        <button onClick={ ()=> womenNav("/wonderwomen", { replace : false })}>Navigate to Wonder women</button>
       </div>
}
export default Batman;