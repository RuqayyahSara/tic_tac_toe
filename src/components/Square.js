import React from "react";
import "../components/square.css";
class Square extends React.Component{
    render(){
        return(
        <div>
        <a href="">
    <div className="square" onClick={(e)=>{this.props.onClick(); e.preventDefault()}}>{this.props.value}</div>
        </a>
        </div>
        )
    }
}

export default Square;