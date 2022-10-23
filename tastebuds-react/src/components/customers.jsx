import React, { Component } from "react";

class Customers extends Component{
    render(){
        return(
            <div>
                <div className="card" style={{ marginLeft: "5%", marginTop: "30px", width: "1000px", height: "50px" }} >
                    <div className="row align-items-center" style={{padding:"0px", marginLeft: "5px", width: "1000px", height: "50px" }}>
                        <div className="col">
                            Username : {this.props.customer.name}
                        </div>
                        <div className="col">
                            Email : {this.props.customer.email}
                        </div>
                        <div className="col">
                            Created date : {this.props.customer.date}
                        </div>
                        <div className="col">
                            <button className="btn btn-primary" onClick={this.props.onView}>
                                Info
                            </button> {"  "}
                            <button className="btn btn-danger" onClick={this.props.onDelete}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Customers