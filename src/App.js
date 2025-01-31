import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home, About, NotFound } from './components/Task1';
import MainPageFromTask2 from './components/Task2';
import MainPageFromTask3 from './components/Task3';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import VesselsNavigation from './components/VesselsNavigation.js';
import VesselsHome from './components/VesselsHome.js';
import VesselsAbout from './components/VesselsAbout.js';
import VesselsPage from './components/VesselsPage.js';
import VesselsNotFound from './components/VesselsNotFound.js';
import image1 from './images/2025-01-26-18-21-09.jpg';
import image2 from './images/2025-01-26-22-05-14.jpg';
import image3 from './images/2025-01-26-22-06-08.jpg';
import image4 from './images/2025-01-26-22-07-14.jpg';
import vesselsData from './components/VesselsData.js';
import { useState } from 'react';


function App() {

  const [selectedVessel, setSelectedVessel] = useState(null);

  const handleSelectVessel = (event) => {
    const vesselName = event.target.value;
    const selectedVessel = vesselsData.find((v) => v.name === vesselName);
    setSelectedVessel(selectedVessel);
  }
  return (
    <BrowserRouter>
    <Container>

      {/* Primitive header */}
      
      {/* <hr></hr> */}

      {/* Basic configuration 1 */}
      {/* 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      */}

      {/* Basic configuration 2 */}
      {/* 
      <Routes>
        <Route path='/' element={<MainPageFromTask2/>}>          
          <Route index element = { <Home/> }/>
          <Route path='home' element = { <Home/> }/>
          <Route path='about' element = { <About/> }/>
        </Route>       
        <Route path='*' element = { <NotFound/> }/>
      </Routes> 
      */}

      {/* Basic configuration 3 */}
      {/* 
      <Routes>
        <Route path='/' element={ <MainPageFromTask3/> }>
          <Route index element={ <Home/> }/>
          <Route path='home' element={ <Home/> }/>
          <Route path='about' element={ <About/> }/>
          <Route path='*' element={ <NotFound/> }/>
        </Route>
      </Routes>  
      */}

      {/* HW */}
      {/* <Routes>
        <Route path='/' element={ <VesselsNavigation/> }>

          <Route index element={ <VesselsHome/> }/>
          <Route path='home' element={ <VesselsHome/> }/>
          <Route path='about' element={ <VesselsAbout/> }/>

          {vesselsData.map((vessel,index) => (
            <Route key={index} path={`vessel${index + 1}`} element={ <VesselsPage vessel={vessel}/> }/>
          ))}
                 
          <Route path='*' element={ <VesselsNotFound/> }/>
        </Route>
      </Routes> */}

      {/* Bootstrap style */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href='/'>Vessels App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <NavDropdown title="Vessels" id='basic-nav-dropdown'>
              {vesselsData.map((vessel, index) => (
                <NavDropdown.Item key={index} as={Link} to={`/vessel${index + 1}`}
                >
                  {vessel.name}

                </NavDropdown.Item>
              ))}

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr></hr>

      <Routes>
          <Route path="/" element={<VesselsHome />} />
          <Route path="home" element={<VesselsHome />} />
          <Route path="about" element={<VesselsAbout />} />
          {vesselsData.map((vessel, index) => (
            <Route key={index} path={`vessel${index + 1}`} element={<VesselsPage vessel={vessel} />} />
          ))}
          <Route path="*" element={<VesselsNotFound />} />
        </Routes>



      
      </Container>
    </BrowserRouter>

  );
}

export default App;
