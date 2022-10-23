import React, { Component } from "react";
import AdminOutlet from '../components/adminOutlet'
import axios from 'axios'

class AdminOutlets extends Component{
    state = {
        allOutlets: [],
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    {this.state.allOutlets.map((outlet) => (
                        <div key={outlet.id} className="col">
                            <AdminOutlet 
                                key={outlet.id} 
                                outlet= {outlet} 
                                onDelete = {() => this.deleteOutlet(outlet.id)}
                            />
                        </div>
                    ))} 
                </div> 
            </div>
        )
    }

    async componentDidMount() {
        const { data } = await axios.get("http://localhost:4000/api/admin/outlets");
        let oultets = data.map((outlet) => {
            return {
                id : outlet._id,
                outletID : outlet.outletID ,
                name : outlet.name,
                address : outlet.address,
                rating : outlet.rating,
                picture : outlet.picture
            };
        });
        this.setState({allOutlets : oultets})
    }

    async deleteOutlet(id){
        await axios.delete(`http://localhost:4000/api/admin/outlets/${id}`, {
            headers : {
                "x-jwt-token" : localStorage.getItem("token")
            }
        }
        )
        let updatedOutlet = this.state.allOutlets.filter(outlet => outlet.id !== id)
        this.setState({allOutlets : updatedOutlet });
    }
}

export default AdminOutlets