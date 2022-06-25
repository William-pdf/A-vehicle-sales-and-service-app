import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Car go vroom!</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <NavLink className="nav-link" to="/vehicles/manufacturers">Manufacturers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/vehicles/manufacturers/new">Add New Manufacturer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="vehicles/models">Vehicle Models</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="vehicles/new/model">Add New Vehicle Model</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/vehicles/automobiles/list">Automobiles</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/vehicles/automobiles/new">Add New Automobile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales/salesperson/new">Add New Salesperson</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services/technicians">Add New Technician</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales/customer/new">Add New Customer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="services/appointments">Book a service appointment</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="services/appointments/list">Appointment List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="services/history">Service History</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/sales/salesrecord/new">Sales History</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/sales/salesrecordlist">Add New Sale</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
