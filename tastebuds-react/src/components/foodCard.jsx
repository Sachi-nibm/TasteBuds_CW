import React, {Component} from "react";
import { Link } from "react-router-dom";

class FoodCard extends Component{
    render(){
        return(
            <div className="card" style={{width: "20rem" ,height: "28rem" , marginTop:"20px"}}  >
                <img 
                    style = {{height : "15rem"}}
                    src={this.props.food.picture}    
                    className="card-img-top" 
                    alt="..."
                />
                <div className="card-body" style={{ padding : "10px"}}>
                    <h5 className="card-title">{this.props.food.name}</h5>
                        Description : {this.props.food.description}
                        <br/>
                        Price : {this.props.food.price}
                        <br/>
                        Rating : {this.props.outlet.rating}
                    <br/>
                    <br/>
                    <div className="container" style={{ padding : "0px"}}>
                        <div className="raw">
                            <Link to="/foods" className="btn btn-primary" onClick={this.props.onView} >
                                View
                            </Link>
                            {" "}
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

export default FoodCard