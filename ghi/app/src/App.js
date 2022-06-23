import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ServiceAppointmentForm from './ServiceAppointmentForm';
import ServiceHistory from './ServiceHistory';
import TechnicianForm from './TechnicianForm';
import AppointmentList from './AppointmentList';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/services">
            <Route path="technicians/" element={<TechnicianForm />} />
            <Route path="appointments/" element={<ServiceAppointmentForm />} />
            <Route path="appointments/list" element={<AppointmentList appointments={props.appointments}/>} />
            <Route path="history/" element={<ServiceHistory />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
