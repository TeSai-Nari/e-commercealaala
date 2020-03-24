// Libraries
import React, { useEffect, useState,Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';
import Axios from'axios'
import {API_URL} from './supports/ApiUrl';
import { KeepLogin } from './redux/actions';
import {connect} from 'react-redux'
// Component
import Header from './component/header'
import Footer from './component/footer'
import Copyrights from './component/copyrights'
// Pages
import Register from './pages/register'
import Home from './pages/Home.jsx'
import Login from './pages/login'
import ManageAdmin from './pages/manageadmin'
import NotFound from './pages/notfound'
import Living from './pages/living'
import ChangePassword from './pages/changepassword';
// Footer Pages
import AboutUs from './pages/footer-link/aboutus'
import Terms from './pages/footer-link/terms'
import Privacy from './pages/footer-link/privacy'
// Styling
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'

function App({KeepLogin}) {
    const [Loading,setLoading]=useState(true)
    useEffect(()=>{
        var id=localStorage.getItem('iduser')
        if(id){
            Axios.get(`${API_URL}/users/${id}`)
            .then(res=>{
              KeepLogin(res.data)
            }).catch((err)=>{
              console.log(err)
            }).finally(()=>{
              setLoading(false)
            })
        }else{
          setLoading(false)
        } 
      },[])
      if(Loading){
        return <div>loading....</div>
      }
    return (
        <Fragment>
            <Header/> {/* Akan selalu ada di halaman */}
            <Switch>
                {/* Footer page */}
               <Route path='/about-us' component={AboutUs}/>
               <Route path='/terms' component={Terms}/>
               <Route path='/privacy-policy' component={Privacy}/>
                {/* Component page */}
               <Route path='/' exact component={Home}/>
               <Route path='/register' component={Register}/>
               <Route path='/living' component={Living}/>
               <Route path='/login' component={Login}/>
               <Route path='/manageadmin' component={ManageAdmin}></Route>
               <Route path='/change-password' component={ChangePassword}></Route>
               <Route path='/*' exact component={NotFound}/> {/* Entah kenapa ini harus di urutan terakhir */}
            </Switch>
            <Footer/> {/* Akan selalu ada di halaman */}
            <Copyrights/>
        </Fragment>
    )
}
export default connect(null,{KeepLogin})(App);