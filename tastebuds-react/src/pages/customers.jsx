import React, { Component } from "react";


class Customers extends Component {
    state = {};
    render() {
        return (
            <div>
                <div className="card" style={{ marginLeft: "10%", marginTop: "20px", width: "800px", height: "50px" }} >
                    <div className="row align-items-center" style={{ marginLeft: "5px", width: "800px", height: "50px" }}>
                        <div className="col">
                            Username : {this.props.customer.name}
                        </div>
                        <div className="col">
                            Email :  {this.props.customer.email}
                        </div>
                        <div className="col">
                            <button className="btn btn-info" onClick={this.props.onView}>
                                Info
                            </button> {" "}
                            <button className="btn btn-success" >
                                Update
                            </button> {"  "}
                            <button className="btn btn-danger" onClick={this.props.onDelete}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Customers
