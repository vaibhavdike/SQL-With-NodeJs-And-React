import Login from "./component/login/Login";
import Register from "./component/register/Register";
import {
  BrowserRouter as  Router,
    Routes,
    Route,
    // Navigate
    
  } from "react-router-dom";


function App() {
  return (
    <div className="App">
   <Router>
   
   <Routes>
     <Route exact path="/" element={<Register/>}/>
     <Route exact path="/login" element={<Login/>}/>
    
   </Routes>

</Router>
    </div>
  );
}

export default App;
