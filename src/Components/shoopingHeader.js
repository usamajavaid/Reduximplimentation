import React, { Component } from 'react'
import {connect} from 'react-redux';
import {addShoppingFunction} from '../Actions/shoppingActions';
import ShoppingClass from '../BusinessLogistics/shoppingClass';
// import {Table} from 'reactstrap';
import history from '../Routing/history';
import './shoopingHeader.css';
class shoopingHeader extends Component {
    state={
        quantity:"",
        price:"",
        selectedFile: null,
        imagePreviewUrl: null
    };
    fileChangedHandler = event => {
        this.setState({
          selectedFile: event.target.files[0]
        })
     
        let reader = new FileReader();
         
        reader.onloadend = () => {
          this.setState({
            imagePreviewUrl: reader.result
          });
        }
     
        reader.readAsDataURL(event.target.files[0])
     
      }
    render() {
        let $imagePreview = (<div style={{color:"white"}} >Please select an Image for Preview</div>);
    
        if (this.state.imagePreviewUrl) {
          $imagePreview = (<div ><img src={this.state.imagePreviewUrl} alt="icon" width="250px" height="300px"  /> </div>);
        }
        return (
            <React.Fragment >
                <div id="bg">
                <div class="container-fluid" >
                    <div class="row">
                        <div class="col-sm-12 " style={{textAlign:"center"}}>
                            <h1 style={{color:"#3c3c3c"}}>
                                <b>This is Shopping Site</b><hr style={{ width:"50%", borderBottom:"6px solid #4caf50",marginLeft:"300px"}} />
                            </h1>
                        </div>
                    </div><br/><br/>
                    <div class="row" id="control-all-input" >
                    <div class="col-sm-6 ">

              

                    <label style={{color:"white"}}>
                        Enter The Price Of The Product
                    </label><br/>
                    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter The Price of the Product" onChange={(event)=>this.setState({
                        price:event.target.value
                    })} /><br/>
                    <label style={{color:"white"}} >
                        Enter the Quantity of the Product 
                    </label><br/>
                    <input type="number" class="form-control" id="exampleInputEmail1"  placeholder="Enter the Quantity of the product" onChange={(event)=>this.setState({
                        quantity:event.target.value
                    })} /><br/>
                    <input type="file" class="form-control" id="exampleInputEmail1"  onChange ={this.fileChangedHandler} /><br/><br/>
                    <button class="btn btn-secondary" id="add-item-btn"
                        onClick={()=>
                            this.props.addShoppingFunction(
                                new ShoppingClass(
                                    this.state.price,
                                    this.state.quantity,
                                    this.state.imagePreviewUrl,
                                    Math.random()*1000*Math.random()
                                )
                                
                            )
                        }
                    >
                        Add Items
                    </button>
                    <button class="btn btn-success" id="next-page-btn" style={{marginLeft:"10px"}}
                        onClick={()=>history.push("/Components/shoppingItemBody")}
                    >
                        Next Page
                    </button>
                    </div><br/>
                    <div class="col-sm-4 " style={{marginTop:"10px"}}>
                        {$imagePreview}
                    </div>
                    </div>
                </div>
                </div>
            </React.Fragment>
        );
    }
}



export default connect(null,{addShoppingFunction}) (shoopingHeader);