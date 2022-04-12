import React, {Component} from "react"
import pizza from './images.jpg'

const Counter={
    fontSize: "82px",
    backgroundColor:"red",
    borderRadius: "20px"
}

const Button = {
    fontSize: "28px",
    padding: "10px",
    backgroundColor:"#FFBA01",
    borderRadius: "10px"
}

const topic = {
    color: "#FFA701"
}

class Pizza extends React.Component{

    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    takeOrder(){
        this.setState({
            count: this.state.count + 1
        })
    }

    cancelOrder(){
        this.setState({
            count: this.state.count - 1
        })
    }


    render(){
        return <div>
            <img src={pizza} width="200"/>
            <h1 style={topic}>Pizza Order Counter</h1>
            <h1 style={Counter}>{this.state.count}</h1>
            <button style={Button} onClick={() => this.takeOrder()}>Take Order</button>
            <br/>
            <br/>
            <button style={Button} onClick={() => this.cancelOrder()}>Cancel Order</button>
        </div>
    }
} 
export default Pizza;