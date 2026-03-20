import { Route, Routes } from 'react-router-dom';
import Layout from '@components/Layout.tsx';
import About from '@pages/About.tsx';
import Home from '@pages/Home.tsx';
import './App.css';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
