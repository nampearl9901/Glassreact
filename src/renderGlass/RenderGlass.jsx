import React, { Component } from 'react'
import { data } from '../data/dataGlasses'
import InforGlass from '../inforGlass/InforGlass'

export default class RenderGlass extends Component {
    state={
        dataGlass:data,
        chooseGlass:"",
    }
    renderlist=()=>{
      return  this.state.dataGlass.map((item)=>{
            return (
                <img
                onClick={()=>{this.chooseGlass(item)}}
                style={
                   {
                    width:`${100/this.state.dataGlass.length}%`,
                    padding:"0px 15px"
                   }
                }
                 src={item.url} alt="" 
                 />
            );
        })
    }
    chooseGlass=(item)=>{
        this.setState({
            chooseGlass:item,
            
        })
        document.querySelector(".info").style.display="block";
    }
  render() {
    return (
      <>
      {this.renderlist()}
      <div style={{
          position: `relative`,
          width:`500px`,
          margin:`auto`
      }} >
        <img src="./glassesImage/model.jpg" alt="" /><img style={{
        position: `absolute`,
        opacity:`0.8`,
        width:"220px",
        top:`150px`,
        right:`140px`,
      }} src={this.state.chooseGlass.url} alt="" />
         <InforGlass data={this.state.chooseGlass}></InforGlass>
      </div>
      </>
    )
  }
}
