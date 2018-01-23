import React from 'react';
import { Link } from 'react-router';
import {Grid,Row,Col} from 'react-bootstrap';
import AgentTableComponent from "./AgentTableComponent"
import DischargeAgentTableComponent from "./DischargeAgentTableComponent"
import Axios from 'axios';
const data = [
  {
      deliveryId: 'D56781',
      appointingCo: 'BP',
      vessel: 'Princess',
      shippingCo: 'Maersk',
      loadDate:'28 FEB 2018',
      location: 'Amsterdam',
      laycan: '28 Feb - 5 Mar 2018',
      capacity: '100BBl',  
  },
  {
      deliveryId: 'D0719',
      appointingCo: 'TR 8764',
      vessel: 'Ellie Lady',
      shippingCo: 'Maersk',
      loadDate:'28 FEB 2018',
      location: 'Rotterdam',
      laycan: '28 Feb - 5 Mar 2018',
      capacity: '100BBl',  
  },
  {
      deliveryId: 'D5017',
      appointingCo: 'TR 1209',
      vessel: 'Victoria',
      shippingCo: 'Maersk',
      loadDate:'28 FEB 2018',
      location: 'Amsterdam',
      laycan: '28 Feb - 5 Mar 2018',
      capacity: '100BBl',  
  },
];

export default class AgentComponent extends React.Component {
    state={
         countInspectorCount:0,
         countDischrgeAgentPort:0,
         inspectorData:[],
         dischargeAgentData:[]
      }
      componentDidMount=()=>{

        let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
    
        Axios({
          method:'get',
          url:'channels/mychannel/chaincodes/ParcelCC?peer=peer1&fcn=getParcelRequestForLoadPortAgent&args=["'+retrievedUserDetails.username+'"]',
          headers: {  
              'Authorization': 'Bearer '+ retrievedUserDetails.message.token,
              'Content-Type': 'application/json'
          }
          })
          .then((data) => {
          console.log('all trade data connected to server for get is');
          console.log(data);
    
          let countInspector =0;
          let maininspectorData=[];
          data.data.forEach((data)=>{
            //if(data.status=="ConfirmedTrade" ){
             // if(data.approver==retrievedUserDetails.username || data.created_by==retrievedUserDetails.username){
              if(data.status=="ConfirmedParcel" ){
                countInspector++;
                maininspectorData.push(data);
       
       
             }
           // }
        })
        this.setState({countInspectorCount:countInspector,inspectorData:maininspectorData});
        
    
                 
          })
          .catch((error) => {
          console.log(error);
          console.log(error+"error in get Trade");
          });
          this.getDischargePortAgentData();
          
    }   
    
    getDischargePortAgentData=()=>{
      let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
      Axios({
        method:'get',
        url:'channels/mychannel/chaincodes/ParcelCC?peer=peer1&fcn=getParcelRequestForDischargePortAgent&args=["'+retrievedUserDetails.username+'"]',
        headers: {  
            'Authorization': 'Bearer '+ retrievedUserDetails.message.token,
            'Content-Type': 'application/json'
        }
        })
        .then((data) => {
        console.log('all Discharge data connected to server for get is');
        console.log(data);
  
        let countDischargePortAgentData =0;
        let mainDischargePortAgentData=[];
        data.data.forEach((data)=>{
          //if(data.status=="ConfirmedTrade" ){
           // if(data.approver==retrievedUserDetails.username || data.created_by==retrievedUserDetails.username){
            if(data.status=="ConfirmedParcel" ){
            countDischargePortAgentData++;
            mainDischargePortAgentData.push(data);
     
     
           }
         // }
      })
      this.setState({countDischrgeAgentPort:countDischargePortAgentData,dischargeAgentData:mainDischargePortAgentData});
      
  
               
        })
        .catch((error) => {
        console.log(error);
        console.log(error+"error in get Trade");
        });
    }
    handleChangeAgentSubmit=(Obj)=>{

      let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
  
      Axios({
        method:'post',
        url:'/channels/mychannel/chaincodes/ParcelCC/fcnname/updateParcelByShippingAgentLoadPort',
        data:Obj,
        headers: {  
            'Authorization': 'Bearer '+ retrievedUserDetails.message.token,
            'Content-Type': 'application/json'
        }
        })
        .then((data) => {
      alert("Data updated by Inspector"+data.data)
          console.log("Data updated by Inspector"+data.data)
          window.location.reload();
        })
        .catch((error) => {
        console.log(error);
        console.log(error+"error in get Trade");
        });
  }  

  handleChangeDischargeAgentSubmit=(Obj)=>{
    let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
  
      Axios({
        method:'post',
        url:'/channels/mychannel/chaincodes/ParcelCC/fcnname/updateParcelByShippingAgentDischargePort',
        data:Obj,
        headers: {  
            'Authorization': 'Bearer '+ retrievedUserDetails.message.token,
            'Content-Type': 'application/json'
        }
        })
        .then((data) => {
      alert("Data updated by Inspector"+data.data)
          console.log("Data updated by Inspector"+data.data)
          window.location.reload();
        })
        .catch((error) => {
        console.log(error);
        console.log(error+"error in get Trade");
        });
  }
  render() {
      return (
        <div style={{marginTop:"65px"}}>
        <Row className="trContainer show-grid" style={{marginLeft:"0", marginRight:"0"}}>
        <Col md={12} style={{paddingLeft:"0", paddingRight:"0"}}>
        <AgentTableComponent headingText="Laod Port New Request" handleChangeAgentSubmit={this.handleChangeAgentSubmit} 
        number={this.state.countInspectorCount} data={this.state.inspectorData} />
        <DischargeAgentTableComponent headingText="Discharge Port New Request " handleChangeDischargeAgentSubmit={this.handleChangeDischargeAgentSubmit} number={this.state.countDischrgeAgentPort} data={this.state.dischargeAgentData} />
        </Col>
      </Row>
          </div>
      )
    }
  }



