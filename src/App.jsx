import { useContext } from "react";
import { ThemeContext } from "../Contexts/theme.jsx";
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Show from './pages/Show.jsx'
import About from './Component/About/About.jsx'
import Projects from './Component/Projects/Projects.jsx'
import Contactme from './Component/Contactme/Contactme.jsx'
import Skilles from './Component/Skilles/Skilles.jsx';
function App() {
 const url= document.URL;
 console.log(url);
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <div  style={{ backgroundColor: theme.backgroundImage }}>
       <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/About' element={<About/>}/>
        <Route  path='/Skills' element={<Skilles/>}/>
        <Route  path='/Projects' element={<Projects/>}/>
        <Route  path='/Contactme' element={<Contactme/>}/>
        <Route  path='/Show/:id' element={<Show/>}/>
      </Routes> 
    </div>
      
  
  )
}
export default App
