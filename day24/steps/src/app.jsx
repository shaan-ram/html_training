import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes,Route, NavLink} from "react-router-dom"
import Fivehundred from "./five";
import "./myroutes.css";


// let SupermanComp = React.lazy(()=>import( "./components/superman.component"))
// let WonderWomenComp = React.lazy(()=>import( "./components/wonderwomen.component"))

function App() {
  let [quantity, setQuantity] = useState(0);
 

  return ( 
    <div>
      {/* <h1>React Routing 101</h1>*/}
      <h2>Quantity {quantity}</h2>
      <label htmlFor="qty">Set Quantity</label>
      <input type="number" id="qty" value={quantity} onChange={(evt)=> setQuantity(evt.target.value)}/>

      <h2>Name <input type="text"/></h2>
      <h2>Address<input type="text"/></h2>

      <BrowserRouter>
      <li><NavLink className={ ({isActive})=> isActive ? 'box' : '' } to={"five/"+quantity}>Number: </NavLink></li>
       {/*  <ul>
          <li><Link to="/">Home Component</Link></li>
          <li><Link to="batman">Batman Component</Link></li>
          <li><Link to="superman">Superman Component</Link></li>
          <li><Link to="wonderwomen">Wonder Women Component</Link></li>
          <li><Link to="aquaman">Aquaman Component</Link></li>
          <li><Link to="flash">Flash Component</Link></li>
          <li><Link to="cyborg">Cyborg Component</Link></li>
        </ul> */}
        {/* <ul>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : '' } end to="/">Home Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : '' } to="batman">Batman Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : '' } to="superman">Superman Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : '' } to="wonderwomen">Wonder Women Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : '' } to={"wonderwomen/"+quantity}>Wonder Women </NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : '' } to="aquaman">Aquaman Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : '' } to="flash">Flash Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : '' } to="cyborg">Cyborg Component</NavLink></li>
        </ul> */}
        <Routes>
            {/* <Route path="" element={<h1>welcome home</h1>}/> */}
            {/* <Route path="" element={<HomeComp/>}/>
            <Route path="batman" element={<Suspense> <BatmanComp/> </Suspense>}/>
        
            <Route path="superman" element={<SupermanComp/>}/>
            <Route path="wonderwomen/:quantity" element={<WonderWomenComp/>}/>
            <Route path="aquaman" element={<Suspense fallback={<>loading...</>}> <AquamanComp/> </Suspense>}/>
            <Route path="flash" element={<Suspense fallback={<>loading...</>}> <FlashComp/> </Suspense>} />
            <Route path="*" element={<Suspense fallback={<>loading...</>}> <NotFound/> </Suspense>}/> */}
            <Route path="five" element={<Fivehundred/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;