import React from 'react';

class Demo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            width:100,
            height: 100,
            background: 'red'
        }
    }
    widthHandle(e){
        this.setState({
            width: e.target.value
        });
    }
    heightHandle(e){
        this.setState({
            height: e.target.value
        });
    }
    backgroundHandle(e){
        this.setState({
            background: e.target.value
        });
    }
    render(){
        const {width,height ,background} = this.state;
        const styleParam = {
            width,
            height,
            background,
            marginTop:'20px'
        }
        return(
            <div>
                <div>宽：<input onChange={(e) =>this.widthHandle(e)} /></div>
                <div>高：<input onChange={(e) =>this.heightHandle(e)} /></div>
                <div>背景色：<input onChange={(e) =>this.backgroundHandle(e)} /></div>
                <div style={styleParam}>我是小框框</div>
            </div>
        )
    }
}

export default Demo;