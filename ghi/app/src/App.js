import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import React from 'react'
import Nav from './Nav';
import VehicleModelForm from './VehicleModelForm';
import VehicleManufacturerForm from './VehicleManufacturerForm';
import VehicleList from './VehicleModelList';
import VehicleManufacturersList from './VehicleManufacturersList';
import AutomobileForm from './AutomobileForm';
import AutomobilesList from './AutomobileList';
import ServiceAppointmentForm from './ServiceAppointmentForm';
//import ServiceHistory from './ServiceHistory';
import TechnicianForm from './TechnicianForm';
import AppointmentList from './AppointmentList';
import ServiceHistory from './ServiceHistory';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  async componentDidMount() {
    Promise.all([
      fetch('http://localhost:8080/api/appointments/'),
    ])
      .then(
        ([appointments]) => {
          return Promise.all([
            appointments.json()
          ])
        })
      .then(
        ([appointments]) => {
          this.setState(appointments)
        });
  }
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="new/model" element={<VehicleModelForm />} />
            {/* <Route index path="list/models" element={<VehicleList vehicles={props.vehicles} />} /> */}
            <Route path="/vehicles">
              {/* <Route path="/vehicles/manufacturers/new" element={<VehicleManufacturerForm />} /> */}
              {/* <Route path="/vehicles/manufacturers" element={<VehicleManufacturersList manufacturers={props.manufacturers} />} /> */}
              <Route path="/vehicles/automobiles/new" element={<AutomobileForm />} />
              {/* <Route path="/vehicles/automobiles/list" element={<AutomobilesList automobiles={props.automobiles} />} /> */}
            </Route>
            <Route path="services/">
              <Route path="technicians/" element={<TechnicianForm />} />
              <Route path="history/" element={<ServiceHistory AppointmentsList={this.state.appointments} /> } />
              <Route path="appointments/" element={<ServiceAppointmentForm />} />
              <Route path="appointments/list" element={<AppointmentList AppointmentsList={this.state.appointments} />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
