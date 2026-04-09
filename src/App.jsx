import './App.css'
import Home from "./pages/Home";
import Contact from './pages/Contact';
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Header from './components/Header';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
