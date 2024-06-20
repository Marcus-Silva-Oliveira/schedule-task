import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/navbar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<></>} />
        <Route path="about" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
