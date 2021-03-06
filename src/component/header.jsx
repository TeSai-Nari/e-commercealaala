import React ,{Component, Fragment} from 'react'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,MDBIcon,MDBCol
    } from "mdbreact";
// import { BrowserRouter as Router } from 'react-router-dom';
import {FiShoppingCart} from 'react-icons/fi'
import {BukanHome, IniHome} from './../redux/actions' 
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa'
class NavbarPage extends Component {
    state = {
        isOpen: false
      };
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }
    render() {
        return (
            <Fragment >
                <div className="d-flex flex-column">
                <MDBNavbar className='header-container d-flex underline' color="black" dark expand="md">
                    <MDBNavbarBrand>
                    <MDBNavLink to="/" className="white-text py-0">PT</MDBNavLink>
                    </MDBNavbarBrand>
                    <MDBCol md="6">
                        <div className="input-group md-form form-sm form-1 pl-0 py-0 my-0">
                            <div className="input-group-prepend ">
                            <span className="input-group-text white lighten-3" id="basic-text1">
                                <MDBIcon className="text-black" icon="search" />
                            </span>
                            </div>
                            <input className="form-control my-0 py-0" type="text" placeholder="Search" aria-label="Search" />
                        </div>
                    </MDBCol>  
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav right className='mt-4' >
                        <MDBNavItem>
                            {
                                this.props.User.role==='admin'?
                                <MDBNavLink to='/manageadmin'>
                                MANAGE ADMIN
                                </MDBNavLink>
                                :
                                null
                            }
                            </MDBNavItem>
                            <MDBNavItem>
                            {
                                this.props.User.islogin?
                                null      //jadi hilang loginnya
                                :
                            <MDBNavLink to='/login'>
                                LOGIN
                                </MDBNavLink>
                            }
                            </MDBNavItem>
                            <MDBNavItem>
                            {
                                this.props.User.islogin?
                                null
                                :
                            <MDBNavLink to='/register'>
                                REGISTER
                            </MDBNavLink>
                            }
                            </MDBNavItem>
                            <MDBNavItem>
                            {
                                this.props.User.username?
                                <MDBDropdown >
                                <MDBDropdownToggle nav className='warnanav'>
                                    <FaUserCircle/>HELLO, {this.props.User.username}
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className='dropdown1'>
                                    <MDBDropdownItem href="/change-password">Change Password</MDBDropdownItem>
                                    <MDBDropdownItem >
                                        <MDBNavLink className='link-kecil' to='/living' onClick={()=>onSignOutClick()} >Logout</MDBNavLink>
                                    </MDBDropdownItem>                                
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                                :
                                null
                            }
                            </MDBNavItem>
                            <MDBNavItem>
                                {
                                this.props.User.role=='user'?
                                <MDBNavLink to='/'>HISTORY</MDBNavLink>
                                :
                                null
                                }
                            </MDBNavItem>
                            <MDBNavItem>
                            <MDBNavLink to='/cart'>
                                <FiShoppingCart style={{fontSize:15}}/> CART
                            </MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
                <MDBNavbar className='d-flex header-container justify-content-between pb-2' color="black" expand="md">
                        {/* Living */}
                        <MDBDropdown>
                            <MDBDropdownToggle color="black" nav>
                            <div className=" d-md-inline white-text ">LIVING</div>
                            </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default mt-2 ">
                                <MDBDropdownItem href="#!">Sofas</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Shelving &amp; Cabinets</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Tables</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Consoles</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Mirrors</MDBDropdownItem>
                                </MDBDropdownMenu>
                        </MDBDropdown>
                        {/* Dining */}
                        <MDBDropdown>
                            <MDBDropdownToggle color="black" nav>
                            <div className=" d-md-inline white-text">DINING</div>
                            </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default mt-2">
                                <MDBDropdownItem href="#!">Tables</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Seatings</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Shelving &amp; Cabinets</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Sideboards</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Counter &amp; Bars </MDBDropdownItem>
                                </MDBDropdownMenu>
                        </MDBDropdown>
                        {/* Bed */}
                        <MDBDropdown>
                            <MDBDropdownToggle color="black" nav>
                            <div className=" d-md-inline white-text">BED</div>
                            </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default mt-2">
                                <MDBDropdownItem href="#!">Dresses, Nightstands <br/> &amp; Armoires</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Matresses &amp; Foundations</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Benches &amp; Stools</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Bed Linens</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Bedding Essentials</MDBDropdownItem>
                                </MDBDropdownMenu>
                        </MDBDropdown>
                        {/* Bath */}
                        <MDBDropdown>
                            <MDBDropdownToggle color="black" nav>
                            <div className=" d-md-inline white-text">BATH</div>
                            </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default mt-2">
                                <MDBDropdownItem href="#!">Furniture</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Vanities</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Bath Storage</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Mirrors &amp; Medicine Cabinets</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Bathubs</MDBDropdownItem>
                                </MDBDropdownMenu>
                        </MDBDropdown>
                        {/* Lighting */}
                        <MDBDropdown>
                            <MDBDropdownToggle color="black" nav>
                            <div className=" d-md-inline white-text">LIGHTING</div>
                            </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default mt-2">
                                <MDBDropdownItem href="#!">Ceiling</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Wall</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Table</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Floor</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Bath</MDBDropdownItem>
                                </MDBDropdownMenu>
                        </MDBDropdown>
                        {/* Windows */}
                        <MDBDropdown>
                            <MDBDropdownToggle color="black" nav>
                            <div className=" d-md-inline white-text">WINDOWS</div>
                            </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default mt-2">
                                <MDBDropdownItem href="#!">Drapery</MDBDropdownItem>
                                <MDBDropdownItem href="#!">High-Performance Indoor <br/> &amp; Outdoor Drapery</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Custom Shades</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Window Hardware</MDBDropdownItem>
                                </MDBDropdownMenu>
                        </MDBDropdown>
                        {/* Decor */}
                        <MDBDropdown>
                            <MDBDropdownToggle color="black" nav>
                            <div className=" d-md-inline white-text">DECOR</div>
                            </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default mt-2">
                                <MDBDropdownItem href="#!">Mirrors</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Wall Décor</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Pillows &amp; Throws</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Decorative Accents</MDBDropdownItem>
                                </MDBDropdownMenu>
                        </MDBDropdown>
                        {/* Art */}
                        <MDBDropdown>
                            <MDBDropdownToggle color="black" nav>
                            <div className=" d-md-inline white-text">ART</div>
                            </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default mt-2">
                                <MDBDropdownItem href="#!">Art by Category</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Art by Subject</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Art by Artist</MDBDropdownItem>
                                </MDBDropdownMenu>
                        </MDBDropdown>
                </MDBNavbar>
                </div>
            </Fragment>
        )
    }
}
const onSignOutClick=()=>{
    localStorage.clear()
    window.location.reload()
    window.location.assign(`${URL}/`)
}
const MapstatetoProps=(state)=>{
    return {
      User:state.Auth,
      Header:state.Header.ishome
    }
  }
  export default connect(MapstatetoProps,{IniHome,BukanHome})(NavbarPage);