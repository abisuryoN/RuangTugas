import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Edu = lazy(() => import('./pages/Edu'));
const Creative = lazy(() => import('./pages/Creative'));
const Digital = lazy(() => import('./pages/Digital'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edu" element={<Edu />} />
          <Route path="/creative" element={<Creative />} />
          <Route path="/digital" element={<Digital />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
