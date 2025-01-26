import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, About, NotFound } from './components/Task1';
import MainPageFromTask2 from './components/Task2';
import MainPageFromTask3 from './components/Task3';

function App() {
  return (
    <BrowserRouter>

      <div className='div'>
        <p>Some information in header</p>
      </div>

      {/* Basic configuration 1 */}
      {/* 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      */}


      {/* Basic configuration 2 */}
      {/* <Routes>
        <Route path='/' element={<MainPageFromTask2/>}>          
          <Route index element = { <Home/> }/>
          <Route path='home' element = { <Home/> }/>
          <Route path='about' element = { <About/> }/>
        </Route>       
        <Route path='*' element = { <NotFound/> }/>
      </Routes> */}

      <Routes>
        <Route path='/' element={ <MainPageFromTask3/> }>
          <Route index element={ <Home/> }/>
          <Route path='home' element={ <Home/> }/>
          <Route path='about' element={ <About/> }/>
          <Route path='*' element={ <NotFound/> }/>
        </Route>
      </Routes>

      <div className='div'>
        <p>Some information in footer</p>
      </div>

    </BrowserRouter>

  );
}

export default App;
