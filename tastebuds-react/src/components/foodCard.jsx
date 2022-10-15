import React, {Component} from "react";


class FoodCard extends Component{
    render(){
        return(
            <div className="card" style={{width: "20rem" ,height: "28rem" , marginTop:"20px"}}  >
                <img 
                    style = {{ width:"100%", height : "15vw", objectFit: "cover"}}
                    src={this.props.food.picture}    
                    className="card-img-top" 
                    alt="..."
                />
                <div className="card-body" style={{ padding : "10px"}}>
                    <h5 className="card-title">{this.props.food.name}</h5>
                        <p style = {{ overflow: "hidden" ,textOverflow: "ellipsis", display: "block", wordWrap: "break-word", maxHeight: "3.6em", lineHeight: "1.8em" }}>Description : {this.props.food.description}</p>
                        Price : {this.props.food.price}
                        <br/>
                        Rating : {this.props.food.rating}
                    <br/>
                    <br/>
                    <div className="container" style={{ padding : "0px"}}>
                        <div className="raw">
                            <button className="btn btn-outline-primary" onClick={this.props.onView} >
                                View more
                            </button> {"  "}
                            <button className="btn btn-outline-primary" onClick={this.props.onAddToCart}>
                                Add
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

export default FoodCard