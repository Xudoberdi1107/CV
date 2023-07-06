import './App.css'
import {Route, Routes} from "react-router-dom"
import { Home, MakeCv } from './pages'

function App() {

  return (
    <div className='app'>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/form' element = {<MakeCv/>}/>
        </Routes>
    </div>
  )
}

export default App
