import { Routes, Route } from 'react-router-dom';
import { Home, AboutUs, Gallery} from './pages';

const AppRouter = () =>
  <Routes>
    <Route path='/' element={ <Home/>} />
    <Route path='/about' element={ <AboutUs/>} />
    <Route path='/gallery' element={ <Gallery />} />
  </Routes>


export default AppRouter;