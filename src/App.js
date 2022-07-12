import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import LoginPage from './components/LoginForm/LoginPage'
import Profile from './components/Profile/profilePage'
import TranslationPage from "./components/Translation/translationPage";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="translation" element={<TranslationPage/>}/>
        <Route path="profile" element={<Profile/>}/>
      </Routes>
    </div>
    </BrowserRouter>
      
  );
}

export default App;
