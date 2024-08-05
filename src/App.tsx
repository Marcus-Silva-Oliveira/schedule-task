import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScheduleScreen from './pages/schedule';
import { NavBar } from './components/navbar';
import { TaskPage } from './pages/task-page';
import Loader from './components/loader';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<ScheduleScreen />} />
        <Route path="task" element={<TaskPage />} />
      </Routes>
      <Loader />
    </BrowserRouter>
  );
}

export default App;
