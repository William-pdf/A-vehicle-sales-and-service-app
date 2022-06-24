import React, {useState, useEffect}from 'react' ;



function AppointmentList({AppointmentsList}){
    //  getAppointmentData() {
    //   const url = 'http://localhost:8080/api/appointments';
    //   const response = await fetch(url);
    //   if (response.ok) {
    //     const data = await response.json();
    //     await this.setState({appointments: data.appointments})
    //     console.log("state is here from get appointment data", this.state);
    //   }
    // }

    //  componentDidMount() {
    //   this.getAppointmentData()
    //   // This allows the page to respond quicker

    // }

    //  cancelAppointment(event) {
    //   console.log(event);
    //   const id = event.target.value;
    //   const appointmentUrl = `http://localhost:8080/api/appointments/${id}`
    //   const fetchConfig = {method: "DELETE"};
    //   const response = await fetch (appointmentUrl, fetchConfig);
    //   this.getAppointmentData();
    // }

    //  updateAppointment(event) {
    //   console.log(event);
    //   const id = event.target.value;
    //   const appointmentUrl = `http://localhost:8080/api/appointments/status/${id}/`
    //   const fetchConfig = {method: "put"};
    //   const response = await fetch (appointmentUrl, fetchConfig);
    //   if (response.ok) {
    //     const data = await response.json();
    //     this.getAppointmentData()
    //   }
    // }

      return (
        <table className="table table-striped">
                <thead>
                   <tr>
                     <th>Vin</th>
                     <th>Customer Name</th>
                     <th>Date</th>
                     <th>Time</th>
                     <th>Technician</th>
                     <th>Reason</th>
                   </tr>
                 </thead>
                 <tbody>
                   {AppointmentsList && AppointmentsList.map(appointment => {
                    return (
                      <tr key={appointment.id}>
                        <td>{ appointment.automobile.vin }</td>
                        <td>{ appointment.customer_name }</td>
                        <td>{ appointment.date}</td>
                        <td>{ appointment.time}</td>
                        <td>{ appointment.assigned_technician.name}</td>
                        <td>{ appointment.reason }</td>
                        {/* <td>
                        <button  value={appointment.id} onClick={this.cancelAppointment} type="button" className="btn btn-danger">Cancel</button>
                        <button value={appointment.id} onClick={this.updateAppointment} type="button" className="btn btn-success">Finished</button>
                        </td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
      )
    }

export default AppointmentList;