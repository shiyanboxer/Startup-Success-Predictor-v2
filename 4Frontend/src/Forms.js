import React, { useState } from "react";
import axios from "axios";
import './App.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';

const Forms = () => {
    const [totalFunding, setTotalFunding] = useState('');
    const [foundedYear, setFoundedYear] = useState('');
    const [result, setResult] = useState('');

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };

    const handleSubmit = async () => {
        if (!totalFunding || !foundedYear) {
            alert("Please enter details");
            return;
        }

        try {
            const response = await axios.post("https://startup-success-predictor-api.herokuapp.com/predict", {
                total_funding: totalFunding,
                founded_year: foundedYear
            });
            setResult(response.data.response === 1 ? "This company will be ... SUCCESSFUL" : "This company will be ... UNSUCCESSFUL");
        } catch (error) {
            console.error("Error in submitting form:", error);
        }
    };

    return (
        <MDBContainer style={{ marginTop: '100px' }}>
            <MDBRow>
                <MDBCol md="6">
                    <form>
                        <p className="h4 text-center mb-4">Enter company info</p>
                        <label className="h4 grey-text">Total Funding</label>
                        <input
                            type="number"
                            id="total_funding"
                            placeholder="Eg. 1500"
                            className="form-control"
                            value={totalFunding}
                            onChange={(e) => handleInputChange(e, setTotalFunding)}
                        />
                        <br />
                        <label className="h4 grey-text">Founding Year</label>
                        <input
                            type="number"
                            id="founded_year"
                            placeholder="Eg. 2000"
                            className="form-control"
                            value={foundedYear}
                            onChange={(e) => handleInputChange(e, setFoundedYear)}
                        />
                        <br />
                        <div className="text-center mt-4">
                            <MDBBtn color="light" rippleColor="dark" onClick={handleSubmit}>
                                Enter details
                            </MDBBtn>
                        </div>
                    </form>
                </MDBCol>
                <MDBCol md="6">
                    <img
                        src="/graphic.png"
                        className='img-fluid'
                        alt='...'
                    />
                    <MDBCardBody>
                        <MDBCardText id="target">
                            {result}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Forms;