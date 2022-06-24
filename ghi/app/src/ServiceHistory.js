import React, { useEffect, useState } from 'react'

export default function ServiceHistory({ AppointmentsList }) {
    const [search, setSearch] = useState("");
    useEffect(() => { }, [])
    return (
        <>
            <h1>
                Service Filtered By VIN NUMBER
            </h1>
            <div className="container">
                <div className="row">
                    <form id="form_search" name="form_search" method="get" action="" className="form-inline">
                        <div className="form-group">
                            <div className="input-group">
                                <input onChange={event => setSearch(event.target.value)} className="form-control" type="text" placeholder="Search By VIN NUMBER" />
                            </div>
                        </div>
                    </form>
                </div>
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
                        {AppointmentsList && AppointmentsList
                            .filter(appointment => appointment.automobile.vin.includes(search))
                            .map(appointment => {
                                return (
                                    <tr key={appointment.id}>
                                        <td>{appointment.automobile.vin}</td>
                                        <td>{appointment.customer_name}</td>
                                        <td>{appointment.date}</td>
                                        <td>{appointment.time}</td>
                                        <td>{appointment.assigned_technician.name}</td>
                                        <td>{appointment.reason}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

