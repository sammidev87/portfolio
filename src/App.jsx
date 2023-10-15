import './App.css';
import { Home, About, Projects, Certificates } from './assets/components/pages/index';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/certificates' element={<Certificates />} />
      </Routes>
    </div>
  );
}

export default App;
