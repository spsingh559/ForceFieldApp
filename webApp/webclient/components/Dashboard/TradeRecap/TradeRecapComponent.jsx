import React from 'react';
import Paper from 'material-ui/Paper';

import TradeRecapChartComponent from './TradeRecapChartComponent.jsx';


const style={
  paperStyle:{
    width: "574px",
    height: "290px",
    borderRadius: "6px",
    marginLeft:"100px",
    marginTop:"30px",
    backgroundColor:" #ffffff",
    border: "solid 1px #d5d5d5"
  }
}


export default class TradeStatusAndRecapComponent extends React.Component {
  
  state={
    tradeRecapData:[
      
      {
        text:"Mercuria",
        value:8
      },
      {
        text:"Statoil",
        value:2
      },
      {
        text:"BP",
        value:3
      },
      {
        text:"Shell",
        value:4
      },

    ]
  }

  render() {
      return (
        
          <div style={style.paperStyle} zDepth={2} >
         <TradeRecapChartComponent tradeRecapData={this.state.tradeRecapData} />
           </div>
          
      )
    }
  }



