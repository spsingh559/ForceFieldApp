import React from 'react';
import {TableRow,TableRowColumn,} from 'material-ui/Table';

import Divider from 'material-ui/Divider';
import {Collapse,Well, Grid, Col, Row} from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
    } 
    }
//   import TradeSubChildComponent from './TradeSubChildComponent.jsx';
  class InspectorDataRow extends React.Component{

    state={
        openRow:false,
        drid:this.props.data.drid,
        status:this.props.data.status,
        actualQtyLoaded:this.props.data.scheduled_qty_loaded,
        actualQualityApiLoadport:this.props.data.quality_api,
        actualQualitySulLoadport:this.props.data.quality_sul,
        actualToleranceLoadport:this.props.data.tolerance,
        editOptionHandle:false
    }

    openCollapse=()=>{
        this.setState({openRow:!this.state.openRow});
        console.log('----------row clicked');
        
    }
    editOptionHandle=()=>{
     //alert('hewrh');    
     this.setState({editOptionHandle:true})
    }

    handleChangeQtyLoaded=(e)=>{this.setState({actualQtyLoaded:e.target.value})}
    handleChangeQtyApiLoaded=(e)=>{this.setState({actualQualityApiLoadport:e.target.value})}
    handleChangeQtySulLoaded=(e)=>{this.setState({actualQualitySulLoadport:e.target.value})}
    handleChangeQtyToleranceLoaded=(e)=>{this.setState({actualToleranceLoadport:e.target.value})}
    
    handleChangeAgentSubmit=()=>{
        let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
        let getModifyData = {
            drid:this.props.data.drid,
		status:this.state.status,
		actual_qty_loaded:this.state.actualQtyLoaded,
		actual_quality_api_loadport:this.state.actualQualityApiLoadport,
		actual_quality_sul_loadport:this.state.actualQualitySulLoadport,
        actual_tolerance_loadport:this.state.actualToleranceLoadport,
        doc1:"Doc1",
        org:this.props.data.Organization1,
        login:retrievedUserDetails.username

        }
        
        this.props.handleChangeAgentSubmit(getModifyData);
        console.log("---------------------- new data -----",getModifyData);
    }
    backButton=()=>{
        this.setState({editOptionHandle:false})
    }


render(){

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
                    <label htmlFor="">Volume</label>
                    <div className="inlineFiledGroup">
                        
                    <TextField name="actualVolume"  style={{width:"200px"}} onChange={this.handleChangeQtyLoaded} value={this.state.actualQtyLoaded}/>
                    </div>
                </div>
                <div className="formControl">
                    <label htmlFor="">Quality (API)</label>
                    <div className="inlineFiledGroup">
                       
                    <TextField name="actualApi" style={{width:"200px"}} onChange={this.handleChangeQtyApiLoaded} value={this.state.actualQualityApiLoadport} />
                    </div>
                </div>
                <div className="formControl">
                    <label htmlFor="">Quality (SUL)</label>
                    <div className="inlineFiledGroup">
                       
                    <TextField name="actualSul"  style={{width:"200px"}} onChange={this.handleChangeQtySulLoaded} value={this.state.actualQualitySulLoadport}/>
                    </div>
                </div>  
                <div className="formControl">
                    <label htmlFor="">Tolerance</label>
                    <div className="inlineFiledGroup">
                       
                    <TextField name="actualTolerance" style={{width:"200px"}} onChange={this.handleChangeQtyToleranceLoaded} value={this.state.actualToleranceLoadport}/>
                    </div>
                </div>                           
                                  
                
                <br />
                 <RaisedButton label="Save Data" secondary={true} onTouchTap={this.handleChangeAgentSubmit} />           
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
            <TableRowColumn style={{width:'10%' , paddingTop: '15px'}}>{this.props.data.Organization1} </TableRowColumn>
            <TableRowColumn style={{width:'10%' , paddingTop: '15px'}} > {this.props.data.vessel_name} </TableRowColumn>
            <TableRowColumn style={{width:'10%' , paddingTop: '15px'}}> {this.props.data.shipping_company} </TableRowColumn>
            <TableRowColumn style={{width:'10%' , paddingTop: '15px'}}> {this.props.data.cargo_loading_date} </TableRowColumn>
            <TableRowColumn style={{width:'10%' , paddingTop: '15px'}}> {this.props.data.loadport} </TableRowColumn>
            <TableRowColumn style={{width:'10%', paddingTop: '15px'}}> {this.props.data.laycan_loadport} </TableRowColumn>
            <TableRowColumn style={{width:'10%', paddingTop: '15px'}}> {this.props.data.scheduled_qty_loaded} </TableRowColumn>
            
        </TableRow>
       
       <Collapse in={this.state.openRow} style={{position:"relative", left:"0"}}>
                   
                   <div>
                       <div style={style.leftDetails}>
                         <div>
                           <div style={ style.images}>
                                <img src="images/ship.png" style={{borderRadius: '6px',width: '183px',height: '103px'}}/>    
                           </div>  

                            <div style={style.textDataBox}>
                                <h1 style={style.text}>{this.props.data.vessel_name}</h1>
                                <h5>{this.props.data.scheduled_qty_loaded}</h5>
                                
                            </div> 
                            <div style={{paddingTop:'140px',marginLeft: '21px',marginRight: '21px'}}>
                                <Divider />   
                            </div> 
                        </div>  
                        <div style={{height:'103px'}}>
                             <table style={{width: '100%',marginLeft: '21px',marginRight: '21px',marginTop: '15px',height: '21px',fontSize: '16px',color: '#666666'}}>
                                 <thead>
                                    <tr>
                                        <th style={{width: '40%'}}> Quality </th>
                                        <th style={{width: '30%'}}> Tolerance </th>
                                        <th style={{width: '30%'}}> Volume</th>
                                    </tr> 
                                  </thead>   
                                  <tbody >
                                  <tr>
                                        <td> Quality (API): {this.props.data.quality_api}</td>
                                        <td> +/-{this.props.data.tolerance}%</td>
                                        <td> {this.props.data.scheduled_qty_loaded}</td>
                                    </tr>        
                                    <tr>
                                        <td> Quality (SUL): {this.props.data.quality_sul}</td>
                                        <td> </td>
                                        <td> </td>
                                    </tr>                                                                    
                                  </tbody>      
                             </table>       
                            <div style={{paddingTop:'60px',marginLeft: '21px',marginRight: '21px'}}>
                                <Divider />   
                            </div> 
                        </div> 
                        <div style={{height:'103px'}}>
                        <table style={{width: '100%',marginLeft: '21px',marginRight: '21px',marginTop: '50px',height: '21px',fontSize: '16px',color: '#666666'}}>
                                <caption style={style.caption}>Actual Summary</caption>
                                 <thead>
                                    <tr>
                                        <th style={{width: '40%'}}> Quality </th>
                                        <th style={{width: '30%'}}> Tolerance </th>
                                        <th style={{width: '30%'}}> Volume</th>
                                    </tr> 
                                  </thead>   
                                  <tbody >
                                  <tr>
                                        <td> Quality (API): {this.props.data.actual_quality_api_loadport} <span style={style.iconsmall}> <i className="fa fa-check-circle fa-1x" aria-hidden="true"></i></span></td>
                                        <td> +/-{this.props.data.actual_tolerance_loadport}% <span style={style.iconsmall}><i className="fa fa-check-circle fa-1x" aria-hidden="true"></i></span></td>
                                        <td> {this.props.data.actual_qty_loaded} <span style={style.iconsmall}><i className="fa fa-check-circle fa-1x" aria-hidden="true"></i></span></td>
                                    </tr>        
                                    <tr>
                                        <td> Quality (SUL): {this.props.data.actual_quality_sul_loadport} <span style={style.iconsmall}><i className="fa fa-check-circle fa-1x" aria-hidden="true"></i></span> </td>
                                        <td> </td>
                                        <td> </td>
                                    </tr>                                                                    
                                  </tbody>      
                             </table> 
                         </div>                                              
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

export default InspectorDataRow;