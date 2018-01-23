import React from 'react';
import { Link } from 'react-router';
import {Grid,Row,Col} from 'react-bootstrap';

import TradeRecapFilterComponent from './TradeRecapFilterComponent';

import TradeTableComponent from "./TradeTableComponent";

import Axios from 'axios';

// const tradeData = [

//   {"agent_fee":"240","associated_fees":"1800052","commodity":"crudeoil","counter_party_direction":"SELL",
  
//   "create_timestamp":"3-4-2018","created_by":"uniper1","delivery_date":"12-2-2018","demurrage_estimate":"360","direction":"BUY",
  
//   "inco_term":"BRENT","index":"loreum","inspector_fee":"260","last_update_timestamp":"uniper1","laycan_date":"12-3-2018",
  
//   "marine_freight_estimate":"60","parcel_id":"","party1":"SHELL","party2":"BP","price_UoM":"100BBL","price_type":"Indexed",
  
//   "product_name":"brent","quality_api":"60","quality_sul":"0.6","status":"Draft","storate_lease":"560","throughput":"460",
  
//   "tolerance":"6","total_fee":"789660","trade_confirm_doc":"tradeconfirmdoc.pdf","trade_location":"Netherlends",
  
//   "trader_comments":"Good","trid":"TRID1515846408704","updated_by":"bp1","version":"1.0","volume":"760"},
  
//   {"agent_fee":"240","associated_fees":"1800052","commodity":"crudeoil","counter_party_direction":"BUY",
  
//   "create_timestamp":"3-4-2018","created_by":"uniper1","delivery_date":"12-2-2018","demurrage_estimate":"360","direction":"BUY",
  
//   "inco_term":"BRENT","index":"loreum","inspector_fee":"260","last_update_timestamp":"uniper1","laycan_date":"12-3-2018",
  
//   "marine_freight_estimate":"60","parcel_id":"","party1":"BP","party2":"HP","price_UoM":"100BBL","price_type":"Indexed",
  
//   "product_name":"brent","quality_api":"60","quality_sul":"0.6","status":"Pending","storate_lease":"560","throughput":"460",
  
//   "tolerance":"6","total_fee":"789660","trade_confirm_doc":"tradeconfirmdoc.pdf","trade_location":"Netherlends","trader_comments":"Good",
  
//   "trid":"TRID1515846460217","updated_by":"bp1","version":"1.0","volume":"760"},
  
//   {"agent_fee":"240","associated_fees":"1800052","commodity":"crudeoil","counter_party_direction":"BUY",
  
//   "create_timestamp":"3-4-2018","created_by":"uniper1","delivery_date":"12-2-2018","demurrage_estimate":"360","direction":"SELL",
  
//   "inco_term":"BRENT","index":"loreum","inspector_fee":"260","last_update_timestamp":"uniper1","laycan_date":"12-3-2018",
  
//   "marine_freight_estimate":"60","parcel_id":"","party1":"BP","party2":"HP","price_UoM":"100BBL","price_type":"Indexed",
  
//   "product_name":"brent","quality_api":"60","quality_sul":"0.6","status":"Draft","storate_lease":"560","throughput":"460",
  
//   "tolerance":"6","total_fee":"789660","trade_confirm_doc":"tradeconfirmdoc.pdf","trade_location":"Netherlends","trader_comments":"Good",
  
//   "trid":"TRID1515846460218","updated_by":"bp1","version":"1.0","volume":"760"},
  
//   {"agent_fee":"240","associated_fees":"1800052","commodity":"crudeoil","counter_party_direction":"BUY",
  
//   "create_timestamp":"3-4-2018","created_by":"uniper1","delivery_date":"12-2-2018","demurrage_estimate":"360","direction":"SELL",
  
//   "inco_term":"BRENT","index":"loreum","inspector_fee":"260","last_update_timestamp":"uniper1","laycan_date":"12-3-2018",
  
//   "marine_freight_estimate":"60","parcel_id":"","party1":"BP","party2":"HP","price_UoM":"100BBL","price_type":"Indexed",
  
//   "product_name":"brent","quality_api":"60","quality_sul":"0.6","status":"Rejected","storate_lease":"560","throughput":"460",
  
//   "tolerance":"6","total_fee":"789660","trade_confirm_doc":"tradeconfirmdoc.pdf","trade_location":"Netherlends","trader_comments":"Good",
  
//   "trid":"TRID1515846460219","updated_by":"bp1","version":"1.0","volume":"760"},
  
//   {"agent_fee":"240","associated_fees":"1800052","commodity":"crudeoil","counter_party_direction":"BUY",
  
//   "create_timestamp":"3-4-2018","created_by":"uniper1","delivery_date":"12-2-2018","demurrage_estimate":"360","direction":"BUY",
  
//   "inco_term":"BRENT","index":"loreum","inspector_fee":"260","last_update_timestamp":"uniper1","laycan_date":"12-3-2018",
  
//   "marine_freight_estimate":"60","parcel_id":"","party1":"BP","party2":"HP","price_UoM":"100BBL","price_type":"Indexed",
  
//   "product_name":"brent","quality_api":"60","quality_sul":"0.6","status":"Pending","storate_lease":"560","throughput":"460",
  
//   "tolerance":"6","total_fee":"789660","trade_confirm_doc":"tradeconfirmdoc.pdf","trade_location":"Netherlends","trader_comments":"Good",
  
//   "trid":"TRID1515846460220","updated_by":"bp1","version":"1.0","volume":"760"},
  
//   {"agent_fee":"240","associated_fees":"1800052","commodity":"crudeoil","counter_party_direction":"SELL",
  
//   "create_timestamp":"3-4-2018","created_by":"uniper1","delivery_date":"12-2-2018","demurrage_estimate":"360","direction":"BUY",
  
//   "inco_term":"BRENT","index":"loreum","inspector_fee":"260","last_update_timestamp":"uniper1","laycan_date":"12-3-2018",
  
//   "marine_freight_estimate":"60","parcel_id":"","party1":"BP","party2":"HP","price_UoM":"100BBL","price_type":"Indexed",
  
//   "product_name":"brent","quality_api":"60","quality_sul":"0.6","status":"ConfirmedTrade","storate_lease":"560","throughput":"460",
  
//   "tolerance":"6","total_fee":"789660","trade_confirm_doc":"tradeconfirmdoc.pdf","trade_location":"Netherlends","trader_comments":"Good",
  
//   "trid":"TRID1515846460221","updated_by":"bp1","version":"1.0","volume":"760"},
  
//   {"agent_fee":"240","associated_fees":"1800052","commodity":"crudeoil","counter_party_direction":"BUY",
  
//   "create_timestamp":"3-4-2018","created_by":"uniper1","delivery_date":"12-2-2018","demurrage_estimate":"360","direction":"SELL",
  
//   "inco_term":"BRENT","index":"loreum","inspector_fee":"260","last_update_timestamp":"uniper1","laycan_date":"12-3-2018",
  
//   "marine_freight_estimate":"60","parcel_id":"","party1":"BP","party2":"HP","price_UoM":"100BBL","price_type":"Indexed",
  
//   "product_name":"brent","quality_api":"60","quality_sul":"0.6","status":"ConfirmedTrade","storate_lease":"560","throughput":"460",
  
//   "tolerance":"6","total_fee":"789660","trade_confirm_doc":"tradeconfirmdoc.pdf","trade_location":"Netherlends","trader_comments":"Good",
  
//   "trid":"TRID1515846460212","updated_by":"bp1","version":"1.0","volume":"760"}
  
//   ]

export default class ConfirmTradeComponent extends React.Component {
  
  state={
    countTrade:0,
    ctData:[],
    buyCountTrade:0
  }

  componentDidMount=()=>{

    let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));

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

      let countTrade =0;
      let mainCTdata=[];
      data.data.forEach((data)=>{
        if(data.status=="ConfirmedTrade" ){
          if(data.approver==retrievedUserDetails.username || data.created_by==retrievedUserDetails.username){
            
            countTrade++;
           mainCTdata.push(data);
   
   
          }
        }
    })
    this.setState({countTrade:countTrade,ctData:mainCTdata});
    

             
      })
      .catch((error) => {
      console.log(error);
      console.log(error+"error in get Trade");
      });

    // let countTrade =0;
    // let mainCTdata=[];
    // tradeData.forEach((data)=>{
    //     if(data.status=="ConfirmedTrade"){
    //         countTrade++;
    //         mainCTdata.push(data);
    //     }
    // })
    // this.setState({countTrade:countTrade,ctData:mainCTdata});
}

buyCTData=()=>{
  let buyCountTrade =0;
  let mainBuyCTdata=[];
  this.state.ctData.forEach((data)=>{
      if(data.status=="ConfirmedTrade" && data.direction=="BUY"){
        buyCountTrade++;
        mainBuyCTdata.push(data);
      }
  })
  this.setState({countTrade:buyCountTrade,ctData:mainBuyCTdata});
}
sellCTData=()=>{
  let sellCountTrade =0;
  let mainSellCTdata=[];
  this.state.ctData.forEach((data)=>{
      if(data.status=="ConfirmedTrade" && data.direction=="SELL"){
        sellCountTrade++;
        mainSellCTdata.push(data);
      }
  })
  this.setState({countTrade:sellCountTrade,ctData:mainSellCTdata});
}



  render() {
      return (
        <div style={{marginTop:"65px"}}>
        <Row className="trContainer show-grid" style={{marginLeft:"0", marginRight:"0"}}>
        <Col md={3} className="trLeftCol">
          <TradeRecapFilterComponent  buyCTData={this.buyCTData} sellCTData={this.sellCTData}/>
        </Col>
        <Col md={9} style={{paddingLeft:"0", paddingRight:"0"}}>
            
          <TradeTableComponent headingText="Confirmed Trades" number={this.state.countTrade} 
          tradeData={this.state.ctData}
          
          />
          
        </Col>
      </Row>
          </div>
      )
    }
  }



