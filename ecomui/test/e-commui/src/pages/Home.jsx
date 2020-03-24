import React ,{Fragment} from 'react'
import {connect} from 'react-redux';      //kalau udah login, data masuk ke redux
import {BukanHome, IniHome} from './../redux/actions' 
import {MDBBtn, MDBNavItem, MDBLink,
  MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, 
 } from "mdbreact";
import {FaLongArrowAltRight} from 'react-icons/fa'

const Home = () => {
  return (
      <Fragment>
        {/* jumbotron */}
          <div className="jumbotron" style ={{ backgroundImage: 'url(./image/gambar1.jpg)'}}>
            <div className="module opp d-flex flex-column offset-md-10">
              <p className='font-size-extra-large font-IBM black-text'>PT</p>
              <p className="p-responsive font-size-smed font-IBM black-text">THE INFINITE <br/>POTENTIAL OF A <br/> BLANK CANVAS <br/>THE HOME YOU <br/> HOPE TO CREATE</p>
              <p className='font-size-small black-text'>WE INVITE YOU TO <br/>BRING YOUR VISION <br/>TO LIFE</p>        
              <MDBNavItem>
                <MDBLink to='/living'link>
                  <MDBBtn outline color="black">Explore</MDBBtn>
                </MDBLink>
              </MDBNavItem>
            </div>
          </div>
          {/* carousel 1 */}
          <MDBCarousel className='carousel-container'
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={false}
            // className="z-depth-1"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1"className='carousel-item'>
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="./image/gambar2.jpg"
                    alt="First slide"
                  />
                <MDBMask overlay='black-strong'/>
                </MDBView>
                <MDBCarouselCaption className='text-left'>
                  <p className='font-size-large font-IBM white-text'>THE T-BRACE<br/>CONNECTION</p>
                  <h3 className="font-IBM white-text">IN SOLID OAK &amp; HAND-CAST BRASS</h3>
                  <MDBBtn outline color="white">EXPLORE THE COLLECTION <FaLongArrowAltRight/></MDBBtn>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="./image/gambar3.jpg"
                    alt="Second slide"
                  />
                <MDBMask overlay="grey-slight" />
                </MDBView>
                <MDBCarouselCaption className='d-flex no-padding'>
                  <h3 className=" font-IBM white-text">SOLID OAK COLLECTION</h3>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="./image/gambar4.jpg"
                    alt="Third slide"
                  />
                <MDBMask overlay="grey-slight" />
                </MDBView>
                <MDBCarouselCaption className='d-flex flex-row-reverse no-padding'>
                  <h3 className=" font-IBM white-text">SOLID OAK COLLECTION</h3>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
          {/* carousel 2 */}
          <MDBCarousel className='carousel-container'
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={false}
            // className="z-depth-1"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="d-block w-100 img-adjust"
                    src="./image/gambar5-2.jpg"
                    alt="First slide"
                  />
                <MDBMask overlay='black-strong'/>
                </MDBView>
                <MDBCarouselCaption className='text-right'>
                  <p className='font-size-large font-IBM white-text'>THE T-BRACE<br/>CONNECTION</p>
                  <h3 className="font-IBM white-text">IN SOLID OAK &amp; HAND-CAST BRASS</h3>
                  <MDBBtn outline color="white">EXPLORE THE COLLECTION <FaLongArrowAltRight/></MDBBtn>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100 img-adjust"
                    src="./image/gambar7-2.jpg"
                    alt="Second slide"
                  />
                <MDBMask overlay="grey-slight" />
                </MDBView>
                <MDBCarouselCaption className='d-flex no-padding'>
                  <h3 className=" font-IBM white-text">SOLID OAK COLLECTION</h3>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="d-block w-100 img-adjust"
                    src="./image/gambar6.jpg"
                    alt="Third slide"
                  />
                <MDBMask overlay="grey-slight" />
                </MDBView>
                <MDBCarouselCaption className='d-flex flex-row-reverse no-padding'>
                  <h3 className=" font-IBM white-text">SOLID OAK COLLECTION</h3>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
      </Fragment>
  );
}
const MapstatetoProps=({Auth})=>{       //Pakai destructuring
  return{
      islogin:Auth.islogin           //dr reducers       
  }
}
export default connect(MapstatetoProps,{bukan:BukanHome,IniHome}) (Home);