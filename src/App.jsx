import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
<<<<<<< HEAD
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
=======
    <Home/>
   
   
     
    
     

>>>>>>> f4e19abdda8e95b830038deccadcf58b9207fe67
    </>
  );
}

export default App;
