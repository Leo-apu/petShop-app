import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Header from './components/Header';
import Home from './pages/Home';
import { Post } from './pages/Post';
import Sobre from './pages/Sobre';
import Page404 from './pages/page404';
import Categoria from './pages/Categoria';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {



  // const location  = window.location.pathname;
  
/*   const router = () => {
    if (location === '/'){
      return {
        Home
      }
    }
    if (location === '/sobre'){
      return {
        Sobre
      }
    }
  } */

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/categoria/:id/*" element={<Categoria />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
