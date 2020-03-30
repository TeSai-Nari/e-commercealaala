import React, {Fragment} from 'react'
import './../App.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer=()=>{
    return (
        <Fragment>
            <MDBFooter className="font-small pt-4">
                <MDBContainer fluid className="black-text text-md-left">
                    <MDBRow className='px-4'>
                        <MDBCol md="3">
                        <h5 className="title font-weight-bold">OUR COMPANY</h5>
                            <ul>
                            <li className="list-unstyled">
                                <a href="/about-us">ABOUT US</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/about-us">TERMS OF USE</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/about-us">PRIVACY POLICY</a>
                            </li>
                            </ul>
                        </MDBCol>
                        <MDBCol md="3">
                            <h5 className="title font-weight-bold">CUSTOMER SERVICE</h5>
                            <ul>
                            <li className="list-unstyled">
                                <a href="#!">CONTACT US</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">SHIPPING POLICY</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">RETURNS &amp; EXCHANGE</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">TERMS &amp; CONDITIONS</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">COUNTERFEIT POLICY</a>
                            </li>
                            </ul>
                        </MDBCol>
                        <MDBCol md="3">
                            <h5 className="title font-weight-bold">ACCOUNT</h5>
                            <ul>
                            <li className="list-unstyled">
                                <a href="#!">ACCOUNT OVERVIEW</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">MY ORDERS</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">MY FAVORITES</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">SHIPPING &amp; BILLINGS</a>
                            </li>
                            </ul>
                        </MDBCol>
                        <MDBCol md="3">
                        <h5 className="title font-weight-bold">RESOURCES</h5>
                        <ul>
                        <li className="list-unstyled">
                            <a href="#!">FIND A GALLERY</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">EXPLORE OUR PRODUCTS</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">REQUEST A SOURCEBOOK</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">PT MEMBERS PROGRAM</a>
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