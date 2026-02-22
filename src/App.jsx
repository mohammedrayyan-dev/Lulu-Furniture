import { Routes, Route } from 'react-router-dom'
import Home from "/src/pages/Home.jsx"
import Sofa from "/src/pages/Sofas.jsx"
import BedCot from "/src/pages/BedCots.jsx"
import DiningTable from "/src/pages/DiningTables.jsx"
import TvUnit from "./pages/TvUnits.jsx"
import StorageShelf from "./pages/StorageShelfs.jsx"
import Berows from "./pages/Berows.jsx"
import Chairs from "./pages/Chairs.jsx"
import ComfortEssentials from "./pages/ComfortEssentials.jsx"
import TeakWoodSofas from "./pages/sofas/TeakWoodSofas.jsx"
import RubberWoodSofas from "./pages/sofas/RubberWoodSofas.jsx"
import CushionComfortSofas from "./pages/sofas/CushionComfortSofas.jsx"
import FabricSofas from "./pages/sofas/FabricSofas.jsx"
import VelvetSofas from "./pages/sofas/VelvetSofas.jsx"
import ReclinerSofas from "./pages/sofas/ReclinerSofas.jsx"
import LeatherSofas from "./pages/sofas/LeatherSofas.jsx"
import './App.css'
import FloatingBanners from './components/FloatingBanners.jsx'

function App() {
  return (
    <>
    <FloatingBanners />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sofas" element={<Sofa/>}/>
      <Route path="/bed-&-cots" element={<BedCot/>}/>
      <Route path="/dining-tables" element={<DiningTable/>}/>
      <Route path="/tv-units" element={<TvUnit/>}/>
      <Route path="/storage-shelfs" element={<StorageShelf/>}/>
      <Route path="/berows" element={<Berows/>}/>
      <Route path="/chairs" element={<Chairs/>}/>
      <Route path="/comfort-essentials" element={<ComfortEssentials/>}/>
      <Route path="/sofas/teak-wood" element={<TeakWoodSofas/>}/>
      <Route path="/sofas/rubber-wood" element={<RubberWoodSofas/>}/>
      <Route path="/sofas/cushion-comfort" element={<CushionComfortSofas/>}/>
      <Route path="/sofas/fabric" element={<FabricSofas/>}/>
      <Route path="/sofas/velvet" element={<VelvetSofas/>}/>
      <Route path="/sofas/recliner" element={<ReclinerSofas/>}/>
      <Route path="/sofas/leather-pu" element={<LeatherSofas/>}/>
    </Routes>
    </>
  )
}

export default App