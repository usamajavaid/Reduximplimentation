import React, { Component } from 'react';
import ShoppingHeader from '../Components/shoopingHeader';
import ShoppingBody from '../Components/shoppingItemBody';
import MyCard from '../Components/myCard';
import history from './history';
import {Switch, Route, Router} from 'react-router-dom';
import AddressFile from '../Components/addressFile';
import UserSelectedItems from '../Components/userSelectedItems';
import PaymentFile from '../Components/paymentFile';
class routingFileShopping extends Component {
   
    render() {
        return (
            <React.Fragment>
                <div class="container ">
                    
                    
                    {
                    <Router history={history}>
                    <Switch>
                    <Route  path ="/Components/shoppingItemBody"  render={props=><ShoppingBody {...props}/>}/>
                    <Route  path ="/" exact render={props=><ShoppingHeader {...props}/>} />
                    <Route  path ="/Components/myCard"  render={props=><MyCard {...props}/>}/>
                    <Route  path ="/Components/addressFile"  render={props=><AddressFile {...props}/>}/>
                    <Route  path ="/Components/userSelectedItems"  render={props=><UserSelectedItems {...props}/>}/>
                    <Route  path ="/Components/paymentFile"  render={props=><PaymentFile {...props}/>}/>
                    </Switch>
                    </Router> 
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default routingFileShopping;