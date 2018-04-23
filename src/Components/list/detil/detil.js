import React from 'react'
import './style.css'

export default class DetilComponent extends React.Component{
    constructor(){
        super();
        this.createMarkup = this.createMarkup.bind(this);
        this.state  = {
            'ctn':{}
        }
    }
    componentDidMount(){
        let parse = this.props.params;
        let http ='http://lushui.space/tpnote/index.php/home/home/getdetil';
            let from = new FormData();
            from.append('id',parse.id);
            fetch(http, {
                method: 'POST',
                body: from
            }).then(function (res) {
                return res.json();
            }).then((res)=>{
                if (res.code === 1){
                    this.setState({
                        'ctn':res.ctn
                    });
                }
            });
    }

    createMarkup() {
        let json = this.state;
        return {__html: json.ctn.ctn};
    }

    render(){
        return(
            <div dangerouslySetInnerHTML={this.createMarkup()}></div>
        );
    }
}