import React, { Component } from 'react';
import history from '../Routing/history';
import {connect} from 'react-redux';
import {Table,ButtonGroup} from 'reactstrap';
import {deleteMyCardfunction,incrementItemsFunction,decrementItemsFunction} from '../Actions/shoppingActions';
import Increment from '../BusinessLogistics/incrementItems';
import Decrement from '../BusinessLogistics/decrementItems';
class myCard extends Component {
    state={
        counter:0,
        id:0,
        quantity1:0
    }
    render() {
        console.log('This Is My Card Items');
        console.log(this.props.mycardItems);
        return (

            <React.Fragment>
                <div class="container">
                    {
                        this.props.mycardItems.map(ls=>
                            <div >
                               
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
                    <button class="btn btn-success"
                         onClick={()=>history.push("/Components/shoppingItemBody")}
                    >
                        Back
                    </button>
                    <button class="btn btn-secondary"
                         onClick={()=>history.push("/Components/addressFile")}
                    >
                        Next Step
                    </button>
                </div>
            </React.Fragment>
        );
    }
}
const mapToStateProps =(state)=>({
    mycardItems: state.myCardItems12.mycardItems
})

export default connect(mapToStateProps,{deleteMyCardfunction,incrementItemsFunction,decrementItemsFunction}) (myCard);