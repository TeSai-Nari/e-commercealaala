import React, {Component, Fragment} from 'react'
import './../App.css';
// import {MDBLink} from 'mdbreact'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer=()=>{
    return (
        <Fragment>
            <MDBFooter className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center black-text text-md-center">
                    <MDBRow>
                    <MDBCol md="4">
                    <h5 className="title font-weight-bold">OUR COMPANY</h5>
                        <ul>
                        <li className="list-unstyled">
                            <a href="/about-us">About Us</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="/about-us">Terms of Use</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="/about-us">Privacy Policy</a>
                        </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="4">
                        <h5 className="title font-weight-bold">CUSTOMER SERVICE</h5>
                        <ul>
                        <li className="list-unstyled">
                            <a href="#!">Contact Us</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Shipping Policy</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Returns and Exchange</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Terms and Conditions</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Counterfeit Policy</a>
                        </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="4">
                        <h5 className="title font-weight-bold">ACCOUNT</h5>
                        <ul>
                        <li className="list-unstyled">
                            <a href="#!">Account Overview</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">My Orders</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">My Favorites</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Shipping and Billing</a>
                        </li>
                        </ul>
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBFooter>
        </Fragment>
    )
}

export default Footer