import React, {Component} from "react"
import pizza from './pizza.jpg'

const Counter={
    fontSize: "82px",
    backgroundColor:"black",
    borderRadius: "20px"
}

class Pizza extends React.Component{
    render(){
        return <div>
            <img src={pizza} width="300"/>
            <h1>Pizza Order Counter</h1>
            <h1 style={Counter}>0</h1>
            <button>Take Order</button>
            <button>Cancel Order</button>
        </div>
    }
} 
export default Pizza;