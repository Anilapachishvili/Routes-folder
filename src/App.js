import {Routes, Route, Link} from "react-router-dom";
import './App.css';
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
function App() {
  return (
    <div className="App">
      <ul className="pages">
        <li className="links">
          <Link className="link" to ="/">Home</Link>
        </li>
        <li>
          <Link className="link" to ="/about">About</Link>
        </li>
        <li>
          <Link className="link" to="/Contact">Contact</Link>
        </li>
      </ul>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
       </Routes>
    </div>
  );
}

export default App;
