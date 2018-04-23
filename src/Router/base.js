/**
 * Created by Administrator on 2017/10/30.
 */
import React from 'react'
export default class BaseCompoent extends React.Component{
    render(){
        return(
            <div>{this.props.children}</div>
        )
    }
}