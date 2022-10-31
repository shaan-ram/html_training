import { useNavigate } from "react-router-dom";
 
function Superman() {
  let batNav = useNavigate();
    return (
      <div>
        <h1>Superman</h1>
         {/* 
         replace true will replace the history stack
         replace false will keep the histroy stack 
         */}
        <button onClick={ ()=> batNav("/bataman", { replace : false })}>Navigate to Batman</button>
      </div>
    );
  }
  
  export default Superman;