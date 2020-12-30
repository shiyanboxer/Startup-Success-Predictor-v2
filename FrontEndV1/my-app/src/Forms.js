import React, { Component } from "react";
import axios from "axios"
import './App.css';

class Forms extends Component {
    handler(e) {
        e.preventDefault()
        const total_funding = document.getElementById("total_funding").value
        const country = document.getElementById("country").value
        const year = document.getElementById("founded_year").value
        
        console.log(total_funding + " " + country + " " + year)
        axios({
            method:"POST",
            url:"http://127.0.0.1:5000/predict",
            data:{"total_funding":total_funding, "country":country, "year":year}
        }).then( (response)=>{
            console.log(response.data)
        })      
    }

    render() {
        return (
        <form className="forms">
            <label>
            Total Funding:
            <input type="text" id="total_funding" />
            </label>
            <label>
            Country:
            <input type="text" id="country" />
            </label>
            <label>
            Founded Year:
            <input type="text" id="founded_year" />
            </label>
            <button className="btn btn-primary"
            
            onClick={this.handler}
        >See Results</button>
        </form>
        );
    }
}
export default Forms;