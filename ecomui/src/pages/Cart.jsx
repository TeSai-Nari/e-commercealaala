import React, { Component } from 'react';
import {connect} from 'react-redux'
import Axios from 'axios'
import {API_URL} from './../supports/ApiUrl'
import {Table} from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {changetoRupiah} from './../supports/changeToRp'

const MySwal = withReactContent(Swal)
class Cart extends Component {
    state = {
        isicart:[]
    }

    componentDidMount(){
        this.getdata()
    }
    getdata=()=>{
        Axios.get(`${API_URL}/transactions?_embed=transactiondetails&userId=${this.props.User.id}&status=oncart`)
        .then((res)=>{
            // console.log(res.data[0].transactiondetails)
            var newarrforprod=[]
            res.data[0].transactiondetails.forEach(element => {      //element:isi dr array, yg adalah object
                newarrforprod.push(Axios.get(`${API_URL}/products/${element.productId}`))
            });
            // console.log(newarrforprod)
            Axios.all(newarrforprod)
            .then((res2)=>{
                // console.log(res2.data)
                res2.forEach((val,index)=>{
                    res.data[0].transactiondetails[index].dataprod=val.data
                })
                console.log(res.data[0].transactiondetails)
                this.setState({isicart:res.data[0].transactiondetails})
            })
        }).catch((err)=>{
                console.log(err)
        })
    }
    renderisidata=()=>{
        return this.state.isicart.map((val,index)=>{
            return (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{val.dataprod.name}</td>
                    <td><img src={val.dataprod.image} height='200' alt=''/></td>
                    <td>{val.qty}</td>
                    <td><button className='btn btn-danger' onClick={()=>this.deleteconfirm(index,val.id)}>Delete</button></td>
                </tr>
            )
        })
    }
    // totalPrice=()=>{
    //     let allPrice=0
    //     this.state.isicart.forEach((val)=>{
    //         allPrice+=val.qty*val.dataprod.harga
    //     })
    //     return(
    //         <tr style={{verticalAlign:"middle"}}>
    //             <td colSpan="2" style={{verticalAlign:"middle", fontSize:20, fontWeight:"bolder"}}>Total</td>
    //             <td colSpan="2" ></td>
    //             <td style={{fontWeight:"bolder", fontSize:20}}>{changetoRupiah(total)}</td>
    //         </tr>
    //     )
    // }

    deleteconfirm=(index,id)=>{
        MySwal.fire({
            title: `Are you sure wanna delete ${this.state.isicart[index].dataprod.name} ?`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
              Axios.delete(`${API_URL}/transactiondetails/${id}`)
              .then((res)=>{
                  MySwal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  ).then((result)=>{
                      if(result.value){
                          this.getdata()
                      }
                  })
              }).catch((err)=>{
                  console.log(err)
              }) 
            }
          })
    }
    
    render() {
        return (
            <div className='paddingatas'>
                <Table striped>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Nama</th>
                            <th>Foto</th>
                            <th>Qty</th>
                            <th>Hapus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderisidata()}
                    </tbody>
                    <tfoot>
                        {/* {this.totalPrice()} */}
                    </tfoot>
                </Table>
            </div>
        );
    }
}
const MapstatetoProps=(state)=>{
    return{
        User:state.Auth
    }
}
export default connect(MapstatetoProps) (Cart);