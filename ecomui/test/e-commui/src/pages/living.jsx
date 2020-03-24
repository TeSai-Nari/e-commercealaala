import React, { Component } from 'react';
import {connect} from 'react-redux';      //kalau udah login, data masuk ke redux
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask} from "mdbreact";
import {
    Card, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import Numeral from 'numeral'
import Axios from 'axios'
import {API_URL} from './../supports/ApiUrl';
import {FaArrowAltCircleRight,FaCartPlus} from 'react-icons/fa'
import {BukanHome,IniHome} from './../redux/actions'
import {Link} from 'react-router-dom'
import './../App.css'
class Living extends Component {
    state = {
        photos:['./image/img1.jpg',
                './image/img2.jpeg',
                './image/img3.jpeg'
        ],
        products:[]        
    }
    componentDidMount(){
        this.props.IniHome()
        Axios.get(`${API_URL}/products?_expand=kategori&_limit=3`)
        .then((res)=>{
            this.setState({products:res.data})
        }).catch((err)=>{
            console.log(err)
        })
    }
    componentWillUnmount=()=>{
        console.log('jalan unmount')
        this.props.bukan()
    }
    // renderphoto=()=>{
    //     return this.state.photos.map((val,index)=>{
    //         return (
    //             <MDBCarouselItem key={index} itemId={index+1}>
    //                 <MDBView>
    //                     <div style={{width:'100%', height:650, display:'flex'}}>
    //                         <img
    //                             // className="d-block w-100"
    //                             src={val}
    //                             alt="First slide"
    //                             width='100%'
    //                         />
    //                     </div>
    //                     <MDBMask overlay="black-slight" />
    //                 </MDBView>       
    //             </MDBCarouselItem>    
    //         )
    //     })
    // }
    renderProducts=()=>{
        return this.state.products.map((val,index)=>{
            return (
                <div key={index} className='p-3' style={{width:'20%'}}>
                    <Card>
                            <div style={{height:300,width:'100%'}}>
                                <img src={val.image} height='100%' width='100%' alt=""/>
                                <div className='kotakhitam'>
                                    <Link to={`/productdetail/${val.id}`} className='tombolbuynow'>
                                        <button className='tomboldalam'><FaCartPlus/></button>
                                    </Link>
                                </div>
                            </div>
                          <CardBody style={{height:150}}>
                            <CardTitle style={{fontWeight:'bold'}} className='mb-2'>{val.name}</CardTitle>
                            <CardSubtitle className='mb-2'>{'Rp.'+Numeral(val.harga).format(0.0)}</CardSubtitle>
                            <button disabled className='rounded-pill px-2 btn-primary'>{val.kategori.nama}</button>
                          </CardBody>
                    </Card>        
                </div>
            )
        })
    }
    
    render() {
        // if(this.props.islogin){              //kalau sudah login baru masuk ke home
            return (
            <div>
                <MDBCarousel
                activeItem={1}
                length={this.state.photos.length}
                interval={2000}
                showIndicators={true}
                showControls={true}
                // className="z-depth-1"
                >
                {/* <MDBCarouselInner>
                    {this.renderphoto()}
                </MDBCarouselInner> */}
                </MDBCarousel>
                <div className='px-5 pt-3'>
                    <div>Best seller <FaArrowAltCircleRight/></div>
                    <div className='d-flex'>  
                        {this.renderProducts()}
                    </div>

                </div>
            </div>
            )
        }
}
const MapstatetoProps=({Auth})=>{       
    return{
        islogin:Auth.islogin                 
    }
}
export default connect(MapstatetoProps,{bukan:BukanHome,IniHome}) (Living);