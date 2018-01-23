import React from 'react';
import { Link } from 'react-router';
import {Grid,Row,Col} from 'react-bootstrap';

import TradeRecapFilterComponent from './TradeRecapFilterComponent';
import SecondaryNavigation from "./SecondaryNavigation";
import TradeTableComponent from "./TradeTableComponent"
import Axios from 'axios';



export default class TradeRecapComponent extends React.Component {

  state={
    aptCount:0,
    drftTradesCount: 0,
    approvalPendingTrades:[],
    draftTrades:[],
    rejectViewStatus:false,
  rejectCount:0,
  rejectTrades:[],
  amendView:false,
  aptCountAmend:0,
   approvalPendingTradesAmend:[],
    drftTradesCountAmend:0,
    draftTradesAmend:[]
    
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    }
  }

  componentDidMount=()=>{

    let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));

    let aptCount = 0;
    let approvalPendingTrades = [];
    let drftTradesCount = 0;
    let draftTrades = [];

    Axios({
      method:'get',
      url:'/channels/mychannel/chaincodes/TradeCC?peer=peer1&fcn=getAllTradeRequests&args=[]',
      headers: {  
          'Authorization': 'Bearer '+ retrievedUserDetails.message.token,
          'Content-Type': 'application/json'
      }
      })
      .then((data) => {
      console.log('all trade data connected to server for get is');
      console.log(data);
      this.set

      data.data.forEach((data)=>{
        if(data.status=="Draft" && data.approver==retrievedUserDetails.username){
          aptCount++;
          approvalPendingTrades.push(data);
        }else if(data.created_by == retrievedUserDetails.username && data.status == "Draft"){
          drftTradesCount++;
          draftTrades.push(data);
        }
    })

    console.log('pending data for draft');
    console.log(aptCount);
    console.log(approvalPendingTrades);
    console.log('sent data for draft');
    console.log(drftTradesCount);
    console.log(draftTrades);
    
    this.setState({aptCount, approvalPendingTrades, drftTradesCount, draftTrades});

             
      })
      .catch((error) => {
      console.log(error);
      console.log(error+"error in get Trade");
      });
   


    
}

// rejectDataView=()=>{
//   Axios({
//     method:'get',
//     url:'/channels/mychannel/chaincodes/TradeCC?peer=peer1&fcn=getAllTradeRequests&args=[]',
//     headers: {  
//         'Authorization': 'Bearer '+ retrievedUserDetails.message.token,
//         'Content-Type': 'application/json'
//     }
//     })
//     .then((data) => {
//     console.log('all trade data connected to server for get is');
//     console.log(data);

//     data.data.forEach((data)=>{
//       if(data.status=="Draft" && data.approver==retrievedUserDetails.username){
//         aptCount++;
//         approvalPendingTrades.push(data);
//       }else if(data.created_by == retrievedUserDetails.username && data.status == "Draft"){
//         drftTradesCount++;
//         draftTrades.push(data);
//       }
//   })
//   this.setState({aptCount, approvalPendingTrades, drftTradesCount, draftTrades});

           
//     })
//     .catch((error) => {
//     console.log(error);
//     console.log(error+"error in get Trade");
//     });
// }

acceptData=(obj)=>{
  
  let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
Axios({
  method:'post',
  url:'/channels/mychannel/chaincodes/TradeCC/fcnname/updateTrade',
  data:obj,
  headers: {  
      'Authorization': 'Bearer '+ retrievedUserDetails.message.token,
      'Content-Type': 'application/json'
  }
  })
  .then((data) => {
  console.log('update trade connected to server for update is');
  console.log(data);
// console.log(/confirmTrade)
alert('Hash for Confirmed Trade is'+data.data);

  this.context.router.push('/confirmTrade');

         
  })
  .catch((error) => {
  console.log(error);
  console.log(error+"error in get Trade");
  
  });

}

rejectData=(obj)=>{

  let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
Axios({
  method:'post',
  url:'/channels/mychannel/chaincodes/TradeCC/fcnname/updateTrade',
  data:obj,
  headers: {  
      'Authorization': 'Bearer '+ retrievedUserDetails.message.token,
      'Content-Type': 'application/json'
  }
  })
  .then((data) => {
  console.log('update trade connected to server for update is');
  console.log(data);
// console.log(/confirmTrade)
alert('Hash for Rejected Trade is'+data.data);
  window.location.reload();

         
  })
  .catch((error) => {
  console.log(error);
  console.log(error+"error in get Trade");
  
  });
}
rejectDataView=()=>{
  

  let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
  let rejectTrades=[];
  let rejectCount=0;
  Axios({
    method:'get',
    url:'/channels/mychannel/chaincodes/TradeCC?peer=peer1&fcn=getAllTradeRequests&args=[]',
    headers: {  
        'Authorization': 'Bearer '+ retrievedUserDetails.message.token,
        'Content-Type': 'application/json'
    }
    })
    .then((data) => {
    console.log('all trade data connected to server for get is');
    console.log(data);
    this.set

    data.data.forEach((data)=>{
     
     if((data.created_by == retrievedUserDetails.username || data.approver==retrievedUserDetails.username) && data.status == "Rejected"){
       rejectCount++;
        rejectTrades.push(data);
      }
  })
  this.setState({rejectCount,rejectTrades});

           
    })
    .catch((error) => {
    console.log(error);
    console.log(error+"error in get Trade");
    });
    this.setState({rejectViewStatus:true});
}

amendDataView=()=>{
  this.setState({amendView:true});

  let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));

    let aptCountAmend = 0;
    let approvalPendingTradesAmend = [];
    let drftTradesCountAmend = 0;
    let draftTradesAmend = [];

    Axios({
      method:'get',
      url:'/channels/mychannel/chaincodes/TradeCC?peer=peer1&fcn=getAllTradeRequests&args=[]',
      headers: {  
          'Authorization': 'Bearer '+ retrievedUserDetails.message.token,
          'Content-Type': 'application/json'
      }
      })
      .then((data) => {
      console.log('all trade data connected to server for get is');
      console.log(data);
      // this.set

      data.data.forEach((data)=>{
        if(data.status=="Amended" && data.updated_by!=retrievedUserDetails.username 
        &&((data.approver==retrievedUserDetails.username ||data.created_by==retrievedUserDetails.username))){
          aptCountAmend++;
          approvalPendingTradesAmend.push(data);
        }else if(data.updated_by == retrievedUserDetails.username && data.status == "Amended"){
          drftTradesCountAmend++;
          draftTradesAmend.push(data);
        }
    })
    console.log('pending data for amendment');
    console.log(aptCountAmend);
    console.log(approvalPendingTradesAmend);
    console.log('sent data for amendment');
    console.log(drftTradesCountAmend);
    console.log(draftTradesAmend);
    this.setState({aptCountAmend, approvalPendingTradesAmend, drftTradesCountAmend, draftTradesAmend});

             
      })
      .catch((error) => {
      console.log(error);
      console.log(error+"error in get Trade");
      });
   



}

draftViewNavigation=()=>{
  this.setState({amendView:false,rejectViewStatus:false});
}
AmendTrade=(trid)=>{
  this.context.router.push('/editTradePage/'+trid);
}

submitNewTrade=(obj)=>{
  
  let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
  console.log('data reach to server');
  console.log(obj);
Axios({
  method:'post',
  url:'/channels/mychannel/chaincodes/TradeCC/fcnname/updateTrade',
  data:obj,
  headers: {  
      'Authorization': 'Bearer '+ retrievedUserDetails.message.token,
      'Content-Type': 'application/json'
  }
  })
  .then((data) => {
  console.log('update trade connected to server for update is');
  console.log(data);
// console.log(/confirmTrade)
alert('Hash for Amend Trade is'+data.data);
window.location.reload();
  // this.context.router.push('/confirmTrade');

         
  })
  .catch((error) => {
  console.log(error);
  console.log(error+"error in get Trade");
  
  });
}

  render() {

    return (
      <Row className="trContainer show-grid" style={{marginLeft:"0", marginRight:"0"}}>
        <Col md={3} className="trLeftCol">
          <TradeRecapFilterComponent />
        </Col>
        <Col md={9} style={{paddingLeft:"0", paddingRight:"0"}}>
          <SecondaryNavigation  rejectDataView={this.rejectDataView} amendDataView={this.amendDataView}
          draftViewNavigation={this.draftViewNavigation}
          />
          {
            this.state.rejectViewStatus?[
           <TradeTableComponent 
            headingText="Rejected Trade" 
            number={this.state.rejectCount} 
            tradeData={this.state.rejectTrades}
            />]:
            this.state.amendView?
            [
              <div>
          <TradeTableComponent 
            headingText="Trade requests Sent for Amendment" 
            number={this.state.drftTradesCountAmend} 
            tradeData={this.state.draftTradesAmend} />
          <TradeTableComponent 
            headingText="Pending for Approval of Amend Trade" 
            number={this.state.aptCountAmend} 
            tradeData={this.state.approvalPendingTradesAmend}
            acceptData={this.acceptData}
            rejectData={this.rejectData}
            AmendTrade={this.AmendTrade}
            submitNewTrade={this.submitNewTrade}
           
           
           />
           </div>
           ]:
           [
            <div>
          <TradeTableComponent 
            headingText="Trade requests Sent" 
            number={this.state.drftTradesCount} 
            tradeData={this.state.draftTrades} />
          <TradeTableComponent 
            headingText="Pending for Approval" 
            number={this.state.aptCount} 
            tradeData={this.state.approvalPendingTrades}
            acceptData={this.acceptData}
            rejectData={this.rejectData}
            AmendTrade={this.AmendTrade}
            submitNewTrade={this.submitNewTrade}
           />
           </div> 
           ]
         }
        </Col>
      </Row>
    )
  }
}
