import React from 'react';
import {TableRow,TableRowColumn,} from 'material-ui/Table';

import Divider from 'material-ui/Divider';
import {Collapse,Well, Grid, Col, Row} from 'react-bootstrap';
import FlatButton from 'material-ui/FlatButton';

import Axios from 'axios';
const style={
    dateRangeStyle:{
        borderRight:"1px solid #ccc",
        marginTop:"5px"
    }
}
  class NewRequestDataRow extends React.Component{


    handleClick = () =>{
//alert('Hello');
let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
console.log('----------------User Login Details'+retrievedUserDetails);
let dataObj = {
    drid:this.props.data.drid,
    status:'ConfirmedParcel',
    login:retrievedUserDetails.username
}
   this.props.approveButton(dataObj);

    }

render(){

    return (
       <div>
        <TableRow >
        <TableRowColumn style={{width:'10%', paddingTop: '15px'}}>{this.props.data.Organization1}</TableRowColumn>
       <TableRowColumn style={{width:'10%' , paddingTop: '15px'}}>{this.props.data.drid} </TableRowColumn>
       <TableRowColumn style={{width:'10%' , paddingTop: '15px'}} > {this.props.data.volume_type} </TableRowColumn>
       <TableRowColumn style={{width:'10%' , paddingTop: '15px'}}> {this.props.data.deviation} </TableRowColumn>
       <TableRowColumn style={{width:'10%' , paddingTop: '15px'}}> {this.props.data.loadport} </TableRowColumn>
       <TableRowColumn style={{width:'10%' , paddingTop: '15px'}}> {this.props.data.discharge_port} </TableRowColumn>
       <TableRowColumn style={{width:'10%', paddingTop: '15px'}}> {this.props.data.vessel_move_startdate_dischargeport} </TableRowColumn>
       <TableRowColumn style={{width:'10%', paddingTop: '15px'}}> {this.props.data.vessel_name} </TableRowColumn>
       <TableRowColumn style={{width:'10%', paddingTop: '15px'}}> <FlatButton onClick={this.handleClick} label="Accept" primary={true} /> </TableRowColumn>
         
        </TableRow>

    </div>
    );
}
    
}

export default NewRequestDataRow;