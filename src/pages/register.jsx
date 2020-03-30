import React,{useState, Fragment} from "react";
import {MDBInput, MDBBtn,MDBAlert} from 'mdbreact';

import {connect} from 'react-redux'
import {RegisterUser,errormessageclear} from './../redux/actions'
import {Redirect} from 'react-router-dom'

const Register = (props) => {
    //login
    const [data,setdata]=useState({
        username:'',
        password:'',
        passwordconfirm: ''
    })
    const onFormSubmit=(e)=>{
        e.preventDefault()
        props.RegisterUser(data)
    }
    const dataOnChange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    
    if(props.isregister){
        return <Redirect to='/'/>
    }
    return (
        <Fragment>
            <div className='d-flex justify-content-center py-5'>
                <div className='d-flex mx-3 px-5 py-4' style={{height:'90vh'}}>
                    <form onSubmit={onFormSubmit}>
                        {/* krn dia form, bisa ada onSubmit(kalau mau dienter) */}
                        <p className="h4 text-center mb-4">NOT A MEMBER ? <br/>SIGN UP</p>
                        <div className="grey-text">
                        <MDBInput
                            label="Type your Username"
                            name='username'
                            onChange={dataOnChange}
                            icon="user"
                            group
                            type="text"
                            validate
                            value={data.username}
                        />
                        <MDBInput
                            label="Type your password"
                            name='password'
                            value={data.password}
                            onChange={dataOnChange}
                            icon="lock"
                            group
                            type="password"
                            validate
                        />
                        <MDBInput
                            label="Confirm your password"
                            name='passwordconfirm'
                            value={data.passwordconfirm}
                            onChange={dataOnChange}
                            icon="exclamation-triangle"
                            group
                            type="password"
                            validate
                        />
                        </div>
                            {
                                props.errormes?
                                <MDBAlert color='danger'>
                                    {props.errormes} <span className='float-right hovererr font-weight-bold' onClick={()=>props.errormessageclear()}>x</span>
                                </MDBAlert>
                                :
                                null
                            }
                            <div className="text-center">
                            <MDBBtn color="grey darken-4" outline type='submit' disabled={props.loading}>Login</MDBBtn>
                        </div>
                        <div className="font-weight-light">
                        </div>
                    </form>
                    <div>   
                    </div>
                </div>
            </div>
        </Fragment>
        );
    };
    const MapstatetoProps=(state)=>{
        return state.Auth
    }
export default connect(MapstatetoProps,{RegisterUser,errormessageclear}) (Register);