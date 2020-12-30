import React, { Component } from "react";
import './App.css';
import axios from "axios";

class Forms extends Component {
  // handelExtract(){
  //   axios({
  //       method: "POST",
  //       url:"http://127.0.0.1:5000/predict"
  //     }).then((response)=>{
  //       if(response.data.is_error)
  //       {
  //           alert(response.data.error_message)
  //           return
  //       }
  //       else
  //       {
  //           const data = response.data
  //           console.log(data.all_data)
  //           this.setState({displayPie:true, pieData:data.result_list, togglePie:!this.state.togglePie,tableData:data.all_data})
  //       }
  //     }).catch((error)=>{                                                
  //       alert(error.message + " has occured")
  //    }) 
  // }

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