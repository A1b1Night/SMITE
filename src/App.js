import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Home from './Components/Home/Index';
import NotFound from './Pages/NotFound';
import DetalleProduct from './Components/Products/DetalleProduct';

import './Scss/App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home exact />} />
          <Route path='DetalleProduct' element={<DetalleProduct exact />}/>
          <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
