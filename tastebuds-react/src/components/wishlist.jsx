import React, { Component } from 'react';

class Wishlist extends Component {

  render() {
    return (
      <div className="card" style={{width: "15rem" ,height: "20rem" , marginTop:"20px"}}  >
                <img style = {{height : "15rem"}} src={this.props.list.imgPath} className="card-img-top" 
                    alt="..."
                />
                <div className="card-body" style={{ padding : "10px"}}>
                    <h5 className="card-title">{this.props.list.name}</h5>
                    <br/>
                    <div className="container" style={{ padding : "0px"}}>
                        <div className="raw">
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

export default Wishlist;
