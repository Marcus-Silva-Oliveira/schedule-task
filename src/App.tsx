import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScheduleScreen from './pages/schedule';
import { NavBar } from './components/navbar';
import { TaskPage } from './pages/taskpage';
import { DatePickerComponent } from './components/datepicker';
import LoaderComponent from './components/loader';
import { GenericModals } from './components/modal/generic';

function App() {
  return (
    <BrowserRouter>
      <GenericModals />
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
      <LoaderComponent />
    </BrowserRouter>
  );
}

export default App;
