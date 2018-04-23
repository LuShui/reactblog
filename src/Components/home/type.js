import React from 'react'
import './style.css'
export default class TypeComponent extends React.Component{

    render(){
        let  array = [1,2,3,4,5];
        return(
            <div className="stylebox">
                {array.map((item,index)=><BtnCom onfuncclick={this.props.onclickfunc} value={item} key={index.toString()}></BtnCom>)}
            </div>
        );
    }
}

class BtnCom extends React.Component{

    constructor(){
        super();
        this.clickfunc = this.clickfunc.bind(this);
    }

    clickfunc(){
        this.props.onfuncclick(this.props.value)
    }
    render(){
        return(
            <a onClick={this.clickfunc}>{this.props.value}</a>
        );
    }
}
