import React from 'react';
import {TableRow,TableRowColumn,} from 'material-ui/Table';


import {Collapse,Well, Grid, Col, Row} from 'react-bootstrap';
const style={
    dateRangeStyle:{
        borderRight:"1px solid #ccc",
        marginTop:"5px"
    },
    dateRangeHeader:{
        marginTop: "0",
        color:"#666666"
    },
    paddingZero:{
        padding:"2px 0px"
    },
    tradeViewDetails:{
        color: "#337ab7",
      },
}
//   import TradeSubChildComponent from './TradeSubChildComponent.jsx';
  class TradeDataRow extends React.Component{

    state={
        openRow:false,
        openDetails:false,
        viewDetailsTxt: "View Details"
    }

    openCollapse=()=>{
        this.setState({openRow:!this.state.openRow});
        console.log('----------row clicked'+this.state.openRow);
        if(this.state.openRow == true){
            this.state.openDetails = false;
            this.state.viewDetailsTxt = "View Details";
        }
    }
    openDetailsCollapse=()=>{
        this.setState({openDetails:!this.state.openDetails});
        console.log('----------row clicked');
        (this.state.openDetails ? this.state.viewDetailsTxt = "View Details" : this.state.viewDetailsTxt = "Hide Details")
        
    }
render(){

    let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
   let FirstPartyName=retrievedUserDetails.username.split('@');
   let partyFinalName=FirstPartyName[1].split('.');
   let partyFinalNameCompany=partyFinalName[0].toUpperCase();
  console.log('--------------------'+partyFinalNameCompany);
  console.log('--------------------'+this.props.data.party2);
   let Counterparty1;
   
   if(this.props.data.party2 == partyFinalNameCompany){
    Counterparty1 = this.props.data.party1;
    console.log(Counterparty1);
   }else{
    Counterparty1 = this.props.data.party2;
   }

   // Type logic

   let tradeCreatedBy = this.props.data.created_by.split('@')[1].split('.')[0].toUpperCase();

let tradeDirection;
if(tradeCreatedBy == partyFinalNameCompany){
tradeDirection = this.props.data.direction;
}else{
tradeDirection = this.props.data.counter_party_direction;
}


    return (
       <div>
        <TableRow onClick={this.openCollapse}>
            <TableRowColumn style={{"verticalAlign":"middle", "whiteSpace":"normal", "width":"120px", "padding": "5px"}}  >{this.props.data.last_update_timestamp}</TableRowColumn>
            <TableRowColumn style={{"verticalAlign":"middle", "whiteSpace":"normal", "width":"120px", "padding": "5px"}} >{this.props.data.trid}</TableRowColumn>
            <TableRowColumn style={{"verticalAlign":"middle", "whiteSpace":"normal", "width":"120px", "padding": "5px"}} > {tradeDirection} </TableRowColumn>
            <TableRowColumn style={{"verticalAlign":"middle", "whiteSpace":"normal", "width":"120px", "padding": "5px"}} > {Counterparty1} </TableRowColumn>
            <TableRowColumn style={{"verticalAlign":"middle", "whiteSpace":"normal", "width":"120px", "padding": "5px"}} > {this.props.data.product_name} </TableRowColumn>
            <TableRowColumn style={{"verticalAlign":"middle", "whiteSpace":"normal", "width":"120px", "padding": "5px"}} > {this.props.data.volume} </TableRowColumn>
            <TableRowColumn style={{"verticalAlign":"middle", "whiteSpace":"normal", "width":"120px", "padding": "5px"}} > {this.props.data.trade_location} </TableRowColumn>
            <TableRowColumn style={{"verticalAlign":"middle", "whiteSpace":"normal", "width":"120px", "padding": "5px"}} > {this.props.data.inco_term} </TableRowColumn>
            
        </TableRow>
        {/* <TableRow >    
        <TableRowColumn colSpan="8"> */}
        
    <Collapse in={this.state.openRow}>
        <Row>
        <Col md={3} style={style.dateRangeStyle}>
           <h6 style={style.dateRangeHeader}>Date Range</h6>
          
           <Col md={4} style={style.paddingZero}>
           <span>Delivery :</span>
           </Col>
           <Col md={8}  style={style.paddingZero}><span>{this.props.data.delivery_date}</span><span>-</span>
           <span>{this.props.data.delivery_date}</span>
           </Col>
           
           <Col md={4} style={style.paddingZero}><span>Laycan :</span></Col>
           <Col md={8} style={style.paddingZero}><span>{this.props.data.laycan_date}</span><span>-</span>
           <span>{this.props.data.laycan_date}</span>
           </Col>
        </Col>
        <Col md={3} style={style.dateRangeStyle}>
        <h6 style={style.dateRangeHeader}>Quality</h6>
      
        <Col md={7} style={style.paddingZero}><span>Quality (API) :</span></Col>
        <Col md={5} style={style.paddingZero}>
        <span>{this.props.data.quality_api}</span></Col>
        <Col md={7} style={style.paddingZero}><span>Quality (SUL) :</span>
        </Col>
        <Col md={5} style={style.paddingZero}>
        <span>{this.props.data.quality_sul}</span>
        </Col>
       
        <Col md={7} style={style.paddingZero}>
        <span>Tolerence :</span>
        </Col>
        <Col md={5} style={style.paddingZero}><span>{this.props.data.tolerance}</span>
        </Col>
        </Col>
        <Col md={6} style={{marginTop:"5px"}}>
        <h6 style={style.dateRangeHeader}>Price</h6>
        <Col md={4}>
        
        <Col md={7} style={style.paddingZero}>
        <span>Price Type :</span>
        </Col>
        <Col md={5} style={style.paddingZero}><span>{this.props.data.price_type}</span>
        </Col>
        <Col md={7} style={style.paddingZero}><span>Index :</span>
        </Col>
        <Col md={5} style={style.paddingZero}><span>{this.props.data.index}</span>
        </Col>
        
        <Col md={7} style={style.paddingZero}><span>Price+UoM :</span>
        </Col>
        <Col md={5} style={style.paddingZero}><span>{this.props.data.price_UoM}</span>
        </Col>
        </Col>
        <Col md={8}>
        <Col md={7} style={style.paddingZero}><span>Total Associate Fee :</span>
        </Col>
        <Col md={5} style={style.paddingZero}><span><b>${this.props.data.associated_fees}</b></span>
        
        </Col>
        <Col md={7} style={style.paddingZero}><span>Total Fee :</span>
        </Col>
        <Col md={5} style={style.paddingZero}><span><b>${this.props.data.total_fee}</b></span>
        </Col>
        </Col>
        </Col>
        <Col md={12} >
        <div className="pull-left"><h2>Current Status: <span style={style.tradeViewDetails}>Vessel Identified</span></h2></div>
        <div className="pull-right"><h2 onClick={this.openDetailsCollapse} style={style.tradeViewDetails}>{this.state.viewDetailsTxt}</h2></div>
        </Col>
       </Row> 
       
      
     </Collapse> 
     <Collapse in={this.state.openDetails} style={{position:"relative", left:"0"}}>
                   <div>
                   <div className="statuscards">
                        {/* card 1 */}
                        <div className="statuscard completed">
                            <div className="thumb">
                               
                            </div>
                            <h3>The Princess
                            <span>XYZ Shipping Co.</span>
                            <span>1M BBLS</span>    
                            </h3>
                            <div className="icon">
                               <i className="fa fa-check-circle fa-3" aria-hidden="true"></i>
                            </div>
                            <div className="date">
                                28 Feb 2018 - 5th March 2018
                            </div>
                        </div>
                        {/* card 2 */}
                        <div className="statuscard pending">
                            <div className="thumb">

                            </div>
                            <h3>Inspector
                                <span>XYZ Shipping Co.</span>
                                <span>1M BBLS</span>    
                            </h3>
                            <div className="icon">
                                <i className="fa fa-check-circle fa-3" aria-hidden="true"></i>
                            </div>
                            <div className="date">
                                28 Feb 2018 - 5th March 2018
                            </div>
                        </div>
                        {/* card 3 */}
                        <div className="statuscard notstarted">
                            <div className="thumb">

                            </div>
                            <h3>Agent
                                <span>XYZ Shipping Co.</span>
                                <span>1M BBLS</span>    
                            </h3>
                            <div className="icon">
                                <i className="fa fa-check-circle fa-3" aria-hidden="true"></i>
                            </div>
                            <div className="date">
                                28 Feb 2018 - 5th March 2018
                            </div>
                        </div>
                    </div>
                   </div>
                </Collapse>
    {/* </TableRowColumn>
    </TableRow> */}
    </div>
    );
}
    
}

export default TradeDataRow;