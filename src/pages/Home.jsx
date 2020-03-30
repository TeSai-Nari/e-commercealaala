import React ,{Component, Fragment} from 'react'
// import {connect} from 'react-redux';      //kalau udah login, data masuk ke redux
// import {BukanHome, IniHome} from './../redux/actions' 
import {MDBBtn, MDBLink,
  MDBCarousel, MDBCol, MDBCarouselCaption,
  MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from "mdbreact";
import {FaLongArrowAltRight} from 'react-icons/fa'

class Home extends Component{
  // state= {
  //   photocarousel1:['./image/gambar2.jpg',
  //                   './image/gambar3.jpg',
  //                   './image/gambar4.jpg'
  //   ],
  // }
  // renderphoto1=() => {
  //   return this.state.photocarousel1.map((val,index)=>{
  //     return (
  //       <MDBCarouselItem key={index} itemId= {index+1}className='carousel-item'>
  //         <MDBView>
  //           <img
  //             className="d-block w-100"
  //             src={val}
  //             alt="First slide"
  //           />
  //         <MDBMask overlay='black-slight'/>
  //         </MDBView>
  //         <MDBCarouselCaption className='text-left'>
  //           <p className='font-size-large white-text'>{this.state.titlecarousel1}</p>
  //           <h3 className="white-text">IN SOLID OAK &amp; HAND-CAST BRASS</h3>
  //           <MDBBtn outline color="white">EXPLORE THE COLLECTION <FaLongArrowAltRight style={{fontSize:'14px'}}/></MDBBtn>
  //         </MDBCarouselCaption>
  //       </MDBCarouselItem>
  //     )
  //   })
  // }
  render(){
    return (
        <Fragment>
          {/* jumbotron */}
            <div className="jumbotron pr-5 text-right " style ={{ backgroundImage: 'url(./image/gambar1.jpg)'}}>
              <MDBCol className="y-3 opp col-md-2 d-inline-block justify-content-end">
                <div className="h1-responsive mx-3 p-0 font-bold judul-besar mb-2">PT</div>
                <p className="mx-3 font-size-smed">THE INFINITE <br/>POTENTIAL OF A <br/> BLANK CANVAS <br/>THE HOME YOU <br/> HOPE TO CREATE</p>
                {/* <p className="mx-3 font-size-small">WE INVITE YOU TO <br/>BRING YOUR VISION <br/>TO LIFE</p> */}
                <MDBLink className='mx-3 p-0' to='/living'link>
                  <MDBBtn outline color="black">Explore &nbsp; <FaLongArrowAltRight style={{fontSize:'14px'}}/></MDBBtn>
                </MDBLink>
              </MDBCol>
            </div>
            {/* carousel 1 */}
            <MDBCarousel className='carousel-container'
              activeItem={1}
              length={3}
              showControls={true}
              showIndicators={false}
              interval={5500}
              // className="z-depth-1"
            >
              <MDBCarouselInner>
                {/* {this.renderphoto1()} */}
                
                <MDBCarouselItem itemId="1"className='carousel-item '>
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="./image/gambar2.jpg"
                      alt="First slide"
                    />
                  <MDBMask overlay='black-slight'/>
                  </MDBView>
                  <MDBCarouselCaption className='text-left'>
                    <p className='font-size-large white-text'>THE T-BRACE<br/>CONNECTION</p>
                    <h3 className="white-text">IN SOLID OAK &amp; HAND-CAST BRASS</h3>
                      <MDBLink to='/living'>
                        <MDBBtn outline color="white">
                          EXPLORE THE COLLECTION <FaLongArrowAltRight style={{fontSize:'14px'}}/>
                        </MDBBtn>
                      </MDBLink>
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
                  <MDBCarouselCaption className='my-0' >
                    <h3 className="d-flex align-self-end h3-responsive font-IBM black-text">SOLID OAK COLLECTION</h3>
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
            <br/>
            {/* carousel 2 */}
            <MDBCarousel className='carousel-container'
              activeItem={1}
              length={3}
              showControls={true}
              showIndicators={false}
              className="z-depth-1"
            >
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBView>
                    <img
                      className="d-block w-100 img-adjust"
                      src="./image/gambar5-2.jpg"
                      alt="First slide"
                    />
                  <MDBMask overlay='black-slight'/>
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
  }
// const MapstatetoProps=({Auth})=>{       //Pakai destructuring
//   return{
//       islogin:Auth.islogin           //dr reducers       
//   }
// }
// export default connect(MapstatetoProps,{bukan:BukanHome,IniHome}) (Home);
export default Home;