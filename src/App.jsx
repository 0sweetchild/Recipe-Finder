import { Route, Routes } from "react-router"
import './App.css'
import Layout from './components/Layout.jsx'
import Contact from './page/Contact.jsx'
import Home from './page/Home.jsx'
import Recipes from './page/Recipes.jsx'



function App() {

  return (
    <>
    <Layout>
     <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/contact" element={<Contact/>}/>
      <Route  path="/recipes" element={<Recipes/>}/>
      
    
     </Routes>
     </Layout>
    </>
  )
}

export default App
