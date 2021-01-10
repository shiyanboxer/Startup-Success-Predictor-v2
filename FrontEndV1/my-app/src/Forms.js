import React, { Component } from "react";
import axios from "axios"
import './App.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';


class Forms extends Component {
    handler(e) {
        e.preventDefault()
        const total_funding = document.getElementById("total_funding").value
        const founded_year = document.getElementById("founded_year").value

        if (total_funding === "" || founded_year === "") {
            alert("Please enter details")
            return
        }

        axios({
            method: "POST",
            url: "https://startup-success-predictor-api.herokuapp.com/predict",
            data: { "total_funding": total_funding, "founded_year": founded_year }
        }).then((response) => {
            const output = response.data
            if (output.response === 1) { document.getElementById("target").innerHTML = "This company will be ... SUCCESSFUL" }
            else { document.getElementById("target").innerHTML = "This company will be ... UNSUCCESSFUL" }
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
                            <input type="number" id="total_funding" placeholder={"Eg. 1500"} className="form-control" />
                            <br />
                            <label className="grey-text">
                                Founding Year
                    </label>
                            <input type="number" id="founded_year" placeholder={"Eg. 2000"} className="form-control" />
                            <br />

                            <div className="text-center mt-4">
                                <MDBBtn color="unique" onClick={this.handler}>
                                    Enter details
                    </MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                    <MDBCol md="6">
                        <MDBCard style={{ width: "22rem" }}>
                            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
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