import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Profile from './components/Profile/profilePage'
import Login from "./views/Login";
import Translate from "./components/Translation/translationPage";
// import Translate from "./views/Translate";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
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

