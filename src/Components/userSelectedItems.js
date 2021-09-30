import React, { Component } from 'react';
import {Table,ButtonGroup} from 'reactstrap';
import {connect} from 'react-redux';
import history from '../Routing/history';
import {deleteMyCardfunction,incrementItemsFunction,decrementItemsFunction} from '../Actions/shoppingActions';
import Increment from '../BusinessLogistics/incrementItems';
import Decrement from '../BusinessLogistics/decrementItems';
class userSelectedItems extends Component {
    state={

    };
    render() {
        console.log('this is user selected itmes')
        console.log(this.props.myCard);
        return (
            <React.Fragment>
                <div class="container">
                   
                        <h6>
                            Address Of The User 
                        </h6>
                       <Table >
                            <tr>
                                <thead>
                                    <th>
                                        First Name
                                    </th>
                                    <th>
                                        Last Name
                                    </th>
                                    <th>
                                        Address
                                    </th>
                                    <th>
                                        City
                                    </th>
                                    <th>
                                        Postel Code
                                    </th>
                                    <th>
                                        Phone Number
                                    </th>
                                    <th>
                                        Country
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                </thead>
                                <tr>
                                    <td>
                                        {
                                            this.props.addressUser.fname
                                        }
                                    </td>
                                    <td>
                                        {
                                            this.props.addressUser.lname
                                        }
                                    </td>
                                    <td>
                                        {
                                            this.props.addressUser.address
                                        }
                                    </td>
                                    <td>
                                        {
                                            this.props.addressUser.city
                                        }
                                    </td>
                                    <td>
                                        {
                                            this.props.addressUser.postelCode
                                        }
                                    </td>
                                    <td>
                                        {
                                            this.props.addressUser.pnumber
                                        }
                                    </td>
                                    <td>
                                        {
                                            this.props.addressUser.country
                                        }
                                    </td>
                                    <td>
                                        {
                                            this.props.addressUser.email
                                        }
                                    </td>
                                </tr>
                            </tr>
                       </Table>
                       
                       
                             {
                                this.props.myCard.map(ls=>
                                    <div key={ls.id}>
                                        <Table >
                                            <tr>
                                                                                       
                                                <td>
                                                {
                                                    <img src={ls.imagePreviewUrl} alt="logo" style={{height:"150px", width:"150px",marginLeft:"20px",marginTop:"20px"}} /> 
                                                    // ls.imagePreviewUrl
                                                }
                                                </td>
                                                <th>
                                                        Price<br/><br/>
                                                        {ls.price}
                                                </th>
                                                <th>
                                                    &ensp;&ensp;&ensp;&ensp;Quantity<br/><br/>
                                                   
                                                                               
                                                    <ButtonGroup style={{border:"1px solid gray",padding:"10px",borderRadius:"30px"}}
                                                    
                                                    >
                                                      
                                                    <button className="btn btn-white btn-sm"
                                                               onClick={
                                                                   (e)=>{
                                                                   this.props.decrementItemsFunction(
                                                                       new Decrement(
                                                                        ls.id
                                                                       )
                                                                   )
                                                                       }
                                                               }
                                                            > - </button>
                                                        <span className="badge m-2 badge-link">
                                                        {ls.quantity}
                                                        </span>
                                                        <button className="btn btn-white btn-sm" style={{borderRadius:"15px"}}
                                                            onClick={(e)=>{
                                                                // this.quantitySetter();
                                                                this.props.incrementItemsFunction(
                                                                   new Increment(
                                                                        ls.id
                                                                   )
                                                                )
                                                                   }
                                                            }                              
                                                            
                                                        >
                                                            +
                                                        </button>
                                                        
                                                    </ButtonGroup>
                                                
                                            </th>
                                            <th>
                                               
                                            </th>
                                            <th>
                                                <button class="btn btn-secondary" 
                                                 onClick={()=>
                                                    this.props.deleteMyCardfunction(ls.id)
                                                }
                                                >
                                                    Delete
                                                </button>
                                            </th>
                                            <th style={{marginTop:"20px"}}>
                                                Total Price &ensp;&ensp;=&ensp;&ensp; {ls.price*ls.quantity}
                                            </th>

                                            </tr>
                                        </Table>
                                    </div>    
                                )
                            } 
                       </div>
                       <div class="row">
                            <div class="col-12">
                            <button class="btn" id="cart-btn-1"
                                 onClick={()=>history.push("/Components/shoppingItemBody")}
                            >
                                Continue shopping
                        </button>
                        <button class="btn btn-secondary" id="cart-btn-1"
                                 onClick={()=>history.push("/Components/paymentFile")}
                        >
                                Payment
                        </button>
                            </div>
                       </div>
                
            </React.Fragment>
        );
    }
}

const mapStateToProps = state =>({
     addressUser: state.myCardItems12.addressUser,
     myCard: state.myCardItems12.mycardItems

   
})

export default connect(mapStateToProps,{deleteMyCardfunction,incrementItemsFunction,decrementItemsFunction}) (userSelectedItems);