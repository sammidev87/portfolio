import './App.css';
import { Route, Routes } from 'react-router';
import { Home, About, Education, Contact } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/education' element={<Education />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default App;
