import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import React from 'react'
import Nav from './Nav';
import VehicleModelForm from './VehicleModelForm';
import VehicleManufacturerForm from './VehicleManufacturerForm';
import VehicleManufacturersList from './VehicleManufacturersList';
import AutomobileForm from './AutomobileForm';
import AutomobilesList from './AutomobileList';
import ServiceAppointmentForm from './ServiceAppointmentForm';
import SalesPersonForm from './SalesPersonForm';
import SalesRecordForm from './SalesRecordForm';
import SalesRecordList from './SalesRecordList';
import CustomerForm from './CustomerForm';
import TechnicianForm from './TechnicianForm';
import AppointmentList from './AppointmentList';
import ServiceHistory from './ServiceHistory';
import VehicleModelList from './VehicleModelList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  async componentDidMount() {
    Promise.all([
      fetch('http://localhost:8080/api/appointments/'),
      fetch('http://localhost:8100/api/automobiles/'),
      fetch('http://localhost:8100/api/manufacturers'),
      fetch('http://localhost:8100/api/models'),
      fetch('http://localhost:8100/api/salesrecords'),
      
    ])
      .then(

        ([appointments, autos, ManufacturerList, VehicleModelList, salesrecords]) => {
          return Promise.all([
            appointments.json(),
            autos.json(),
            ManufacturerList.json(),
            VehicleModelList.json(),
            salesrecords.json(),
          ])
        })
      .then(
        ([appointments, autos, ManufacturerList, VehicleModelList, salesrecords]) => {
          this.setState(appointments)
          this.setState(autos)
          this.setState(ManufacturerList)
          this.setState(VehicleModelList)
          this.setState(salesrecords)
        });
  }
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/vehicles">
              <Route path="/vehicles/manufacturers/new" element={<VehicleManufacturerForm />} />
              <Route path="/vehicles/automobiles/list" element={<AutomobilesList Automobiles={this.state.autos} />} />
              <Route path="/vehicles/automobiles/new" element={<AutomobileForm />} />
              <Route path="new/model" element={<VehicleModelForm />} />
              <Route path="models/" element={<VehicleModelList autos={this.state.VehicleModelList} />} />
              <Route path="manufacturers/" element={<VehicleManufacturersList ManufacturerList={this.state.manufacturers} />} />
            </Route>
            <Route path="services/">
              <Route path="technicians/" element={<TechnicianForm />} />
              <Route path="history/" element={<ServiceHistory AppointmentsList={this.state.appointments} />} />
              <Route path="appointments/" element={<ServiceAppointmentForm />} />
              <Route path="appointments/list" element={<AppointmentList AppointmentsList={this.state.appointments} />} />
            </Route>
            <Route path="sales/">
              <Route path="salesperson/new/" element={<SalesPersonForm />} />
              <Route path="salesrecord/new" element={<SalesRecordForm sales_record={this.state.salesrecords} />} />
              <Route path="salesrecordlist/" element={<SalesRecordList sales_record={this.state.salesrecords} />} />
              <Route path="customer/new/" element={<CustomerForm />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
