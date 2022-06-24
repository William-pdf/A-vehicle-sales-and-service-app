import React from "react";

function VehicleManufacturersList({ManufacturerList}) {
    return (
        <div className="container">
          <h2 className="display-5 fw-bold">Vehicle Manufacturers</h2>
          <div className="row">
            {ManufacturerList && ManufacturerList.map(manufacturer => {
              return (
                <div key={manufacturer.id} className="col">
                  <div className="card mb-3 shadow">
                    <div className="card-body">
                      <h5 className="card-title">{manufacturer.name}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    
export default VehicleManufacturersList;