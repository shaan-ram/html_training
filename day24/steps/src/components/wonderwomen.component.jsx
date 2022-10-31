import { useParams } from "react-router-dom"

function WonderWomen(){
    let params = useParams();
    return <div>
        <h2 style={{textAlign: "center"}}>Wonder Women</h2>
        <h2>Quantity is : {Number(params.quantity)+10}</h2>
    </div>
}
export default WonderWomen;
                              