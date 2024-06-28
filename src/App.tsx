import { Routes, Route} from "react-router-dom"
import Home from './components/Home'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Layout from './components/Layout'
import { BrowserRouter } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/experience" element={<Experience/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

