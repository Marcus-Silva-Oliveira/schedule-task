import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/navbar/navbar';
import ScheduleScreen from './pages/schedule/schedule';
import TaskScreen from './pages/task/task';

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
