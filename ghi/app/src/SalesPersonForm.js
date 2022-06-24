import React from 'react';

class SalesPersonForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            employeeId: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmployeeNumber = this.handleChangeEmployeeNumber.bind(this);
    }

    render() {
        return (
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">Create an Sales Person</h1>
                <form onSubmit={this.handleSubmit} id='create-salesperson-form'>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleChangeName} name='name' requiredtype='text' id='name' className='form-control' />
                        <label htmlFor='name'>Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleChangeEmployeeNumber} name='employeenumber' type='text' id='employeenumber' className='form-control' />
                        <label htmlFor='employeenumber'>Employee Number</label>
                    </div>
                    <button className="btn btn-primary">Add SalesPerson</button>
                </form>
            </div>
        );
    }
}
export default SalesPersonForm;