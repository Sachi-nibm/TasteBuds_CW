import React, {Component} from "react";
import { Link } from "react-router-dom";

class OutletCard extends Component{
    render(){
        return(
            <div className="card" style={{width: "20rem" ,height: "28rem" , marginTop:"20px"}}  >
                <img style = {{height : "15rem"}} src={this.props.outlet.picture} className="card-img-top" 
                    alt="..."
                />
                <div className="card-body" style={{ padding : "10px"}}>
                    <h5 className="card-title">{this.props.outlet.name}</h5>
                        Adress : {this.props.outlet.address}
                        <br/>
                        Loaction : 
                        <br/>
                        Rating : {this.props.outlet.rating}
                    <br/>
                    <br/>
                    <div className="container" style={{ padding : "0px"}}>
                        <div className="raw">
                            <Link to="/foods" className="btn btn-primary">
                                View Foods 
                            </Link>{"  "}
                            <button className="btn btn-success" onClick={this.props.onWishlist}>
                                Favorite
                            </button>{"  "}
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

export default OutletCard