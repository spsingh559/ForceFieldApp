import React from 'react';
import {TableRow,TableRowColumn,} from 'material-ui/Table';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {Collapse,Well, Grid, Col, Row} from 'react-bootstrap';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    },
    deviationDetails:{
       padding:"40px",
       paddingTop:"0",
       display:"felx",
       felxDirection:"column",
       justifyContent:"center"
    },

    deviationitem:{
        fontSize:"18px",
        width:"50%",
        boxShadow:"2px 2px 5px #ccc",
        padding:"10px",
        margin:"0 auto"
    },

    deviationitemspan:{
        fontSize:"13px",
        display:"block",
        color:"rgb(31, 73, 125)"
    }
};

function handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
  }

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
    completeTxt:{
        width:"170px",
        textAlign:"center",
        margin: "10px 25px"
    },
    pendingTxtColor:{
        width:"170px",
        textAlign:"center",
        margin: "10px 25px",
        color:"#ea0101"
    },
    iconColor:{
        color:"green"
    }
}
//   import TradeSubChildComponent from './TradeSubChildComponent.jsx';
  class ParcelPendingDataRow extends React.Component{
    
    state={
        openRow:false,
        open:false,
        port:'',
        deviate:false,

        value: "",
        agentValue:'',
        inspectorValue:'',
        deviateViewStatus:false,
        scheduled_qty: 0,
        laycan: "",
        laycanDateFrom:'',
        laycanDateTo:'',
        vesselDateFrom:'',
        vesselDateTo:'',
        cargoDateTo:'',
        cargoDateFrom:'',
        newPort:'',
        trID:''
    }

    openCollapse=()=>{
        this.setState({openRow:!this.state.openRow});
        console.log('----------row clicked');
        
    }
    openMOdal=()=>{
        this.setState({open:true});
    }
    handleClose=()=>{
        this.setState({open:false, deviate:true})
    }
    handlePort = (event, index, value) => this.setState({port:value});

    handleChange = (event, index, value) => this.setState({value});

    handleChangeTrID = (event, index, value) => this.setState({trID:value});

    handlePortChange = (event, index, v) => this.setState({newPort:v});

    handleAgentChange = (event, index, v) => this.setState({agentValue:v});

    handleInspectorChange = (event, index, v) => this.setState({inspectorValue:v});

    formatDate = (date) => { 
    if(date !== ""){
        return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
        }
    }

    onaddvolume = (e) => {
    this.setState({scheduled_qty:e.target.value})        
    }

    
    handleChangeLaycanDateFrom = (event, date) => this.setState({laycanDateFrom: date});
    handleChangeLaycanDateTo = (event, date) => this.setState({laycanDateTo: date});
    handleChangeVesselDateFrom = (event, date) => this.setState({vesselDateFrom: date});
    handleChangeVesselDateTo = (event, date) => this.setState({vesselDateTo: date});
    handleCargoLoadDateFrom=(event,date)=>this.setState({cargoDateFrom: date});
    
    handleCargoLoadToFrom=(event,date)=>this.setState({cargoDateTo: date});
    
    saveDataFlow2=()=>{
        // var flow2Obj={
        //     laycan_loadport:this.formatDate(this.state.laycanDateFrom)+"-"+ this.formatDate(this.state.laycanDateTo),
        //     vessel_move_loadport:this.formatDate(this.state.vesselDateFrom)+"-"+ this.formatDate(this.state.vesselDateTo),
        //     cargo_loading:this.formatDate(this.state.cargoDateFrom)+"-"+ this.formatDate(this.state.cargoDateTo),
        //     scheduled_qty_loaded:this.state.scheduled_qty+" "+this.state.value,
        //     inspector_loadport:this.state.inspectorValue,
        //     shippingagency_loadport:this.state.agentValue,
        //     deviateToPort: this.state.newPort,
        // }
        var flow2Obj={
            drid:this.props.data.drid,
            status:this.props.data.status,
            deviated_parcel_ID:'DV'+ Date.now(),
            deviation_port:this.state.newPort,
            deviation_qty :this.state.scheduled_qty+" "+this.state.value,
            deviation_laycandate:this.formatDate(this.state.laycanDateFrom)+"-"+ this.formatDate(this.state.laycanDateTo),
            orgName:this.props.data.Organization1,
        }
       
        console.log('---------saved data in BuyTradeDetail Comp--------');
        console.log(flow2Obj)
        this.props.saveDataFlow2(flow2Obj);
    }

render(){
    console.log(this.props.data)
    let CollapseData;
    var deviationButton;
    if(this.props.data.status!="Planned"){
        deviationButton=[ <FloatingActionButton mini={true} >
            <ContentAdd onTouchTap={this.openMOdal}/>
          </FloatingActionButton>]
    }

    const actionsButton = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.handleClose}
        />,
        <FlatButton
          label="Deviate"
          primary={true}
          keyboardFocused={true}
          onClick={this.saveDataFlow2}

        />,
      ];
    console.log('---------------Status---------------------')
    console.log(this.props.data.status);
   if(this.props.data.status!="Planned"){
        CollapseData=[
        <Collapse in={this.state.openRow} style={{position:"relative", left:"0"}}>
        <div>
            <Row>
        <Col xs={12}>
        

        <Tabs>
    <Tab label="Port A" >
            <h2>Load</h2>
      <div>
      <Row>
        
             
        <Col xs={5}>
        <div className="parcel-status-card">
        <div className="statuscard-left">
        <div className="profileImg"></div>
        <div className="profileTxt">
        <span><b>Inspector</b></span>
        <span>{this.props.data.inspector_loadport}</span>
        <span>{this.props.data.loadport}</span>
            </div>
        </div>
        <div className="pull-right statuscard completed">
        <div className="icon">
                    <i className="fa fa-check-circle fa-3" aria-hidden="true"></i>
                </div>
        </div>
        <div className="clearfix"></div>
        <div className="line"></div>
        <Col xs="4">
        <h4>Quality</h4>
       <h5>Quality (API): {this.props.data.quality_api} </h5>
       <h5>Quality (SUI):  {this.props.data.quality_sul}</h5>
        </Col>
        <Col xs="4">
        <h4>Tolerence</h4>
       <h5>{"+/-" + this.props.data.tolerance + "%"}</h5>
        </Col>
        <Col xs="4">
        <h4>Volume</h4>
        <h5>{this.props.data.actual_qty_loaded}</h5>
        </Col>
        <div className="clearfix"></div>
        <div className="line"></div>
        <h3>Account Summary</h3>
        <Col xs="5">
        <h4>Quality</h4>
       <h5>Quality (API):  {this.props.data.actual_quality_api_loadport} <i className="fa fa-check-circle fa-3" 
        style={style.iconColor} aria-hidden="true"></i></h5>
       <h5>Quality (SUI):  {this.props.data.actual_quality_sul_loadport} <i className="fa fa-check-circle fa-3 icon" style={style.iconColor}  aria-hidden="true"></i></h5>
        </Col>
        <Col xs="3">
        <h4>Tolerence</h4>
       <h5>{"+/-" + this.props.data.tolerance + "%"}<i className="fa fa-check-circle fa-3 icon" style={style.iconColor}  aria-hidden="true"></i></h5>
        </Col>
        <Col xs="4">
        <h4>Volume</h4>
        <h5>{this.props.data.actual_qty_loaded}<i className="fa fa-check-circle fa-3 icon" style={style.iconColor}  aria-hidden="true"></i></h5>
        </Col>
       </div>
       
        </Col>
        <Col xs={5}>
        {/* card 2 */}
        <div className="parcel-status-card">
        <div className="statuscard-left ">
           <div className="profileImg">
           </div>
           <div className="profileTxt">
           <span><b>Agent</b></span>
        <span>{this.props.data.agent_loadport}</span>
        <span>{this.props.data.loadport}</span>
        </div>
        </div>
        <div className="pull-right statuscard completed">
        <div className="icon">
            <i className="fa fa-check-circle fa-3" aria-hidden="true"></i>
        </div>
        </div>
        <div className="clearfix"></div>
        <div className="line"></div>
       <Col xs={12}>
        <h4>Dates</h4>
        <h5><span>Laycan:</span>{this.props.data.laycan_loadport}</h5>
        <h5><span>Cargo Load:</span>{this.props.data.cargo_loading_date}</h5>
        <h5><span>Vessel Move:</span>{this.props.data.vessel_move_loadport}</h5>
       </Col>
       <div className="clearfix"></div>
        <div className="line"></div>
        <Col xs={12}>
        <h4>Dates</h4>
        <h5><span>Laycan:</span> {this.props.data.actual_laycan_loadport}  <i className="fa fa-check-circle fa-3 icon" style={style.iconColor}  aria-hidden="true"></i></h5>
        <h5><span>Cargo Load:</span>  {this.props.data.actual_cargo_loading_date}  <i className="fa fa-check-circle fa-3 icon" style={style.iconColor}  aria-hidden="true"></i></h5>
        <h5><span>Vessel Move:</span>  {this.props.data.actual_vessel_move_loadport} <i className="fa fa-check-circle fa-3 icon" style={style.iconColor}  aria-hidden="true"></i></h5>
        <h5><span>Volume:</span> {this.props.data.actual_qty_loaded} <i className="fa fa-check-circle fa-3 icon" style={style.iconColor}  aria-hidden="true"></i></h5>
       </Col>
       </div>
       </Col>    
       </Row>
      </div>
    </Tab>
    {
        this.props.data.deviation == "yes" ? [
            <Tab label={this.props.data.deviation_port}>
            <div>
                <h2>Deviation</h2>
                <div style={styles.deviationDetails}>
                    <p style={styles.deviationitem}>
                    {this.props.data.drid}
                        <span style={styles.deviationitemspan}>Parcel ID</span>
                    </p>
                    <p style={styles.deviationitem}>
                        {this.props.data.deviation_port}
                        <span style={styles.deviationitemspan}>Deviate Port</span>
                    </p>
                    <p style={styles.deviationitem}>
                        {this.props.data.deviation_qty}                        
                        <span style={styles.deviationitemspan}>Scheduled Quantity</span>
                    </p>
                    <p style={styles.deviationitem}>
                        {this.props.data.deviation_laycandate}
                        <span style={styles.deviationitemspan}>Deviate Laycan</span>
                    </p>
                </div>
            </div>
          </Tab>
        ] : ""
    }
   
    <Tab label="Grangemouth">
      <div>
       <h2>Unload</h2>
       <Row>
        
             
        <Col xs={5}>
        <div className="parcel-status-card">
        <div className="statuscard-left">
        <div className="profileImg"></div>
        <div className="profileTxt">
        <span><b>Inspector</b></span>
        <span>{this.props.data.inspector_dischargeport}</span>
        <span>{this.props.data.discharge_port}</span>
            </div>
        </div>
        <div className="pull-right statuscard completed">
        <div className="icon">
                    <i className="fa fa-check-circle fa-3" aria-hidden="true"></i>
                </div>
        </div>
        <div className="clearfix"></div>
        <div className="line"></div>
        <Col xs="4">
        <h4>Quality</h4>
       <h5>Quality (API): {this.props.data.quality_api}</h5>
       <h5>Quality (SUI): {this.props.data.quality_sul} </h5>
        </Col>
        <Col xs="4">
        <h4>Tolerence</h4>
       <h5>{"+/-" + this.props.data.tolerance + "%"}</h5>
        </Col>
        <Col xs="4">
        <h4>Volume</h4>
        <h5>{this.props.data.scheduled_qty_unloaded_dischargePort}</h5>
        </Col>
        <div className="clearfix"></div>
        <div className="line"></div>
        <h3>Account Summary</h3>
        <Col xs="5">
        <h4>Quality</h4>
       <h5>Quality (API): {this.props.data.actual_quality_api_dischargeport} <i className="fa fa-check-circle fa-3" 
       style={style.iconColor} aria-hidden="true"></i></h5>
       <h5>Quality (SUI):  {this.props.data.actual_quality_sul_dischargeport} <i className="fa fa-check-circle fa-3 icon" style={style.iconColor}  aria-hidden="true"></i></h5>
        </Col>
        <Col xs="3">
        <h4>Tolerence</h4>
       <h5>{"+/- "+this.props.data.actual_tolerance_dischargeport+"%"} <i className="fa fa-check-circle fa-3 icon" style={style.iconColor}  aria-hidden="true"></i></h5>
        </Col>
        <Col xs="4">
        <h4>Volume</h4>
        <h5>{this.props.data.scheduled_qty_unloaded_dischargePort} <i className="fa fa-check-circle fa-3 icon" style={style.iconColor}  aria-hidden="true"></i></h5>
        </Col>
       </div>
       
        </Col>
        <Col xs={5}>
        {/* card 2 */}
        <div className="parcel-status-card">
        <div className="statuscard-left ">
           <div className="profileImg">
           </div>
           <div className="profileTxt">
           <span><b>Agent</b></span>
        <span>{this.props.data.agent_dischargeport}</span>
        <span>{this.props.data.discharge_port}</span>
        </div>
        </div>
        <div className="pull-right statuscard completed">
        <div className="icon">
                    <i className="fa fa-check-circle fa-3" aria-hidden="true"></i>
                </div>
        </div>
        <div className="clearfix"></div>
        <div className="line"></div>
       <Col xs={12}>
        <h4>Dates</h4>
        <h5><span>Laycan:</span> {this.props.data.laycan_dischargeport} </h5>
        <h5><span>Cargo Unload:</span> {this.props.data.cargo_unloading}</h5>
        <h5><span>Vessel Move:</span> {this.props.data.vessel_move_startdate_dischargeport}</h5>
       </Col>
       <div className="clearfix"></div>
        <div className="line"></div>
        <Col xs={12}>
        <h4>Dates</h4>
       <h5><span>Laycan:</span> {this.props.data.actual_laycan_dischargeport} <i className="fa fa-check-circle fa-3 icon" style={style.iconColor}  aria-hidden="true"></i></h5>
       <h5><span>Cargo Load:</span> {this.props.data.actual_cargo_unloading_startdate} <i className="fa fa-check-circle fa-3 icon" style={style.iconColor}  aria-hidden="true"></i></h5>
       <h5><span>Vessel Move:</span> {this.props.data.actual_vessel_move_dischargeport}  <i className="fa fa-check-circle fa-3 icon" style={style.iconColor}  aria-hidden="true"></i></h5>
       <h5><span>Volume:</span>{this.props.data.scheduled_qty_unloaded_dischargePort} <i className="fa fa-check-circle fa-3 icon" style={style.iconColor}  aria-hidden="true"></i></h5>
       </Col>
       </div>
       
       </Col>
    

    </Row>
      </div>
    </Tab>
  </Tabs>

        </Col>
           </Row>
        
        </div>
     </Collapse>]
    }

    return (
       <div>
        <TableRow onTouchTap={this.openCollapse}>
            <TableRowColumn style={{width:"10%", "padding":"0", "height":"auto","vertical-align":"middle"}}>{this.props.data.deviation=="yes"? "" : deviationButton} {this.props.data.drid}  </TableRowColumn>
            <TableRowColumn style={{width:"10%", "padding":"0", "height":"auto","vertical-align":"middle"}}>{this.props.data.buy_deal} </TableRowColumn>
            <TableRowColumn style={{width:"10%", "padding":"0", "height":"auto","vertical-align":"middle"}}> {this.props.data.sell_deal} </TableRowColumn>
            <TableRowColumn style={{width:"10%", "padding":"0", "height":"auto","vertical-align":"middle"}}> {this.props.data.vessel_name} </TableRowColumn>
            <TableRowColumn style={{width:"10%", "padding":"0", "height":"auto","vertical-align":"middle"}}> {this.props.data.shipping_company} </TableRowColumn>
            <TableRowColumn style={{width:"10%", "padding":"0", "height":"auto","vertical-align":"middle"}}> {this.props.data.product} </TableRowColumn>
            {/* <TableRowColumn style={{width:"10%", "padding":"0", "height":"auto","vertical-align":"middle"}}> {this.props.data.loadport} </TableRowColumn> */}
            <TableRowColumn style={{width:"10%", "padding":"0", "height":"auto","vertical-align":"middle"}}> {this.props.data.status} </TableRowColumn>
        </TableRow>
        
{CollapseData}
      
    {/* </Collapse> */}
    
    {/* </TableRowColumn>
    </TableRow> */}
     <Dialog
          title="Deviation"
          actions={actionsButton}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          
        >
        <div className="confirmParcel">
         <div className="createParcel">

                    <SelectField
                    floatingLabelText="Trade ID"
                    value={this.state.trID}
                    onChange={this.handleChangeTrID}
                    > 
                        <MenuItem value="TR2456345345" primaryText="TR2456345345" />                       
                        <MenuItem value="TR5423345345" primaryText="TR5423345765" />                       
                        <MenuItem value="TR3345343455" primaryText="TR3345343455" />                       
                        <MenuItem value="TR2334343667" primaryText="TR2334343667" />                       
                    </SelectField> 

                    <div className="buyDetails">                        
                        <span>{this.props.data.inco_term}</span>
                        <span>{this.props.data.product}</span>
                        <span>{this.props.data.volume_type}</span>
                    </div>
                    <hr/>
                    <div className="parcelForm">
                        <form>
                            <div className="formControl">
                                <label htmlFor="">Volume to ship</label>
                               <div className="inlineFiledGroup">
                               <TextField  style={{width:"100px"}} onChange={this.onaddvolume} value={this.state.scheduled_qty}/>
                                 <SelectField onChange={this.handleChange} value={this.state.value} style={{width:"100px"}}>
                                    <MenuItem value="BBL" primaryText="BBL" />                                   
                                </SelectField>
                               </div>
                            </div>
                            <div className="inlinesubhead">
                                 <h5>Details</h5>
                            </div>
                            <div className="formControl">
                                <label htmlFor="">Laycan</label>
                                <div className="inlineFiledGroup">
                                    <DatePicker hintText="Start" style={{width:"100px"}} onChange={this.handleChangeLaycanDateFrom}  />
                                    <DatePicker hintText="End" style={{width:"100px"}} onChange={this.handleChangeLaycanDateTo}/>
                                </div>
                            </div>
                            <div className="formControl">
                                <label htmlFor="">Cargo Load</label>
                                <div className="inlineFiledGroup">
                                    <DatePicker hintText="Start" style={{width:"100px"}} onChange={this.handleCargoLoadDateFrom}/>
                                    <DatePicker hintText="End" style={{width:"100px"}} onChange={this.handleCargoLoadToFrom}/>
                                </div>
                            </div>
                            <div className="formControl">
                                <label htmlFor="">Vessel Move</label>
                                <div className="inlineFiledGroup">
                                    <DatePicker hintText="Start" style={{width:"100px"}} onChange={this.handleChangeVesselDateFrom} />
                                    <DatePicker hintText="End" style={{width:"100px"}} onChange={this.handleChangeVesselDateTo} />
                                </div>
                            </div>

                            <div className="formControl">
                                <label htmlFor="">Port</label>
                                <div className="inlineFiledGroup">
                                <SelectField 
                                 onChange={this.handlePortChange} 
                                 value={this.state.newPort} style={{width:"150px"}}>
                                    <MenuItem value="Amsterdam" primaryText="Amsterdam" />
                                    <MenuItem value="Hamburg" primaryText="Hamburg" />
                                </SelectField>                        
                                </div>
                            </div>

                            <div className="formControl">
                                <label htmlFor="">Agent</label>
                                <div className="inlineFiledGroup">
                                <SelectField 
                                 onChange={this.handleAgentChange} 
                                 value={this.state.agentValue} style={{width:"150px"}}>
                                    <MenuItem value="agent1@agency.com" primaryText="agent1@agency.com" />
                                    <MenuItem value="agent2@agency.com" primaryText="agent2@agency.com" />
                                </SelectField>                        
                                </div>
                            </div>                           
                            <div className="formControl">
                                <label htmlFor="">Inspector</label>
                                <div className="inlineFiledGroup">
                                    <SelectField 
                                    onChange={this.handleInspectorChange} 
                                    value={this.state.inspectorValue} style={{width:"150px"}}>
                                        <MenuItem value="inspector1@inspector.com" primaryText="inspector1@inspector.com" />
                                        <MenuItem value="inspector2@inspector.com" primaryText="inspector2@inspector.com" />
                                    </SelectField>                        
                                </div>
                            </div> 
                                               
                        </form>  
                    </div>
                </div>
            </div>
        </Dialog>
    </div>
    );
}
    
}

export default ParcelPendingDataRow;