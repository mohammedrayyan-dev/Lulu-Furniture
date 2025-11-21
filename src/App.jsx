import { Routes, Route } from 'react-router-dom'
import Home from "/src/pages/Home.jsx"
import Sofa from "/src/pages/Sofa.jsx"
import BedCot from "/src/pages/BedCot.jsx"
import DiningTable from "/src/pages/DiningTable.jsx"
import TvUnit from "./pages/TvUnit.jsx"
import StorageShelf from "./pages/StorageShelf.jsx"
import WoodenAccessories from "./pages/WoodenAccessories.jsx"
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sofa" element={<Sofa/>}/>
      <Route path="/bedcot" element={<BedCot/>}/>
      <Route path="/diningtable" element={<DiningTable/>}/>
      <Route path="/tvunit" element={<TvUnit/>}/>
      <Route path="/storageshelf" element={<StorageShelf/>}/>
      <Route path="/woodenaccessories" element={<WoodenAccessories/>}/>
    </Routes>
    </>
  )
}

export default App