import React, {Component, Fragment} from 'react'
import '../colorlib-error-404-17/css/style.css'
class NotFound extends Component{
    state={ }
    render(){
        return(
            <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                <h1>:(</h1>
                </div>
                <h2>404 - Page not found</h2>
                <p>
                The page you are looking for might have been removed had its name changed
                or is temporarily unavailable.
                </p>
                <a href="/">home page</a>
            </div>
            </div>
        )
    }
}


export default NotFound;