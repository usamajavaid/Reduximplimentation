import React, { Component } from 'react';
import ViewComponents from '../src/View/viewAllComponents'; 
import {Provider} from 'react-redux';
import store from '../src/Stores/store';
// import Router from '../src/Routing/routingFileShopping';
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {  };
  // }
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
        <div>
          <ViewComponents/>
          {/* <Router/> */}
        </div>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;