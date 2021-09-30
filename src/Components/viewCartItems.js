import React, { Component } from 'react';
import './viewIcons.css';
import history from '../Routing/history';
class viewCartItems extends Component {
    render() {
        return (
            <React.Fragment>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="/">Shopping Card Body</a>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                            <li class="nav-item">
                            <i class="fa fa-cart-plus" id="shopping-cart-icon"
                                 onClick={()=>history.push("/Components/myCard")}
                            ></i>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Back</a>
                            </li>
                            </ul>
                        </div>
                    </nav>
            </React.Fragment>
        );
    }
}
export default viewCartItems;