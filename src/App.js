import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from "./views/Login";
import Translate from "./components/Translation/translationPage";
import Profile from "./views/Profile";
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="translate" element={<Translate/>}/>
        <Route path="profile" element={<Profile/>}/>
      </Routes>
    </div>
    </BrowserRouter>
      
  );
}

export default App;

