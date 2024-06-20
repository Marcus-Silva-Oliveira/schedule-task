// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {NavBar} from './components/navbar';
// import {Home} from './pages/home';
// import {About} from './pages/about';

import { NavBar } from "./components/Navbar/Navbar";

function App() {
  return (
    // <BrowserRouter>
    //   <NavBar />
    //     <Routes>
    //       <Route index element={<Home />} />
    //       <Route path="about" element={<About />} />
    //     </Routes>
    // </BrowserRouter>
    <NavBar />
  );
}

export default App;
