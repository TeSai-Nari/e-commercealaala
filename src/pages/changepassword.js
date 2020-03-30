import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

const ChangePassword= () => {
    return (
        <div className='d-flex justify-content-center mx-3 px-5 py-4' style={{height:'90vh'}}>
            <form>
                <p className="h5 text-center py-5 mb-4">CHANGE PASWORD</p>
                <div className="grey-text">
                <MDBInput label="Your password" icon="lock" group type="password" validate error="wrong"
                    success="right" />
                <MDBInput label="Confirm your password" icon="exclamation-triangle" group type="password" validate
                    error="wrong" success="right" />
                {/* <MDBInput label="Your password" icon="lock" group type="password" validate /> */}
                </div>
                <div className="text-center">
                <MDBBtn outline color="black">Confirm</MDBBtn>
                </div>
            </form>
        </div>
    );
};

export default ChangePassword