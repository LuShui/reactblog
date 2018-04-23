import React from 'react'
import ListComponent from '../list/list'
import TypeComponent from './type'
import { connect } from 'react-redux';
import {baseAction} from '../../Redux/actions/index'

var typeindex = 1;
class HomeComponent extends React.Component{

    constructor(){
        super();
        this.clickfunc = this.clickfunc.bind(this);
    }

    componentDidMount(){
        let {dispatch} = this.props;
        dispatch(baseAction(typeindex));
    }

    clickfunc(type){
        let {dispatch} = this.props;
        typeindex = type;
        dispatch(baseAction(typeindex));
    }

    render(){
        let array = this.props.array;
        return(
            <div>
                <TypeComponent onclickfunc={this.clickfunc}/>
                <ListComponent array={array}/>
            </div>
        )
    }
}


function soure(state) {
    return{
        array:state.array
    }
}
export default connect(soure)(HomeComponent);
