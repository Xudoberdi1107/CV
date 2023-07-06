import './App.css'
import {Route, Routes} from "react-router-dom"
import MakeCv from './pages/form_page'
function App() {

  return (
    <div className='app'>
        <Routes>
          <Route path='/form' element = {<MakeCv/>}/>
        </Routes>
    </div>
  )
}

export default App
