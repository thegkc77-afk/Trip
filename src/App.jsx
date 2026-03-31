import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

import HeroSection from './Pages/HeroSection'
import Navbar from './Pages/Navbar'
import Howitwork from './Pages/Howitwork'
import About from './components/About'


function Home(){
  return (
    <>
    <HeroSection/>
    <Howitwork/>
    <About/>
   
    </>

  )
}



function App() {

  return (
    <>
    <BrowserRouter>
      <div className='flex flex-col min-h-screen'>
        <Navbar/>
        <main className='flex-1'>

          <Routes>
          <Route path='/' element={<Home/>}/>

          </Routes>
        </main>
      </div>





    </BrowserRouter>
     
    
     

    </>
  )
}


export default App
