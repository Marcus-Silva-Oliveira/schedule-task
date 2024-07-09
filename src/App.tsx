// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/navbar/navbar';
import { TaskComponent } from './components/task/task';
// import ScheduleScreen from './pages/schedule/schedule';
// import TaskScreen from './pages/task/task';

// import { TaskScreen } from './pages/task/task';

function App() {
  return (
    // <BrowserRouter>
    //   <NavBar />
    //   <Routes>
    //     <Route index element={<ScheduleScreen />} />
    //     <Route path="about" element={<TaskScreen />} />
    //   </Routes>
    // </BrowserRouter>
    <>
      <NavBar />
      <TaskComponent Title="Lucas Lopes" id={1} />
      <TaskComponent Title="Marcus" id={2} />
      <TaskComponent Title="Marcus" id={3} />
      <TaskComponent Title="Luana" id={4} />
    </>
  );
}

export default App;
