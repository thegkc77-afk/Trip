import './App.css'
import Home from "./pages/Home";
import Contact from './pages/Contact';
import { Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
