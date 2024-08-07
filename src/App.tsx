import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScheduleScreen from './pages/schedule';
import { NavBar } from './components/navbar';
import { TaskPage } from './pages/task-page';
import Loader from './components/loader';
import { DatePickerComponent } from './components/datepicker';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          index
          path="scheduleScreen"
          element={
            <>
              <ScheduleScreen />
              <DatePickerComponent />
            </>
          }
        />
        <Route path="task" element={<TaskPage />} />
      </Routes>
      <Loader />
    </BrowserRouter>
  );
}

export default App;
