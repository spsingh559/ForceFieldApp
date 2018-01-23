import React from 'react';
import {TableRow,TableRowColumn,} from 'material-ui/Table';

import Divider from 'material-ui/Divider';
import {Collapse,Well, Grid, Col, Row} from 'react-bootstrap';
const style={
    dateRangeStyle:{
        borderRight:"1px solid #ccc",
        marginTop:"5px"
    }
}
  class OngoingDataRow extends React.Component{


render(){

    return (
       <div>
        <TableRow >
        {/* <TableRowColumn style={{width:'10%', paddingTop: '15px'}}>{this.props.parcelData.appointingCo}</TableRowColumn>
       <TableRowColumn style={{width:'10%' , paddingTop: '15px'}}>{this.props.data.drid} </TableRowColumn>
       <TableRowColumn style={{width:'10%' , paddingTop: '15px'}} > {this.props.data.vessel} </TableRowColumn>
       <TableRowColumn style={{width:'10%' , paddingTop: '15px'}}> {this.props.data.deviation} </TableRowColumn>
       <TableRowColumn style={{width:'10%' , paddingTop: '15px'}}> {this.props.data.loadPort} </TableRowColumn>
       <TableRowColumn style={{width:'10%' , paddingTop: '15px'}}> {this.props.data.dischargePort} </TableRowColumn>
       <TableRowColumn style={{width:'10%', paddingTop: '15px'}}> {this.props.data.date} </TableRowColumn>
       <TableRowColumn style={{width:'10%', paddingTop: '15px'}}> {this.props.data.vessel} </TableRowColumn> */}
         <TableRowColumn style={{width:'10%', paddingTop: '15px'}}>{this.props.data.Organization1}</TableRowColumn>
       <TableRowColumn style={{width:'10%' , paddingTop: '15px'}}>{this.props.data.drid} </TableRowColumn>
       <TableRowColumn style={{width:'10%' , paddingTop: '15px'}} > {this.props.data.volume_type} </TableRowColumn>
       <TableRowColumn style={{width:'10%' , paddingTop: '15px'}}> {this.props.data.deviation} </TableRowColumn>
       <TableRowColumn style={{width:'10%' , paddingTop: '15px'}}> {this.props.data.loadport} </TableRowColumn>
       <TableRowColumn style={{width:'10%' , paddingTop: '15px'}}> {this.props.data.discharge_port} </TableRowColumn>
       <TableRowColumn style={{width:'10%', paddingTop: '15px'}}> {this.props.data.vessel_move_startdate_dischargeport} </TableRowColumn>
       <TableRowColumn style={{width:'10%', paddingTop: '15px'}}> {this.props.data.vessel_name} </TableRowColumn>
       <TableRowColumn style={{width:'10%', paddingTop: '15px'}}> {this.props.data.status} </TableRowColumn>
         
        </TableRow>

    </div>
    );
}
    
}

export default OngoingDataRow;