import React, {useState, useEffect}from 'react' ;



function AppointmentList({AppointmentsList}){

  const cancel = async (event) => {
    console.log(event.currentTarget.id)
    const idvalue = event.currentTarget.id;
    const url = `http://localhost:8080/api/services/reject/${idvalue}/`
    const fetchConfig = {
      method: "put",
      headers: {"Content-Type": "application/json"}
    }
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      console.log({"second": "cancelled appointment"})
    } else {
      console.log({"third": "you failed"})
    }
  } 

  const finished = async (event) => {
    console.log(event.currentTarget.id)
    const idvalue = event.currentTarget.id;
    const url = `http://localhost:8080/api/services/finished/${idvalue}/`
    const fetchConfig = {
      method: "put",
      headers: {"Content-Type": "application/json"}
    }
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      console.log({"second": "completed appointment"})
    } else {
      console.log({"third": "you failed"})
    }
  }
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
                        <td><button onClick={cancel} id={appointment.id} key={appointment.id}>Cancel</button></td>
                        <td><button onClick={finished} id={appointment.id} key={appointment.id}>Complete</button></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
      )
    }

export default AppointmentList;