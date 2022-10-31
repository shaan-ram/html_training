import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"
import AquamanComp from "./components/aquaman.component";
import BatmanComp from "./components/batman.component";
import HomeComp from "./components/home.component";
import NotFound from "./components/notfound.component";
import SupermanComp from "./components/superman.component";
import WonderWomenComp from "./components/wonderwomen.component";
import Flash from "./components/flash.component";
import "./myroutes.css";
function App() {
  return (
    <div>
      <h1>React Routing 101</h1>
      <BrowserRouter>
       {/*  <ul>
          <li><Link to="/">Home Component</Link></li>
          <li><Link to="batman">Batman Component</Link></li>
          <li><Link to="superman">Superman Component</Link></li>
          <li><Link to="wonderwomen">Wonder Women Component</Link></li>
          <li><Link to="aquaman">Aquaman Component</Link></li>
          <li><Link to="flash">Flash Component</Link></li>
          <li><Link to="cyborg">Cyborg Component</Link></li>
        </ul> */}
        <ul>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : '' } end to="/">Home Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : '' } to="batman">Batman Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : '' } to="superman">Superman Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : '' } to="wonderwomen">Wonder Women Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : '' } to="aquaman">Aquaman Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : '' } to="flash">Flash Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : '' } to="cyborg">Cyborg Component</NavLink></li>
        </ul>
        <Routes>
            {/* <Route path="" element={<h1>welcome home</h1>}/> */}
            <Route path="" element={<HomeComp/>}/>
            <Route path="batman" element={<BatmanComp/>}/>
            <Route path="superman" element={<SupermanComp/>}/>
            <Route path="wonderwomen" element={<WonderWomenComp/>}/>
            <Route path="aquaman" element={<AquamanComp/>}/>
            <Route path="flash" element={<Flash/>} />
            <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;