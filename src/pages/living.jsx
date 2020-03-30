// Library
import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux';      //kalau udah login, data masuk ke redux
import Numeral from 'numeral'
import Axios from 'axios'
import {API_URL} from './../supports/ApiUrl';
import {MDBContainer, MDBCarousel, MDBCarouselInner,
        MDBCarouselItem, MDBView, MDBMask,
        MDBCarouselCaption, MDBRow, MDBCol} from "mdbreact";
import {BukanHome,IniHome} from './../redux/actions'
import {Link} from 'react-router-dom'
// Styling
import { Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {FaArrowAltCircleRight,FaCartPlus} from 'react-icons/fa'
// import Grid from "@material-ui/core/Grid";

class Living extends Component {
    state = {
        photoCarousel:['./image/livingcarou-1.jpg',
                        './image/gambar3.jpg',
                        './image/gambar4.jpg'
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
    renderIsiCarousel=()=>{
        return this.state.photoCarousel.map((val,index)=>{
            return (
                <MDBCarouselItem key={index} itemId={index+1} className='carousel-living'>
                    <MDBView>
                        <div style={{height:'350'}}>
                            <img
                                src={val}
                                alt="First slide"
                                width='100%'
                            />
                        </div>
                        <MDBMask overlay='white-slight'/>
                    </MDBView>
                    <MDBCarouselCaption className='m-0 p-0 ' >
                    <div className="h3-responsive carousel-title-nopadding font-IBM white-text">LIVING</div>
                    <div className="h3-responsive carousel-subtitle font-IBM white-text">COLLECTION</div>
                    </MDBCarouselCaption>       
                </MDBCarouselItem>    
            )
        })
    }
    renderProducts=()=>{
        return this.state.products.map((val,index)=>{
            return (
                <div key={index} className='p-3' style={{width:'30%'}}>
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
                          </CardBody>
                    </Card>        
                </div>
                // <Fragment>
                //     <Grid container spacing={24}>
                //         <Grid item md={4}>
                //         lala
                //         </Grid>
                //         <Grid item md={4}>
                //         lala
                //         </Grid>
                //         <Grid item md={4}>
                //         lala
                //         </Grid>
                //     </Grid>
                //     <MDBRow>
                //     <MDBCol xs="12" sm="4">
                //         <Card>
                //              <div style={{height:300,width:'100%'}}>
                //                  <img src={val.image} height='100%' width='100%' alt=""/>
                //                  <div className='kotakhitam'>
                //                      <Link to={`/productdetail/${val.id}`} className='tombolbuynow'>
                //                          <button className='tomboldalam'><FaCartPlus/></button>
                //                      </Link>
                //                  </div>
                //              </div>
                //            <CardBody style={{height:150}}>
                //              <CardTitle style={{fontWeight:'bold'}} className='mb-2'>{val.name}</CardTitle>
                //              <CardSubtitle className='mb-2'>{'Rp.'+Numeral(val.harga).format(0.0)}</CardSubtitle>
                //            </CardBody>
                //         </Card>        
                //     </MDBCol>
                //     </MDBRow>
                // </Fragment>
            )
        })
    }
    render() {
        // if(this.props.islogin){              //kalau sudah login baru masuk ke home
            return (
            <div>
                <MDBCarousel
                activeItem={1}
                length={this.state.photoCarousel.length}
                interval={2000}
                showIndicators={false}
                showControls={false}
                // className="z-depth-1"
                >
                <MDBContainer>
                    <MDBCarouselInner className='m-0'>
                        {this.renderIsiCarousel()}
                    </MDBCarouselInner>
                </MDBContainer>
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
const MapstatetoProps=({Auth})=>{       //Pakai destructuring
    return{
        islogin:Auth.islogin           //dr reducers       
    }
}
export default connect(MapstatetoProps,{bukan:BukanHome,IniHome}) (Living);