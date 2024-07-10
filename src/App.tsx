import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScheduleScreen from './pages/schedule/schedule';
import TaskScreen from './pages/task/task';
import { NavBar } from './components/Navbar/navbar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<ScheduleScreen />} />
        <Route path="about" element={<TaskScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
