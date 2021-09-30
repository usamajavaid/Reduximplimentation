import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Table} from 'reactstrap';
import history from '../Routing/history';
import ViewCartItem from './viewCartItems';
import {addMyCardItem} from '../Actions/shoppingActions';
import MyCard from '../BusinessLogistics/myCardClass';
class shoppingItemBody extends Component {
    render() {
        return (
            <React.Fragment>
                    <div class="container">
                        <ViewCartItem/>
                    
                    {
                        this.props.shoppingItems.map(ls =>
                            (
                                <div key={ls.id} >
                                    <Table borderless>

                                        <tr>
                                            
                                                                                   
                                            <th>
                                            {
                                                <img src={ls.imagePreviewUrl} alt="logo" style={{height:"150px", width:"150px",marginLeft:"20px",marginTop:"20px"}} /> 
                                            }
                                            </th>
                                            <th>
                                                    Price<br/><br/>
                                                    {ls.price}
                                            </th>
                                       
                                            <th>
                                                    Quantity<br/><br/>
                                                    {ls.quantity}
                                            </th>
                                            
                                            <td>
                                                <button class="btn btn-secondary"
                                                    onClick={()=>this.props.addMyCardItem(
                                                        new MyCard(
                                                            ls.price,
                                                            1,
                                                            ls.imagePreviewUrl,
                                                            ls.id
                                                        )
                                                    )}
                                                >
                                                    Add To Cart
                                                </button>
                                            </td>
                                        </tr>
                                    </Table>  
                                                                     
                                </div>
                            )
                            )
                    }
                        <button class="btn btn-success" style={{marginTop:"70px"}}
                                        onClick={()=>history.push("/")}
                                    >
                                        Back
                        </button>
                </div>
            </React.Fragment>
        );
    }
}


const mapStateToProps = state =>({
    shoppingItems: state.myCardItems12.shoppingItems
})


export default connect(mapStateToProps,{addMyCardItem}) (shoppingItemBody);