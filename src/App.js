import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, About, NotFound } from './components/Task1';

function App() {
  return (
    <BrowserRouter>

      {/* Basic configuration 1 */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>

      <div className='div'>
        <p>Lorem import</p>
      </div>

    </BrowserRouter>

  );
}

export default App;
