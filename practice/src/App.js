
import './App.css';
import React from 'react';
import { useState } from 'react';
import Cont from './Components/Cont';
import Nav from './Components/Nav';
import PA1 from './Components/PA1';
import P2 from './Components/P2';


function App() {
  const [theme,setTheme]=useState(false);
  return (
    <div className="App">
      <Cont.Provider value={theme}>
      <button onClick={()=>setTheme(!theme)}>Change Theme</button>
      <Nav/>
      <PA1/>
      <P2/>
      </Cont.Provider>
    </div>
    
  );
}

export default App;
