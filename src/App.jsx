import { useState } from 'react';
import './App.css';
import Navbar from './components/Nabvar';
import Home from "./Views/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from './Views/NotFound';
import Products from './Views/Products';



function App() {
const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />    
        <Route path="/*" element={<NotFound />} />   

        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  ); 
}

export default App;

