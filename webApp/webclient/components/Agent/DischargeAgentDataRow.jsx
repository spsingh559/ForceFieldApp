import React from 'react';
import {TableRow,TableRowColumn,} from 'material-ui/Table';

import Divider from 'material-ui/Divider';
import {Collapse,Well, Grid, Col, Row} from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

import Axios from 'axios';
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
    editIcon:{
        fontSize:"50px",
        color:"#d4605e",
    },
    leftDetails:{
        float:'left',
        width: '446px',
        height: '560px',
        borderRadius: '6px',
        backgroundColor: '#ffffff',
        border: 'solid 1px #d5d5d5',
        marginLeft: '25px',
        marginTop: '50px',
        marginBottom: '42px'
      },
      rightDetails:{
        float:'left',
        marginLeft: '100px',
        width: '683px',
        height: '560px',
        borderRadius: '6px',
        marginTop: '50px',
        marginBottom: '42px'
      },
      success:{
        width: '539px',
        opacity: '0.4',
        height: '48px',
        fontFamily: 'Helvetica',
        fontSize: '40px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#1f497d',
        
          },
     icon:{
        paddingTop: '210px',
       // color: '#6ac259',
        paddingLeft: '230px',
        
     },
     iconsmall:{
        color: '#6ac259',   
     },
     images:{
        paddingTop: '21px',
        paddingLeft: '21px',
        borderRadius: '6px',
        width:'183px',
        height:'103px',
        float:'left'
        
     },
     textDataBox:{
        float:'left' ,
        paddingTop: '21px',
        borderRadius: '6px',
        width:'183px',
        height:'103px',
        paddingLeft: '41px' 
     },
 text:{
        fontSize: '20px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal'

      },
    caption:{  
      fontSize: '18px',
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
      color: '#1f497d'
    } ,
    agentDetails:{
        width: "40%",
    display: "inline-block",
    padding: "6px 0px"
    }
    }
//   import TradeSubChildComponent from './TradeSubChildComponent.jsx';
  class DischargeAgentDataRow extends React.Component{
    state={
        openRow:false,
        drid:this.props.data.drid,
        status:this.props.data.status,
        actualLaycanLoadedFrom:new Date(this.props.data.laycan_dischargeport.split("-")[0]),
        actualLaycanLoadedTo:new Date(this.props.data.laycan_dischargeport.split("-")[1]),
        actualCargoLoadedFrom:new Date(this.props.data.cargo_unloading.split("-")[0]),
        actualCargoLoadedTo:new Date(this.props.data.cargo_unloading.split("-")[1]),
        actualVesselLoadedFrom:new Date(this.props.data.vessel_move_startdate_dischargeport.split("-")[0]),
        actualVesselLoadedTo:new Date(this.props.data.vessel_move_startdate_dischargeport.split("-")[1]),
        actualVolumeLoadedFrom:this.props.data.tolerance,
        actualVolumeLoadedTo:"",
        editOptionHandle:false
    }

    openCollapse=()=>{
        this.setState({openRow:!this.state.openRow});
        console.log('----------row clicked');
        
    }
    editOptionHandle=()=>{
    //  alert('hewrh');    
     this.setState({editOptionHandle:true})
    }

    handleChangeLaycanLoadedFrom=(e,date)=>{this.setState({actualLaycanLoadedFrom:date})}
    handleChangeLaycanLoadedTo=(e,date)=>{this.setState({actualLaycanLoadedTo:date})}
    handleChangeCargoLoadedFrom=(e,date)=>{this.setState({actualCargoLoadedFrom:date})}
    handleChangeCargoLoadedTo=(e,date)=>{this.setState({actualCargoLoadedTo:date})}
    handleChangeVesselLoadedFrom=(e,date)=>{this.setState({actualVesselLoadedFrom:date})}
    handleChangeVesselLoadedTo=(e,date)=>{this.setState({actualVesselLoadedTo:date})}
    handleChangeVolumeLoadedFrom=(e,date)=>{this.setState({actualVolumeLoadedFrom:date})}
    handleChangeVolumeLoadedTo=(e,date)=>{this.setState({actualVolumeLoadedTo:date})}
    
    handleChangeDischargeAgentSubmit=()=>{
        let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
        let getModifyData = {
            drid:this.props.data.drid,
		status:this.state.status,
		actual_laycan_dischargeport:this.formatDate(this.state.actualLaycanLoadedFrom)+"-"+this.formatDate(this.state.actualLaycanLoadedTo),
		actual_cargo_unloading:this.formatDate(this.state.actualCargoLoadedFrom)+"-"+this.formatDate(this.state.actualCargoLoadedTo),
        actual_vessel_move_dischargeport:this.formatDate(this.state.actualVesselLoadedFrom)+"-"+this.formatDate(this.state.actualVesselLoadedTo),
        org:this.props.data.Organization1,
        login:retrievedUserDetails.username

           
		//actual_tolerance_loadport:this.state.actualToleranceLoadport

        }
        console.log("---------------------- new data -----",getModifyData);
        this.props.handleChangeDischargeAgentSubmit(getModifyData);
       
    }
    formatDate = (date) => { 
        if(date !== ""){
          return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
          }
      }
      backButton=()=>{
        this.setState({editOptionHandle:false})
    }

render(){

    console.log("----------------Date"+this.state.actualCargoLoadedFrom)
    let editOption;
    if(this.state.editOptionHandle == false){
        editOption = <div style={style.icon}>
        <i className="fa fa-pencil-square-o" style={style.editIcon} onClick={this.editOptionHandle} aria-hidden="true"></i>
 </div>
    }else{

        editOption = <div className="createParcel">
        <h4>{this.props.data.drid}</h4> 
        <hr/>
        <div className="parcelForm">
            <form>
                
                
                <div className="formControl">
                    <label htmlFor="">Discharge Laycan</label>
                    <div className="inlineFiledGroup">
                        
                    <DatePicker hintText="Start" style={{width:"150px"}}  value={this.state.actualLaycanLoadedFrom}  textFieldStyle={{width:"145px"}} onChange={this.handleChangeLaycanLoadedFrom}  />
                                    <DatePicker hintText="End" style={{width:"100px"}} value={this.state.actualLaycanLoadedTo}  textFieldStyle={{width:"150px"}} onChange={this.handleChangeLaycanLoadedTo}/>
                    </div>
                </div>
                <div className="formControl">
                    <label htmlFor="">Discharge Cargo Load</label>
                    <div className="inlineFiledGroup">
                       
                    <DatePicker hintText="Start" style={{width:"150px"}} value={this.state.actualCargoLoadedFrom}    textFieldStyle={{width:"145px"}} onChange={this.handleChangeCargoLoadedFrom}  />
                                    <DatePicker hintText="End" value={this.state.actualCargoLoadedTo}  style={{width:"100px"}} textFieldStyle={{width:"150px"}} onChange={this.handleChangeCargoLoadedTo}/>
                    </div>
                </div>
                <div className="formControl">
                    <label htmlFor="">Discharge Vessel Move</label>
                    <div className="inlineFiledGroup">
                       
                    <DatePicker hintText="Start" style={{width:"150px"}}  value={this.state.actualVesselLoadedFrom}  textFieldStyle={{width:"145px"}} onChange={this.handleChangeVesselLoadedFrom}  />
                                    <DatePicker hintText="End" value={this.state.actualVesselLoadedTo}  style={{width:"100px"}} textFieldStyle={{width:"150px"}} onChange={this.handleChangeVesselLoadedTo}/>
                    </div>
                </div>  
                {/* <div className="formControl">
                    <label htmlFor="">Volume</label>
                    <div className="inlineFiledGroup">
                       
                    <DatePicker hintText="Start" style={{width:"150px"}}   textFieldStyle={{width:"145px"}} onChange={this.handleChangeVolumeLoadedFrom}  />
                                    <DatePicker hintText="End" style={{width:"100px"}} textFieldStyle={{width:"150px"}} onChange={this.handleChangeVolumeLoadedTo}/>
                    </div>
                </div>                            */}
                                  
                
                <br />
                 <RaisedButton label="Save Data" secondary={true} onTouchTap={this.handleChangeDischargeAgentSubmit} />                     
                 <RaisedButton label="Back" style={{marginLeft:"10px"}} secondary={true} onTouchTap={this.backButton} />             
            </form>  
        </div>
    </div>
    }
    return (
       <div>
        <TableRow onTouchTap={this.openCollapse}>
            <TableRowColumn style={{width:'10%', paddingTop: '15px'}}>{this.props.data.drid}
            
             </TableRowColumn>
            {/* <TableRowColumn style={{width:'10%' , paddingTop: '15px'}}>{this.props.data.appointingCo} </TableRowColumn>
            <TableRowColumn style={{width:'10%' , paddingTop: '15px'}} > {this.props.data.vessel_name} </TableRowColumn>
            <TableRowColumn style={{width:'10%' , paddingTop: '15px'}}> {this.props.data.shipping_company} </TableRowColumn>
            <TableRowColumn style={{width:'10%' , paddingTop: '15px'}}> {this.props.data.loadDate} </TableRowColumn>
            <TableRowColumn style={{width:'10%' , paddingTop: '15px'}}> {this.props.data.location} </TableRowColumn>
            <TableRowColumn style={{width:'10%', paddingTop: '15px'}}> {this.props.data.laycan} </TableRowColumn>
            <TableRowColumn style={{width:'10%', paddingTop: '15px'}}> {this.props.data.capacity} </TableRowColumn> */}

<TableRowColumn style={{width:'10%' , paddingTop: '15px'}}>{this.props.data.Organization1}</TableRowColumn>
            <TableRowColumn style={{width:'10%' , paddingTop: '15px'}} > {this.props.data.vessel_name} </TableRowColumn>
            <TableRowColumn style={{width:'10%' , paddingTop: '15px'}}> {this.props.data.shipping_company} </TableRowColumn>
            <TableRowColumn style={{width:'10%' , paddingTop: '15px'}}> {this.props.data.cargo_loading_date} </TableRowColumn>
            <TableRowColumn style={{width:'10%' , paddingTop: '15px'}}> {this.props.data.loadport} </TableRowColumn>
            <TableRowColumn style={{width:'10%', paddingTop: '15px'}}> {this.props.data.laycan_loadport} </TableRowColumn>
            <TableRowColumn style={{width:'10%', paddingTop: '15px'}}> {this.props.data.volume_type} </TableRowColumn>
            
        </TableRow>
       
       <Collapse in={this.state.openRow} style={{position:"relative", left:"0"}}>
                   
                   <div>
                       <div style={style.leftDetails}>
                         <div>
                           <div style={ style.images}>
                                <img src="images/ship.png" style={{borderRadius: '6px',width: '183px',height: '103px'}}/>    
                           </div>  

                            <div style={style.textDataBox}>
                                <h1 style={style.text}>The Princess</h1>
                                <h5>100BBL</h5>
                                
                            </div> 
                            <div style={{paddingTop:'140px',marginLeft: '21px',marginRight: '21px'}}>
                                <Divider />   
                            </div> 
                        </div>  
                        <Col xs={12}>
                        <h4>Dates</h4>
        <h5><span style={style.agentDetails}>Discharge Laycan:</span>{this.props.data.laycan_dischargeport}</h5>
        <h5><span style={style.agentDetails}>Discharge Cargo Load:</span>{this.props.data.cargo_unloading}</h5>
        <h5><span style={style.agentDetails}>Discharge Vessel Move:</span>{this.props.data.vessel_move_startdate_dischargeport}</h5>
       </Col>
       <div className="clearfix"></div>
       <div className="line">
                                 
                            </div> 
        <Col xs={12}>
        <h4>Actual Summary</h4>
        <h5><span style={style.agentDetails}>Discharge Laycan:</span> {this.props.data.actual_laycan_dischargeport}  <i className="fa fa-check-circle fa-3 icon" style={style.iconColor}  aria-hidden="true"></i></h5>
        <h5><span style={style.agentDetails}>Discharge Cargo Load:</span>  {this.props.data.actual_cargo_unloading_startdate}  <i className="fa fa-check-circle fa-3 icon" style={style.iconColor}  aria-hidden="true"></i></h5>
        <h5><span style={style.agentDetails}>Discharge Vessel Move:</span>  {this.props.data.actual_vessel_move_dischargeport} <i className="fa fa-check-circle fa-3 icon" style={style.iconColor}  aria-hidden="true"></i></h5>
        {/* <h5><span style={style.agentDetails}>Volume:</span> {this.props.data.volume_type} <i className="fa fa-check-circle fa-3 icon" style={style.iconColor}  aria-hidden="true"></i></h5> */}
       </Col>                                            
                       </div>
                       
                       <div style={style.rightDetails}>
                       
                        
                        {editOption}
                        {/* <p style={style.success}>
                            Verification Successfuly Done!</p> */}
                       </div>                       
                   </div>
      </Collapse>
    </div>
    );
}
    
}

export default DischargeAgentDataRow;