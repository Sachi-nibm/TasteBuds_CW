import React, { Component } from 'react';
import CartRow from "../components/wishlist";
import axios from "axios";

class Wishlists extends Component {
  state = {
    allWishlist: [],
  };
  render() {
    return (
      <div className="col d-flex justify-content-center">
        <div className="row" style={{ width: "45rem" }}>
         <h1>Wishlist</h1>
              {this.state.allWishlist.map((list) => (
                <div key = {list.id} className = "col">
                <CartRow
                  key={list.id}
                  list={list}
                  onDelete={() => this.deleteItem(list.id)}
                />
                 </div>
              ))}
          <br></br>
        </div>
      </div>
    );
  }
  
  async componentDidMount() {
    const id = localStorage.getItem("userId");
    const { data } = await axios.get(`http://localhost:4000/api/wishlists/${id}`);
    let lists = data.map((list) => {
      return{	
        id :  list.id,	
        itemID: list.itemID,	
        name: list.name,	
        imgPath: list.imgPath,
      };
    });
    this.setState({ allWishlist: lists });
  }

  async deleteItem(id) {
      await axios.delete(`http://localhost:4000/api/wishlists/${id}`);	
      let updatedallWishlist = this.state.allWishlist.filter(list => list.id !== id);	
      this.setState({ allWishlist: updatedallWishlist });
  }
}

export default Wishlists;

