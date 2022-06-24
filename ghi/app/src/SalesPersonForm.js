import React from 'react';


class SalesPersonForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            employee_number: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmployeeNumber = this.handleChangeEmployeeNumber.bind(this);
    }
}

