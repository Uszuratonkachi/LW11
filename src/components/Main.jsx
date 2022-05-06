import './../css/Main.css';
import React from "react";
import {NavLink} from "react-router-dom";

class Main extends React.Component {
    render() {
        return (
            <div className='item'>
                <NavLink to="/items" className="itemname1">
                    <img src={this.props.img}/>
                    <div className='itemName'>{this.props.name}</div>
                </NavLink>
            </div>
        );
    }
}

export default Main;