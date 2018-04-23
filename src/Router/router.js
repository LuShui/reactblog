import React from 'react';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';
import BaseCompoent from './base'
import HomeComponent from '../Components/home/home';
import DetilComponent from '../Components/list/detil/detil'
// import store from '../Redux/store/index';
// import { Provider } from 'react-redux'

export default class IndexComponent extends React.Component{
    render(){
        return(
            // <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={BaseCompoent}>
                        <IndexRoute component={HomeComponent}/>
                        <Route path="/list/:id" component={DetilComponent}></Route>
                    </Route>
                </Router>
            // </Provider>

        );
    }
}
