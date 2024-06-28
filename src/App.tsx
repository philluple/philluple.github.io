import './App.css'
import { Routes, Route} from "react-router-dom"
import Home from './components/Home'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
    <Navbar/>
      <div>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/experience" element={<Experience/>}></Route>
      </Routes>
      </div>
    </>
  )
}

