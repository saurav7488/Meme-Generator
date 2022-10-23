import "./App.css";
import AP from "./component/AP";
import Card from "./component/Card";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Editpage from "./component/Editpage";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <> 
    <Router>
        <Navbar />  
        <AP />         
          <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="/edit" element={<Editpage/>} />
          </Routes>
    </Router>
    </>
  );
}

export default App;
