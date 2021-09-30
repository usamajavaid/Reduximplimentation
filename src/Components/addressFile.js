import React, { Component } from 'react'
// import {Table, FormGroup,Label, Input} from 'reactstrap';
import './addressCard.css';
//import Umar from './umar.jpg';
import AddressClass from '../BusinessLogistics/addressClass';
import {connect} from 'react-redux';
import {addressAdditionfuntion} from '../Actions/shoppingActions';
import history from '../Routing/history';
class addressFile extends Component {
    state={
        fName:"",
        lName:"",
        address:"",
        city:"",
        postelCode:"",
        pNumber:"",
        country:"",
        email:""
    };
    render() {
        // console.log(this.state.fName);
        // console.log(this.state.lName);
        // console.log(this.state.address);
        // console.log(this.state.city);
        // console.log(this.state.postelCode);
        // console.log(this.state.pNumber);
        // console.log(this.state.country);
        // console.log(this.state.email);
        
        return (
            <React.Fragment>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <h5>Address Data and Type Of Delivery</h5>
                        </div>
                        <div class="col-sm-1" id="shpping-icons-1">
                        <i class="fa fa-shopping-cart" ></i>
                        </div>
                        <div class="col-sm-1" id="hr-add">
                            <hr/>
                        </div>
                        <div class="col-sm-1" id="shpping-icons-2">
                        <i class="fa fa-truck" ></i>
                        </div>
                        <div class="col-sm-1" id="hr-add">
                            <hr/>
                        </div>
                        <div class="col-sm-1" id="shpping-icons-3">
                        <i class="fa fa-money"></i>
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                        <div class="col-sm-4">
                            <form>
                                <div class="form-group">
                                    <label>
                                        Enter your First Name
                                    </label>
                                    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter Your First Name" 
                                        onChange={(event)=>
                                            this.setState({
                                                fName:event.target.value
                                            })
                                        }
                                    />
                                </div>
                            </form>
                        </div>
                        <div class="col-sm-4">
                            <form>
                                <div class="form-group">
                                    <label>
                                        Enter your Last Name
                                    </label>
                                    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter Your Last Name" 
                                        onChange={(event)=>
                                            this.setState({
                                                lName:event.target.value
                                            })
                                        }
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                    <div class="col-sm-4">
                            <form>
                                <div class="form-group">
                                    <label>
                                        Enter your Address
                                    </label>
                                    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter Your Address" 
                                        onChange={(event)=>
                                            this.setState({
                                                address:event.target.value
                                            })
                                        }
                                    />
                                </div>
                            </form>
                        </div>
                        <div class="col-sm-4">
                            <form>
                                <div class="form-group">
                                    <label>
                                        Enter your City
                                    </label>
                                    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter Your City" 
                                        onChange={(event)=>
                                            this.setState({
                                                city:event.target.value
                                            })
                                        }
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                    <div class="col-sm-4">
                            <form>
                                <div class="form-group">
                                    <label>
                                        Postel Code / Zip
                                    </label>
                                    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Postel Code / Zip" 
                                        onChange={(event)=>
                                            this.setState({
                                                postelCode:event.target.value
                                            })
                                        }
                                    />
                                </div>
                            </form>
                        </div>
                        <div class="col-sm-4">
                            <form>
                                <div class="form-group">
                                    <label>
                                        Phone Number
                                    </label>
                                    <input type="number" class="form-control" id="exampleInputEmail1"  placeholder="Enter Your Phone Number" 
                                           onChange={(event)=>
                                            this.setState({
                                                pNumber:event.target.value
                                            })
                                        }
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Country</label>
                                <select class="form-control" id="exampleFormControlSelect1"
                                    onChange={(event)=>
                                        this.setState({
                                            country:event.currentTarget.value
                                        })
                                    }
                                >
                                    <option>
                                        
                                    </option>
                                <option>
                                    Pakistan
                                </option>
                                <option>UAE</option>
                                <option>USA</option>
                                <option>Chiana</option>
                                <option>India</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <form>
                                <div class="form-group">
                                    <label>
                                        E-Mail
                                    </label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="Enter Your email@.com" 
                                           onChange={(event)=>
                                            this.setState({
                                                email:event.target.value
                                            })
                                        }
                                    />
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                            </form>
                        </div>
                    </div>
                    <br/><br/>
                    <div class="row">
                        <div class="col-sm-2">
                            <button class="btn" id="cart-btn-2"
                                onClick={()=>history.push("/Components/myCard")}
                            >
                                <img src="https://pngimage.net/wp-content/uploads/2018/05/back-arrow-icon-png-5.png"
                                            alt="avatar"
                                            style = {{height:'20px',paddingRight:"15px"}}
                                            
                                            
                                />
                                Bcak
                            </button>
                        </div><br/>
                        <div class="col-sm-6">

                        </div><br/><br/>
                        <div class="col-sm-2">
                            <button class="btn" id="cart-btn-1"
                                 onClick={()=>history.push("/Components/shoppingItemBody")}
                            >
                                Continue shopping
                            </button>
                        </div><br/><br/><br/>
                        <div class="col-sm-2">
                            <button class="btn" id="cart-btn-8"
                                onClick={()=>
                                    this.props.addressAdditionfuntion(
                                        new AddressClass(
                                            this.state.fName,
                                            this.state.lName,
                                            this.state.address,
                                            this.state.city,
                                            this.state.postelCode,
                                            this.state.pNumber,
                                            this.state.country,
                                            this.state.email,
                                            Math.random()*1000*Math.random()
                                        )
                                    )
                                }
                            >
                                Next Step
                            </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}



export default  connect(null,{addressAdditionfuntion})(addressFile);