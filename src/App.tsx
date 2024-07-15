import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScheduleScreen from './pages/schedule/schedule';
import { NavBar } from './components/navbar/navbar';
import { TaskPage } from './pages/task-page/taskpage';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<ScheduleScreen />} />
        <Route path="about" element={<TaskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
