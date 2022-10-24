// File Name - order.jsx
// File Desc - order Component
// Created By - Sachini Perera - 08/10/2022
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
        <td>{this.props.item.quantity}</td>
        <td>
          Rs. {this.props.item.price}.00 <span className="close"></span>
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
