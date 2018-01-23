import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';


export default class BuyTradeDetailComponent extends React.Component{

    state = {
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
        cargoDateFrom:''

      };

      handleChange = (event, index, value) => this.setState({value});
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
        var flow2Obj={
            laycan_loadport:this.formatDate(this.state.laycanDateFrom)+"-"+ this.formatDate(this.state.laycanDateTo),
            vessel_move_loadport:this.formatDate(this.state.vesselDateFrom)+"-"+ this.formatDate(this.state.vesselDateTo),
            cargo_loading:this.formatDate(this.state.cargoDateFrom)+"-"+ this.formatDate(this.state.cargoDateTo),
            scheduled_qty_loaded:this.state.scheduled_qty+" "+this.state.value,
            inspector_loadport:this.state.inspectorValue,
            shippingagency_loadport:this.state.agentValue,

        }
        console.log('---------saved data in BuyTradeDetail Comp--------');
console.log(flow2Obj)
        this.props.saveDataFlow2(flow2Obj);
    }

    render(){
        
        return(
            <div className="tradeDetailsWrapper" >                
                <div className="createParcel">
                    <h4>{this.props.parcelData.buy_deal}</h4> 
                    <div className="buyDetails">
                        <span>{this.props.parcelData.loadport}</span>
                        <span>{this.props.parcelData.product}</span>
                        <span>{this.props.parcelData.inco_term}</span>
                        <span>{this.props.parcelData.volume_type}</span>
                    </div>
                    <hr/>
                    <div className="parcelForm">
                        <form>
                            <div className="formControl">
                                <label htmlFor="">Nominate</label>
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
                            <br />
                             <RaisedButton label="Save Data" secondary={true} onTouchTap={this.saveDataFlow2} />                     
                        </form>  
                    </div>
                </div>
            </div>
        )
    }
}