import React, { Component } from 'react'

export default class InforGlass extends Component {
  render() {
    return (
      <div style={
        {  
            position: `absolute`,
            width:"96%",
            height:"30%",
            bottom:`1%`,
            left:`2%`,
            background: `orange`,
            opacity:` 0.7`,
            display:`none`,
        }
      } className="info">
        <nav >
            <ul>
                <li><h2>{this.props.data.name} <span style={{color:"red"}}>{this.props.data.price}$</span></h2></li>
                <li><b>{this.props.data.desc}</b></li>
            </ul>
        </nav>
      </div>
    )
  }
}
