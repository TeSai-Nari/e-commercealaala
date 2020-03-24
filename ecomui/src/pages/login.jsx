import React,{useState, Fragment} from "react";
import {MDBInput, MDBBtn,MDBAlert} from 'mdbreact';

import {connect} from 'react-redux'
import {LoginUser,errormessageclear} from './../redux/actions'
import {Redirect} from 'react-router-dom'

const Login = (props) => {
    //login
    const [data,setdata]=useState({
        username:'',
        password:''
    })
    const onFormSubmit=(e)=>{
        e.preventDefault()
        props.LoginUser(data)
    }
    const dataOnChange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    
    if(props.islogin){
        return <Redirect to='/'/>
    }
    return (
        <Fragment>
            <div className='d-flex justify-content-center py-5'>
                <div className='d-flex mx-3 px-5 py-4' style={{height:'90vh'}}>
                    <form onSubmit={onFormSubmit}>
                        {/* krn dia form, bisa ada onSubmit(kalau mau dienter) */}
                        <p className="h4 text-center mb-4">SIGN-IN</p>
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
                        <p>Not a member? <a href="/register">Sign Up</a></p>
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
export default connect(MapstatetoProps,{LoginUser,errormessageclear}) (Login);