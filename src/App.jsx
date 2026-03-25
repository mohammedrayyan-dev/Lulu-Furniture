import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from "./layout/Layout.jsx"
import Home from "/src/pages/Home.jsx"
import Sofa from "/src/pages/Sofas.jsx"
import BedCot from "/src/pages/BedCots.jsx"
import DiningTable from "/src/pages/DiningTables.jsx"
import TvUnit from "/src/pages/TvUnits.jsx"
import StorageShelf from "/src/pages/StorageShelves.jsx"
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

// Bed Cots
import TeakWoodBedCots from "./pages/bed-cots/TeakWoodBedCots.jsx"
import EngineeredWoodBedCots from "./pages/bed-cots/EngineeredWoodBedCots.jsx"
import MetalBedCots from "./pages/bed-cots/MetalBedCots.jsx"
import BoxStorageBedCots from "./pages/bed-cots/BoxStorageBedCots.jsx"
import HydraulicStorageBedCots from "./pages/bed-cots/HydraulicStorageBedCots.jsx"

// Dining Tables
import FourSeaterDiningTable from "./pages/dining-tables/FourSeaterDiningTable.jsx"
import SixSeaterDiningTable from "./pages/dining-tables/SixSeaterDiningTable.jsx"
import GlassTopDiningTable from "./pages/dining-tables/GlassTopDiningTable.jsx"
import EngineeredWoodDiningTable from "./pages/dining-tables/EngineeredWoodDiningTable.jsx"

// Storage Shelves
import BookShelves from "./pages/storage-shelves/BookShelves.jsx"
import ShoeRacks from "./pages/storage-shelves/ShoeRacks.jsx"
import WallMountedShelves from "./pages/storage-shelves/WallMountedShelves.jsx"

// TV Units
import WoodenTVUnits from "./pages/tv-units/WoodenTVUnits.jsx"
import TVUnitsWithStorage from "./pages/tv-units/TVUnitsWithStorage.jsx"
import WallMountedTVUnits from "./pages/tv-units/WallMountedTVUnits.jsx"
import CornerTVUnits from "./pages/tv-units/CornerTVUnits.jsx"

// Chairs
import DiningChairs from "./pages/chairs/DiningChairs.jsx"
import WoodenArmChairs from "./pages/chairs/WoodenArmChairs.jsx"
import PlasticChairs from "./pages/chairs/PlasticChairs.jsx"
import CushionedChairs from "./pages/chairs/CushionedChairs.jsx"

// Comfort Essentials
import BeanBags from "./pages/comfort-essentials/BeanBags.jsx"
import CushionPillows from "./pages/comfort-essentials/CushionPillows.jsx"

// Berows
import BerowsWithMirror from "./pages/berows/BerowsWithMirror.jsx"
import BerowsWithDrawers from "./pages/berows/BerowsWithDrawers.jsx"
import SlidingDoorBerows from "./pages/berows/SlidingDoorBerows.jsx"
import CompactBerows from "./pages/berows/CompactBerows.jsx"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Home/>}/>
      <Route path="/sofas" element={<Sofa/>}/>
      <Route path="/beds-&-cots" element={<BedCot/>}/>
      <Route path="/dining-tables" element={<DiningTable/>}/>
      <Route path="/tv-units" element={<TvUnit/>}/>
      <Route path="/storage-shelves" element={<StorageShelf/>}/>
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

      {/* Bed Cots */}
      <Route path="/beds-&-cots/teak-wood-bed-cots" element={<TeakWoodBedCots/>}/>
      <Route path="/beds-&-cots/engineered-wood-bed-cots" element={<EngineeredWoodBedCots/>}/>
      <Route path="/beds-&-cots/metal-bed-cots" element={<MetalBedCots/>}/>
      <Route path="/beds-&-cots/box-storage-bed-cots" element={<BoxStorageBedCots/>}/>
      <Route path="/beds-&-cots/hydraulic-storage-bed-cots" element={<HydraulicStorageBedCots/>}/>

      {/* Dining Tables */}
      <Route path="/dining-tables/four-seater-dining-table" element={<FourSeaterDiningTable/>}/>
      <Route path="/dining-tables/six-seater-dining-table" element={<SixSeaterDiningTable/>}/>
      <Route path="/dining-tables/glass-top-dining-table" element={<GlassTopDiningTable/>}/>
      <Route path="/dining-tables/engineered-wood-dining-table" element={<EngineeredWoodDiningTable/>}/>

      {/* Storage Shelves */}
      <Route path="/storage-shelves/book-shelves" element={<BookShelves/>}/>
      <Route path="/storage-shelves/shoe-racks" element={<ShoeRacks/>}/>
      <Route path="/storage-shelves/wall-mounted-shelves" element={<WallMountedShelves/>}/>

      {/* TV Units */}
      <Route path="/tv-units/wooden-tv-units" element={<WoodenTVUnits/>}/>
      <Route path="/tv-units/tv-units-with-storage" element={<TVUnitsWithStorage/>}/>
      <Route path="/tv-units/wall-mounted-tv-units" element={<WallMountedTVUnits/>}/>
      <Route path="/tv-units/corner-tv-units" element={<CornerTVUnits/>}/>

      {/* Berows */}
      <Route path="/berows/berows-with-mirror" element={<BerowsWithMirror/>}/>
      <Route path="/berows/berows-with-drawers" element={<BerowsWithDrawers/>}/>
      <Route path="/berows/sliding-door-berows" element={<SlidingDoorBerows/>}/>
      <Route path="/berows/compact-berows" element={<CompactBerows/>}/>

      {/* Chairs */}
      <Route path="/chairs/dining-chairs" element={<DiningChairs/>}/>
      <Route path="/chairs/wooden-arm-chairs" element={<WoodenArmChairs/>}/>
      <Route path="/chairs/plastic-chairs" element={<PlasticChairs/>}/>
      <Route path="/chairs/cushioned-chairs" element={<CushionedChairs/>}/>

      {/* Comfort Essentials */}
      <Route path="/comfort-essentials/bean-bags" element={<BeanBags/>}/>
      <Route path="/comfort-essentials/cushion-pillows" element={<CushionPillows/>}/>

      </Route>
    </Routes>
  )
}

export default App