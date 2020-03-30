import React,{Fragment} from 'react'

const Loader =() =>{
    return (
        <Fragment>
            <div>
            <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
            </div>
        </div>
        </Fragment>
    )
}
export default Loader;