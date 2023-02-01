import React from 'react';
import "../Authentication/LogIn.css"
import {
    MDBContainer, MDBCheckbox, MDBCard, MDBCardBody, MDBRow, MDBCol, MDBInput
} from 'mdb-react-ui-kit';

function LogIn() {
    return (
        <MDBContainer className="my-8">
            <MDBCard>
                <MDBRow className='g-0'>
                    <MDBCol md='6'>
                        <MDBCardBody className='d-flex flex-column'>

                            <div className='d-flex flex-row mt-2'>
                                <h1 className="h1">Sign In</h1>
                            </div>
                            <label>Email address</label>
                            <MDBInput wrapperClass='mb-4' id='formControlLg' placeholder='user@medical.com' type='email' size="lg" />
                            <label>Password</label>
                            <MDBInput wrapperClass='mb-4' id='formControlLg' placeholder='Password' type='password' size="lg" />
                            <div className="d-flex justify-content-between mx-4 mb-4">
                                <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='Remember me' />
                                <a href="!#">Forgot password?</a>
                            </div>
                            <a href="/Login" className="btn btn-primary" size=''>Login</a>
                        </MDBCardBody>
                    </MDBCol>
                    <br/>
                    <MDBCol className='d-flex flex-column' md='6'>
                        <div className="d-flex" md="2"><p>Don’t have an account but want HIPAA compliant faxing today?</p>
                        </div>
                        <a href="/Register" className='btn btn-primary' style={{ textAlign:"center"}} size=''>Create a free account</a>
                    </MDBCol>
                </MDBRow>
            </MDBCard>

        </MDBContainer>
    );
}

export default LogIn;