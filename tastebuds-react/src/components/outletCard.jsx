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
                        Rating : {this.props.outlet.rating}
                    <br/>
                    <br/>
                    <div className="container" >
                        <div className="raw">
                            <Link to={`/foodview/${this.props.outlet.id}`}  className="btn btn-primary">
                                View
                            </Link>{" "}
                            <Link to="/foods" className="btn btn-success">
                                Buy 
                            </Link>{"  "}
                            <button className="btn btn-secondary" onClick={this.props.onWishlist}>
                                Favorite
                            </button>{"  "}
                            <button className="btn btn-info" onClick={this.props.onView}>
                                More
                            </button>
                        </div>   
                    </div>   
                </div>
            </div>
        )
    }
}

export default OutletCard