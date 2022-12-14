import React, {Component} from "react";
import { Link } from "react-router-dom";

class OutletCard extends Component{
    render(){
        return(
            <div className="card" style={{width: "20rem" ,height: "28rem" , marginTop:"20px"}}  >
                <img style = {{ width:"100%", height : "250px", objectFit: "cover"}}
                src={this.props.outlet.picture} className="card-img-top" 
                    alt="..."
                />
                <div className="card-body" style={{ padding : "10px"}}>
                    <h5 className="card-title">{this.props.outlet.name}</h5>
                        Adress : {this.props.outlet.address}
                        <br/>
                        Rating : {this.props.outlet.rating}
                    <br/>
                    <br/>
                    <div className="container" >
                        <div className="raw">
                            <Link to={`/outlets/${this.props.outlet.id}`}  className="btn btn-primary" 
                            style={{width: "85px"}}>
                                View
                            </Link>{" "}
                            <Link to={`/updateoutlets/${this.props.outlet.id}`}  className="btn btn-success" style={{width: "85px"}} >
                                Edit
                            </Link>{" "}
                            <button className="btn btn-danger" style={{width: "85px"}} onClick={this.props.onDelete}>
                                Delete
                            </button>
                        </div>
                        
                    </div>   
                </div>
            </div>
        )
    }
}

export default OutletCard