import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from "./layout/Layout.jsx"
import Home from "/src/pages/Home.jsx"
import Sofa from "/src/pages/Sofas.jsx"
import BedCot from "/src/pages/BedCots.jsx"
import DiningTable from "/src/pages/DiningTables.jsx"
import TvUnit from "/src/pages/TvUnits.jsx"
import StorageShelf from "/src/pages/StorageShelfs.jsx"
import Berows from "/src/pages/Berows.jsx"
import Chairs from "/src/pages/Chairs.jsx"
import ComfortEssentials from "/src/pages/ComfortEssentials.jsx"

// Sofas
import ThreeSeaterSofas from "./pages/sofas/ThreeSeaterSofas.jsx"
import TwoSeaterSofas from "./pages/sofas/TwoSeaterSofas.jsx"
import LShapeSofas from "./pages/sofas/LShapeSofas.jsx"
import FabricSofas from "./pages/sofas/FabricSofas.jsx"
import ReclinerSofas from "./pages/sofas/ReclinerSofas.jsx"
import LeatherSofas from "./pages/sofas/LeatherSofas.jsx"


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Home/>}/>
      <Route path="/sofas" element={<Sofa/>}/>
      <Route path="/beds-&-cots" element={<BedCot/>}/>
      <Route path="/dining-tables" element={<DiningTable/>}/>
      <Route path="/tv-units" element={<TvUnit/>}/>
      <Route path="/storage-shelfs" element={<StorageShelf/>}/>
      <Route path="/berows" element={<Berows/>}/>
      <Route path="/chairs" element={<Chairs/>}/>
      <Route path="/comfort-essentials" element={<ComfortEssentials/>}/>

      {/* Sofas */}
      <Route path="/sofas/3-seater-sofas" element={<ThreeSeaterSofas/>}/>
      <Route path="/sofas/2-seater-sofas" element={<TwoSeaterSofas/>}/>
      <Route path="/sofas/l-shape-sofas" element={<LShapeSofas/>}/>
      <Route path="/sofas/fabric" element={<FabricSofas/>}/>
      <Route path="/sofas/recliner" element={<ReclinerSofas/>}/>
      <Route path="/sofas/leather-pu" element={<LeatherSofas/>}/>
      </Route>
    </Routes>
  )
}

export default App