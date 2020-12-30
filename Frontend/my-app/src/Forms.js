import React, { Component } from "react";
import './App.css';

class Forms extends Component {
    render() {
        return (
        <form className="forms">
            <label>
            Total Funding:
            <input type="text" name="total_funding" />
            </label>
            <label>
            Country:
            <input type="text" name="country" />
            </label>
            <label>
            Founded Year:
            <input type="text" name="founded_year" />
            </label>
            <input className="button"
            type="submit" 
            value="See Results"
        />
        </form>
        );
    }
}
export default Forms;