/**
 * Created by Administrator on 2017/10/30.
 */
import React from 'react'
import './style.css'
import {  browserHistory } from 'react-router';


class ListComponent extends React.Component{

    render(){
        let array = this.props.array;
        return(
            <div>
                {array.map((item,index)=><LiComponent value={item} key={index.toString()}/>)}
            </div>
        )
    }
}

class LiComponent extends React.Component{
    constructor(){
        super();
        this.onclickfunc = this.onclickfunc.bind(this);
    }

    onclickfunc(){
        let json = this.props.value;
        browserHistory.push('/list/'+ json.id);
    }

    render(){
        return(
            <li onClick={this.onclickfunc}>
                {this.props.value.des}
            </li>
        )
    }
}

export default ListComponent;
