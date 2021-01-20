import React, {Component} from "react";
import axios from "axios"
import './App.css';
import {MDBContainer, MDBRow, MDBCol, MDBBtn} from 'mdbreact';
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText} from 'mdbreact';


// TODO: 
// - Do not use document.getElementById
// - Move the api url to be an environment variable, rather then hard coding it
// https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa
// Use react hooks https://gist.github.com/kirkbyo/27cd20a0ed3bc139ff36457d4c7797f0

class Forms extends Component {

    // Handler function that gets form input by ID and assigns it to variables, makes sure input is valid, send request and receives a response that's displayed onscreen  
    handler() {
        const total_funding = document.getElementById("total_funding").value
        const founded_year = document.getElementById("founded_year").value
        
        // User must input values in both fields before submitting or a message will pop up 
        if (total_funding === "" || founded_year === "") {
            alert("Please enter details")
            return
        }

        // Send requests to API ("data", a dictionary which contain user's total_funding and founding year)
        axios({
            method: "POST",
            // Run locally http://127.0.0.1:5000/predict
            // Run via Heroku https://startup-success-predictor-api.herokuapp.com/predict
            // url: "http://127.0.0.1:5000/predict", 
            // url: "process.env.REACT_APP_PREDICT",
            url: "https://startup-success-predictor-api.herokuapp.com/predict",
            data: {"total_funding": total_funding, "founded_year": founded_year}
        
        //  Receive a response either 0 or 1 and display the results on screen 
        }).then((response) => {
            const output = response.data
            // If response is 1, print SUCCESSFUL, else print UNSUCCESSFUL
            if (output.response === 1) {
                // The id "taget" is in the Cards component, which is where the results will be shown 
                document.getElementById("target").innerHTML = "This company will be ... SUCCESSFUL"
            } else {
                document.getElementById("target").innerHTML = "This company will be ... UNSUCCESSFUL"
            }
        })
    }

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <form>
                            <p className="h4 text-center mb-4">Enter company info</p>
                            <label className="grey-text">
                                Total Funding
                            </label>
                            {/* Get info by id */}
                            <input type="number" id="total_funding" placeholder={"Eg. 1500"} className="form-control"/>
                            <br/>
                            <label className="grey-text">
                                Founding Year
                            </label>
                            <input type="number" id="founded_year" placeholder={"Eg. 2000"} className="form-control"/>
                            <br/>

                            <div className="text-center mt-4">
                                <MDBBtn color="unique" onClick={this.handler}>
                                    Enter details
                                </MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                    <MDBCol md="6">
                        <MDBCard style={{width: "22rem"}}>
                            <MDBCardImage className="img-fluid"
                                          src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves/>
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                {/* Display results in Card */}
                                <MDBCardText id="target">
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default Forms;