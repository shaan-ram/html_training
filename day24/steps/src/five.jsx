import { useParams } from "react-router-dom"                                                                 

function Fivehundred(){                                                                 
    let params = useParams();                                                                 
    return <div>                                                                 
        <h2>Quantity is : {Number(params.quantity)+500}</h2>                                                                 
    </div>                                                                 
}                                                                 
export default Fivehundred;                                                                 
                                