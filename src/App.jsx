import './App.css'
import {Route, Routes} from 'react-router-dom'
import Headert from './Components/Headert'
import Footert from './Components/Footert'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Servicios from './Components/Servicios'
import DerechoP from './Components/DerechoP'
import DerechoA from './Components/DerechoA'
import DerechoPr from './Components/DerechoPr'
import DerechoT from './Components/DerechoT'

function App() {

  return (
    <div className="App">
      <Headert/>
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Servicios' element={<Servicios/>}/>
        <Route path='/DerechoP' element={<DerechoP/>}/>
        <Route path='/DerechoA' element={<DerechoA/>}/>
        <Route path='/DerechoPr' element={<DerechoPr/>}/>
        <Route path='/DerechoT' element={<DerechoT/>}/>
        <Route path='*' element={<h1>error 404</h1>}/>
      </Routes>
      <Footert/>
      
    </div>
  )
}

export default App
