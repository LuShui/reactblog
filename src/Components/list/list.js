/**
 * Created by Administrator on 2017/10/30.
 */
import React from 'react'
import './style.css'
import {  browserHistory } from 'react-router';


class ListComponent extends React.Component{

    render(){
        let array = [1,2,3,4,5,6,7,8];//this.props.array;
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
        console.log(json)
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
