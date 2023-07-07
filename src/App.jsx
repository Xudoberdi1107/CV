import './App.css'
import {Route, Routes} from "react-router-dom"
import { Home, MakeCv, ModeStyle } from './pages'

function App() {

  return (
    <div className='app'>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/form' element = {<MakeCv/>}/>
          <Route path='/style_pages' element = {<ModeStyle/>}/>

        </Routes>
    </div>
  )
}

export default App
