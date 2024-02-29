import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import Search from './pages/Search';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:id' element={<Products />} />
        <Route path='search' element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
