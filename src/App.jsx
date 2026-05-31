import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Edu from './pages/Edu';
import Creative from './pages/Creative';
import Digital from './pages/Digital';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edu" element={<Edu />} />
        <Route path="/creative" element={<Creative />} />
        <Route path="/digital" element={<Digital />} />
      </Routes>
    </BrowserRouter>
  );
}
