// File Name - oredr.jsx
// File Desc - oredr.jsx
// Create By - Sachini Perera - 08/10/2022
import React, { Component } from 'react';

class Order extends Component {

  render() {
    return (
      <tr scope="row">
        <td>
          <img
            className="img-fluid"
            style={{ width: "5rem" }}
            src={this.props.item.imagePath}
            alt =""
          />
        </td>
        <td>{this.props.item.title}</td>
        <td>{this.props.item.quntity}</td>
        <td>
          Rs. {this.props.item.price} <span className="close"></span>
        </td>
        <td>
          <button className="btn btn-danger" onClick={this.props.onDelete}>
            Remove
          </button>
        </td>
      </tr>
    );
  }
}

export default Order;
