import axios from "axios";
import React, { Component } from "react";
import Customers from "../components/customers";

class Customer extends Component {
    state = {
        allCustomers: [],
    };
    render() {
        return (
            <div className="container">
                <h1 style={{ marginLeft: "10%", marginTop: "50px" }}>Registerd User Details</h1>
                <div className="row">
                    {this.state.allCustomers.map((customer) => (
                        <div key={customer.id} className="col">
                            <Customers key={customer} customer={customer}
                                onDelete={() => this.deleteCustomer(customer.id)}
                                onView={() => this.viewOneCustomer(customer.id)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    async componentDidMount() {
        const { data } = await axios.get("http://localhost:4000/api/users");
        let customers = data.map((customer) => {
            return {
                id: customer._id,
                name: customer.name,
                email: customer.email,
                password: customer.password,
                isAdmin: customer.isAdmin,
                date: customer.date,
            };
        });
        this.setState({ allCustomers: customers });
    }

    async deleteCustomer(id) {
        await axios.delete(`http://localhost:4000/api/users/${id}`)
        let updatedCustomer = this.state.allCustomers.filter(customer => customer.id !== id)
        this.setState({ allCustomers: updatedCustomer });
    }

    async viewOneCustomer(id) {
        await axios.get(`http://localhost:4000/api/users/${id}`)
        let viewCustomer = this.state.allCustomers.filter(customer => customer.id === id)
        this.setState({ allCustomers: viewCustomer });
    }
}

export default Customer;
