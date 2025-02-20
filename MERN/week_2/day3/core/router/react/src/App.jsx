import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import React from 'react'
import Color from './components/Color';
import Number from './components/Number';
import Home from './components/Home';



 
function App() {
  return (
    <Router>
      <Routes>
    	<Route path="/:number" element={<Number />} />
      <Route path="/" element={<Home/>} />
      <Route path="/:hello/:color1/:color2" element={<Color/>} />
      </Routes>
    </Router>
  );
}
    
export default App

