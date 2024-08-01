import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScheduleScreen from './pages/schedule';
import { NavBar } from './components/navbar';
import { TaskPage } from './pages/task-page';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index path="scheduleScreen" element={<ScheduleScreen />} />
        <Route path="task" element={<TaskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
