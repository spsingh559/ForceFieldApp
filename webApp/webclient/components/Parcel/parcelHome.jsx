import React from 'react';
import Axios from 'axios';

import {
    Step,
    Stepper,
    StepLabel,
    StepContent,
  } from 'material-ui/Stepper';
  import RaisedButton from 'material-ui/RaisedButton';
  import FlatButton from 'material-ui/FlatButton';

  import SelectBuyTradeComponent from './ParcelStep/SelectBuyTradeComponent.jsx';
  import BuyTradeDetailComponent from './ParcelStep/BuyTradeDetailComponent.jsx';
  import SelectSellTradeComponent from './ParcelStep/SelectSellTradeComponent.jsx';
  import SellTradeDetailsComponent from './ParcelStep/SellTradeDetailsComponent.jsx';
  import SelectVesselComponent from './ParcelStep/SelectVesselComponent.jsx';
  import NewParcelCreated from './ParcelStep/NewParcelCreated.jsx';
  import {Row, Col} from "react-bootstrap";

  import TradeRecapFilterComponent from "../TradeRecap/TradeRecapFilterComponent";

export default class parcelHome extends React.Component{

    state = {
        finished: false,
        stepIndex: 0,   
        buyTrades:[],
        sellTrades:[],
        parcelData:{},
       parcelSubmit:{  
        "buy_deal":"",
        "sell_deal":"",
        "product":"",
        "volume_type":"",
        "vessel_name":"",
        "shipping_company":"",
        "loadport":"",
        "laycan_loadport":"",
        "cargo_loading":"",
        "vessel_move_loadport":"",
        "scheduled_qty_loaded":"",
        "inspector_loadport":"",
        "shippingagency_loadport":"",
        "Discharge_Port":"",
        "Laycan_DischargePort":"",
        "Cargo_Unloading":"",
        "Vessel_Move_DischargePort":"",
        "Scheduled_Qty_Unloaded_DischargePort":"",
        "Inspector_DischargePort":"",
        "ShippingAgency_DischargePort":"",
        "created_By":"",
        "created_date":"",
        "inco_term":"",
        "agent_loadport":"",
        "agent_dischargeport":"",
        "quality_api":"",
        "quality_sul":"",
        "tolerance":"",
        "org1":"",
        "org2":"",
     },
       parcelDataFlow2:{},
       sellTradePhase1:{},
       sellTradePhase2:{},
       saveDataFlow3:{}

    }

    handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
          stepIndex: stepIndex + 1,
          finished: stepIndex >= 3,
        });
      };
    
      handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
          this.setState({stepIndex: stepIndex - 1});
        }
      };

      componentDidMount = () => {
        const loggedinUserDetails = JSON.parse(sessionStorage.getItem('userLoginDetails'));
        Axios({
          mehod:"get",
          url:"/channels/mychannel/chaincodes/TradeCC?peer=peer1&fcn=getAllTradeRequests&args=%5B%22%22%5D",
          headers:{
              'Authorization': 'Bearer '+ loggedinUserDetails.message.token,
              'Content-Type': 'application/json'
          }
        }).then((trades)=>{
           
            console.log('-----------------data from server for all trades');
            console.log(trades.data)
            let buyTrades = trades.data.filter((trade)=>{
                  return trade.status == "ConfirmedTrade" && trade.direction == "BUY" && trade.inco_term == "FOB"
            })

            console.log('----------data for Confirmed Trade- Buy--------------');
            console.log(buyTrades);
            let sellTrades = trades.data.filter((trade)=>{
              return trade.status == "ConfirmedTrade" && trade.direction == "SELL" && trade.inco_term == "DES"
            })

            console.log('----------data for Confirmed Trade--- Sell------------');
            console.log(sellTrades);
            
            this.setState({buyTrades, sellTrades})
        })
      }

      renderStepActions(step) {
        const {stepIndex} = this.state;
    
        return (
          <div style={{margin: '12px 0'}}>
            <RaisedButton
              label={stepIndex === 4 ? 'View Parcel' : 'Next'}
              disableTouchRipple={true}
              disableFocusRipple={true}
              primary={true}
              onTouchTap={this.handleNext}
              style={{marginRight: 12}}
            />
            {step > 0 && (
              <FlatButton
                label="Back"
                disabled={stepIndex === 0}
                disableTouchRipple={true}
                disableFocusRipple={true}
                onTouchTap={this.handlePrev}
              />
            )}
          </div>
        );
      }

      // Logic

      buyTradePhase1=(obj)=>{
        console.log('data reach to parent is from BUY phase 1 buy----------------');
        console.log(obj);
        this.setState({parcelData:obj});
      }

      sellTradePhase1=(obj)=>{
          this.setState({sellTradePhase1:obj}, () => {
            console.log('data reach to parent is from SELL phase 1 buy----------------');
            console.log(this.state.sellTradePhase1);
          })
      }

      saveDataFlow2=(obj)=>{
        // laycan_loadport:this.formatDate(this.state.laycanDateFrom)+"-"+ this.formatDate(this.state.laycanDateTo),
        // vessel_move_loadport:this.formatDate(this.state.vesselDateFrom)+"-"+ this.formatDate(this.state.vesselDateTo),
        // cargo_loading:this.formatDate(this.state.cargoDateFrom)+"-"+ this.formatDate(this.state.cargoDateTo),
        // scheduled_qty_loaded:this.state.scheduled_qty+" "+this.state.value,
        // inspector_loadport:this.state.inspectorValue,
        // shippingagency_loadport:this.state.agentValue,
        // var newData=this.state.parcelData;
        console.log('new data from parcelData is');
       // console.log(newData);

        // this.state.parcelData.laycan_loadport=obj.laycan_loadport;
        // this.state.parcelData.vessel_move_loadport=obj.vessel_move_loadport;
        // this.state.parcelData.cargo_loading=obj.cargo_loading;
        // this.state.parcelData.scheduled_qty_loaded=obj.scheduled_qty_loaded;
        // this.state.parcelData.inspector_loadport=obj.inspector_loadport;
        // this.state.parcelData.shippingagency_loadport=obj.shippingagency_loadport;
        console.log(' object');
        console.log(obj);

      
        this.setState({parcelDataFlow2:obj}, () => {
          console.log('after set state');
          console.log(this.state.parcelDataFlow2);
        });
          
      }

      sellTradePhase2=(obj)=>{
        console.log('data reach to sellTrade Row selection');
        console.log(obj);
        this.setState({sellTradePhase2:obj});
      }

      saveDataFlow3=(obj)=>{
        console.log('data reach to save Data Flow 3');
        console.log(obj);
        this.setState({saveDataFlow3:obj});
      }

      vesselObj=(obj)=>{
        console.log('data react to vessel ');
        console.log(obj);
        let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
        var monthName=["Jan", "Feb","March","April","May","Jun","July","Aug","Sept","Oct","Nov","Dec"];
        var date=new Date();
        var latestDate=date.getDate()+"-"+monthName[date.getMonth()]+"-"+date.getFullYear()+" "+ date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
        console.log('Today is'+ latestDate); 
        // this.setState({vesselObj:obj});
        let finalData={
          "buy_deal":this.state.parcelData.buy_deal,   
            "product":this.state.parcelData.product,
            "volume_type":this.state.parcelData.volume_type,
            "loadport":this.state.parcelData.loadport,            
            "inco_term":this.state.parcelData.inco_term,           
            "quality_api":this.state.parcelData.quality_api,
            "quality_sul":this.state.parcelData.quality_sul,
            "tolerance":this.state.parcelData.tolerance,

            laycan_loadport:this.state.parcelDataFlow2.laycan_loadport,
            vessel_move_loadport:this.state.parcelDataFlow2.vessel_move_loadport,
            cargo_loading:this.state.parcelDataFlow2.cargo_loading,
            scheduled_qty_loaded:this.state.parcelDataFlow2.scheduled_qty_loaded,
            inspector_loadport:this.state.parcelDataFlow2.inspector_loadport,
            "agent_loadport":this.state.parcelDataFlow2.shippingagency_loadport,

            sell_deal:this.state.sellTradePhase2.sell_deal,               
            "Discharge_Port":this.state.sellTradePhase2.Discharge_Port,
            "org1":this.state.sellTradePhase2.org1,
            "org2":this.state.sellTradePhase2.org2,

            "shippingagency_loadport":"Shipping company",
            "ShippingAgency_DischargePort":"Shipping company",

            Laycan_DischargePort:this.state.saveDataFlow3.laycan_loadport,
            Vessel_Move_DischargePort:this.state.saveDataFlow3.vessel_move_loadport,
            Cargo_Unloading:this.state.saveDataFlow3.cargo_loading,
            Scheduled_Qty_Unloaded_DischargePort:this.state.saveDataFlow3.scheduled_qty_loaded,
            Inspector_DischargePort:this.state.saveDataFlow3.inspector_loadport,
            "agent_dischargeport":this.state.saveDataFlow3.shippingagency_loadport,

            vessel_name:obj.vessel_name,
            shipping_company:obj.shipping_company,
            "created_By":retrievedUserDetails.username,
            "created_date":latestDate
        
        }
        this.setState({parcelSubmit:finalData});

        console.log('all collected Data is');
        console.log(finalData);

        // const loggedinUserDetails = JSON.parse(sessionStorage.getItem('userLoginDetails'));
        console.log('-------------api call started------------');
        // let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
        Axios({
          method:'post',
          url:'/channels/mychannel/chaincodes/ParcelCC/fcnname/createParcel',
          data:finalData,
          headers: {  
              'Authorization': 'Bearer '+ retrievedUserDetails.message.token,
              'Content-Type': 'application/json'
          }
          })
          .then((data) => {
          console.log('update trade connected to server for update is');
          console.log(data);
        // console.log(/confirmTrade)
        alert('Hash for Create Parcel is'+data.data);
        
          // this.context.router.push('/confirmTrade');
        
                 
          })
          .catch((error) => {
          console.log(error);
          console.log(error+"error in get Trade");
          
          });
        // Axios({
        //   mehod:"post",
        //   url:"/channels/mychannel/chaincodes/ParcelCC/fcnname/createParcel",
        //   data:finalData,
        //   headers:{
        //       'Authorization': 'Bearer '+ loggedinUserDetails.message.token,
        //       'Content-Type': 'application/json'
        //   }
        // }).then((trades)=>{
           
        //     console.log('-----------------data from server for create Shipment');
           
        //   alert('Hash for create parcel is  '+ trades.data);
           
        // }) .catch((error) => {

        //   console.log(error);
        //   console.log(error+"error in Login data for post");
        // });

        // http://13.126.253.181:8080/channels/mychannel/chaincodes/ParcelCC/fcnname/createParcel



      }
      // Login End
    render(){
        const {finished, stepIndex} = this.state;

        return(
           <div style={{marginTop: "65px"}}>
              <div className="parcelHeader">
                <h1>New Parcel</h1>
                <h3>Step 1</h3>
              </div>
              <div className="subheader">
                <h2> Select buy trade</h2>
              </div>

           <div className="parcelContent">

              <div className="filter">
                  <TradeRecapFilterComponent />
              </div>
                              
              <div className="stepperContent">
                <Stepper activeStep={stepIndex} orientation="vertical">
                  <Step>
                    <StepLabel>Select Buy Trade</StepLabel>
                    <StepContent>
                      <SelectBuyTradeComponent buytrades={this.state.buyTrades} buyTradePhase1={this.buyTradePhase1}/>
                      {this.renderStepActions(0)}
                    </StepContent>
                  </Step>
                  <Step>
                    <StepLabel>Buy Trade Detail </StepLabel>
                    <StepContent>
                    <BuyTradeDetailComponent parcelData={this.state.parcelData} 
                    saveDataFlow2={this.saveDataFlow2}/>
                      {this.renderStepActions(1)}
                    </StepContent>
                  </Step>
                  <Step>
                    <StepLabel>Select Sell Trade</StepLabel>
                    <StepContent>
                    <SelectSellTradeComponent selltrades={this.state.sellTrades} sellTradePhase2={this.sellTradePhase2}/>
                      {this.renderStepActions(2)}
                    </StepContent>
                  </Step>
                  <Step>
                    <StepLabel>Sell Trade Details</StepLabel>
                    <StepContent>
                    <SellTradeDetailsComponent saveDataFlow3={this.saveDataFlow3} sellTradePhase2={this.state.sellTradePhase2}/> 
                      {this.renderStepActions(3)}
                    </StepContent>
                  </Step>
                  <Step>
                    <StepLabel>Select Vessel</StepLabel>
                    <StepContent>
                      <SelectVesselComponent vesselObj={this.vesselObj}/>
                      {this.renderStepActions(4)}
                    </StepContent>
                  </Step>
                  <Step>
                    <StepLabel>New Parcel Created</StepLabel>
                    <StepContent>
                    <NewParcelCreated parcelSubmit={this.state.parcelSubmit}/>
                      {this.renderStepActions(5)}
                    </StepContent>
                  </Step>
                </Stepper>
                {finished && (
                  <p style={{margin: '20px 0', textAlign: 'center'}}>
                      Parcel Step completed
                    <a
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        this.setState({stepIndex: 0, finished: false});
                      }}
                    >
                  click here
                  </a> to go back to start.
                  </p>
                )}
            </div>
         </div> 
        </div>   
        )
    }
}