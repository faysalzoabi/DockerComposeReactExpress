import React, { Component } from 'react'

class Customers extends Component {
    
    state = {
        customers:[]
    };

    componentDidMount() {
        fetch('/api/customers')
            .then(res => res.json())
            .then(customers => this.setState({customers:customers}, () => {
                console.log('customers fetched', customers)
            }))
     }

    render() {
        return (
            <div>
                <h2>Customers</h2>
                <ul>
                    {this.state.customers.length > 0 ? (
                       this.state.customers.map(customer => {
                           return <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
                       })
                    ): ('loading....')}
                </ul>
            </div>
        )
    }
}

export default Customers
