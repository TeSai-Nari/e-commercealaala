import React, {Component} from 'react';
import {Table,Modal,ModalBody,ModalHeader,ModalFooter,Button} from 'reactstrap';
import Axios from 'axios'
import {API_URL} from '../supports/ApiUrl';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
const MySwal = withReactContent(Swal)

class ManageAdmin extends Component {
    state = {
        products:[],
        isModaladdOpen:false,
        isModaleditOpen:false,
        indexedit:0,
        indexdelete:-1,
        categories:[]
    }

    componentDidMount(){                        //useEffect ==componentDidMount
        Axios.get(`${API_URL}/products?_expand=kategori`)// untuk relasi (cari)
        .then((res)=>{
            Axios.get(`${API_URL}/kategoris`)
            .then((respond)=>{
                this.setState({products:res.data,categories:respond.data})
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    toggleadd=()=>{
        this.setState({isModaladdOpen:!this.state.isModaladdOpen})
    }
    toggleedit=()=>{
        this.setState({isModaleditOpen:!this.state.isModaleditOpen})
    }
    //
    onSaveaddDataClick=()=>{
        var namaadd=this.refs.namaadd.value //hanya bisa di jsx dan class (tidak bs di hooks), namaadd dr yg ref bawah
        var imageadd=this.refs.imageadd.value 
        var stockadd=parseInt(this.refs.stockadd.value )
        var categoryadd=parseInt(this.refs.categoryadd.value)
        var hargaadd=parseInt(this.refs.hargaadd.value)
        var dimensiadd=this.refs.dimensiadd.value
        var deskripsiadd=this.refs.deskripsiadd.value 
        var obj={           //yg di kiri propertinya harus sama dengan dbJson      
            name:namaadd,
            image:imageadd,
            stock:stockadd,
            kategoriId:categoryadd,
            harga:hargaadd,
            dimensi:dimensiadd,
            deskripsi:deskripsiadd
        }
        Axios.post(`${API_URL}/products`,obj)
        .then((res)=>{
            Axios.get(`${API_URL}/products?_expand=kategori`)
            .then((resakhir)=>{
                this.setState({products:resakhir.data,isModaladdOpen:false})
            }).catch((errakhir)=>{
                console.log(errakhir)
            })
        }).catch((err)=>{
            console.log(err)
        })
    }

    deleteconfirm=(index,id)=>{
        MySwal.fire({
            title: `Are you sure to delete ${this.state.products[index].name}?`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
                Axios.delete(`${API_URL}/products/${id}`)
                .then((res)=>{
                    MySwal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                    ).then((result)=>{
                        if(result.value){
                            Axios.get(`${API_URL}/products?_expand=kategori`)
                            .then((res1)=>{
                                this.setState({products:res1.data})
                            })
                        }
                    })
                }).catch((err)=>{
                    console.log(err)
                })
            }
          })
    }
    onSaveEditClick=()=>{
        var namaedit=this.refs.namaedit.value //hanya bisa di jsx dan class (tidak bs di hooks), namaedit dr yg ref bawah
        var imageedit=this.refs.imageedit.value 
        var stockedit=parseInt(this.refs.stockedit.value )
        var categoryedit=parseInt(this.refs.categoryedit.value)
        var hargaedit=parseInt(this.refs.hargaedit.value)
        var dimensiedit=this.refs.dimensiedit.value
        var deskripsiedit=this.refs.deskripsiedit.value 
        var obj={           //yg di kiri propertinya harus sama dengan dbJson      
            name:namaedit,
            image:imageedit,
            stock:stockedit,
            kategoriId:categoryedit,
            harga:hargaedit,
            dimensi:dimensiedit,
            deskripsi:deskripsiedit
        }
        var id=this.state.products[this.state.indexedit].id //di produk ada id
        console.log(obj,id)
        Axios.put(`${API_URL}/products/${id}`,obj)  //yang diambil data dlm bentuk objek
        .then((res)=>{
            // console.log(res.data)
            Axios.get(`${API_URL}/products?_expand=kategori`)
            .then((resakhir)=>{
                this.setState({products:resakhir.data,isModaleditOpen:false})
            }).catch((errakhir)=>{
                console.log(errakhir)
        }).catch((err)=>{
            console.log(err)
            })
        })
    }
    onEditClick=(index)=>{
        this.setState({indexedit:index,isModaleditOpen:true})
    }
    renderProducts=()=>{
        const {products} = this.state
        return products.map((val,index)=>{
            return (
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{val.name}</td>
                    <td><img src={val.image} alt={val.name} width='200px'/></td>
                    <td>{val.stock}</td>
                    <td>{val.kategori.nama}</td>
                    <td>{val.harga}</td>
                    <td>{val.dimensi}</td>
                    <td>{val.deskripsi}</td>
                    <td>
                        <button className='btn btn-primary' onClick={()=>this.onEditClick(index)} >Edit</button>
                    </td>
                    <td>
                        <button className='btn btn-danger' onClick={()=>this.deleteconfirm(index,val.id)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }
    rendercategorytoadd=()=>{
        return this.state.categories.map((val,index)=>{
            return <option key = {index} value = {val.id}>{val.nama}</option>
        })
    }
    render() {
        const {indexedit,products}=this.state
        if(this.props.User.role==='admin'){
            return (
                <div className='pt-5'>
                <Modal isOpen={this.state.isModaladdOpen} toggle={this.toggleadd}>
                    <ModalHeader toggle={this.toggleadd}>Add Data </ModalHeader>
                    <ModalBody>
                        <input type="text" ref='namaadd' placeholder='Product Name' className='form-control mt-2'/>
                        <input type="text" ref='imageadd' placeholder='Url Image' className='form-control mt-2'/>
                        <input type="number" ref= 'stockadd' placeholder='jumlah stok' className='form-control mt-2'/>
                        <select ref="categoryadd" className='form-control mt-2'>
                            <option hidden value="">Pilih Kategori</option>
                            {/* <option value="1">Kategori 1</option>
                            <option value="2">Kategori 2</option>
                            <option value="3">Kategori 3</option> */}
                            {this.rendercategorytoadd()}
                        </select>
                        <input type="number" ref='hargaadd' placeholder='Harga' className='form-control mt-2'/>
                        <input type="text" ref='dimensiadd' placeholder='Dimensi' className='form-control mt-2'/>
                        <textarea className='form-control' rows='5' ref='deskripsiadd' placeholder='Product Description'></textarea>
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={this.onSaveaddDataClick}>Save</Button>
                    <Button color="secondary" onClick={this.toggleadd}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                {
                this.state.products.length? //awalnya products 0([]). Kalau diisi baru di render
                <Modal isOpen={this.state.isModaleditOpen} toggle={this.toggleedit}>
                    <ModalHeader toggle={this.toggleedit}>Edit Data {products[indexedit].name}</ModalHeader>
                    <ModalBody>
                        <input type="text" ref='namaedit' defaultValue={products[indexedit].name} placeholder='Product Name' className='form-control mt-2'/>
                        <input type="text" ref='imageedit'defaultValue={products[indexedit].image} placeholder='Url Image' className='form-control mt-2'/>
                        <input type="number" ref= 'stockedit'defaultValue={products[indexedit].stock} placeholder='jumlah stok' className='form-control mt-2'/>
                        <select ref="categoryedit" defaultValue={products[indexedit].kategoriId} className=' form-control mt-2'>
                            <option hidden value="">Pilih Kategori</option>
                            {this.rendercategorytoadd()}
                        </select>
                        <input type="number" ref='hargaedit' defaultValue={products[indexedit].harga} placeholder='Harga' className='form-control mt-2'/>
                        <input type="text" ref='dimensiedit' defaultValue={products[indexedit].dimensi} placeholder='Dimensi' className='form-control mt-2'/>
                        <textarea className='form-control' rows='5' ref='deskripsiedit' defaultValue={products[indexedit].deskripsi} placeholder='Product Description'></textarea>
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={this.onSaveEditClick}>Save</Button>
                    <Button color="secondary" onClick={this.toggleedit}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                :
                null
                }
                <button className='btn btn-primary' onClick={this.toggleadd}>Add Data</button>
                <Table striped>
                <thead>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Stock</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Dimension</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {this.renderProducts()}
                </tbody>
            </Table>
            </div>
            );
        }else{
            return <Redirect to='/notfound'/>
        }
    }
}
const MapstatetoProps=(state)=>{
    return {
        User:state.Auth
    }
  }
export default connect(MapstatetoProps)(ManageAdmin);