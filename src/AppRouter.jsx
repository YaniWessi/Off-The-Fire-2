import { Routes, Route } from 'react-router-dom';
import { Home, Shop, AboutUs, Gallery} from './pages';

const AppRouter = () =>
  <Routes>
    <Route path='/' element={ <Home/>} />
    <Route path='/about' element={ <AboutUs/>} />
    <Route path='/gallery' element={ <Gallery />} />
    <Route path='/gallery' element={ <Gallery />} />
    <Route path='/shop' element={ <Shop />} />
  </Routes>


export default AppRouter;