function AutomobilesList({Automobiles}) {
    console.log("automobiles list form",);
    return (
      <>
      <h1> Autos list babyyyyy</h1>
        <table className="table table-striped">
        <thead>
          <tr>
            <th>Vin</th>
          </tr>
        </thead>
        <tbody>
          {Automobiles && Automobiles
          .map(automobile => {
            return (
              <tr key={automobile.href}>
                <td>{ automobile.vin }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </>
    )
}

export default AutomobilesList;