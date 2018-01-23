import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import ParcelTableComponent from "./ParcelTableComponent";
import Axios from 'axios';

// const pendingParcelData = [{  
//     "deliver_Id":"D123",
//     "buy_deal":"TR123",
//     "sell_deal":"TR2456",
//     "product":"BRENT",
//     "volume_type":"500 BBL",
//     "vessel_name":"THE PRINCESS",
//     "shipping_company":"SHIPPING CO",
//     "loadport":"AMSTERDAM",
//     "laycan_loadport":"10-2-2018 - 8-3-2018",
//     "cargo_loading":"20-2-2018 - 2-3-2018",
//     "vessel_move_loadport":"10-2-2018 - 8-3-2018",
//     "scheduled_qty_loaded":"100",
//     "inspector_loadport":"inspector@bp.com",
//     "shippingagency_loadport":"Shipping company",
//     "Discharge_Port":"DUBAI",
//     "Laycan_DischargePort":"20-3-2018 - 5-4-2018",
//     "Cargo_Unloading":"20-3-2018 - 5-4-2018",
//     "Vessel_Move_DischargePort":"20-3-2018 - 5-4-2018",
//     "Scheduled_Qty_Unloaded_DischargePort":"50",
//     "Inspector_DischargePort":"inspector@koch.com",
//     "ShippingAgency_DischargePort":"Shipping company",
//     "created_By":"scheduler@shell.com",
//     "created_date":"10-1-2018 10:30:45",
//     "inco_term":"DES",
//     "agent_loadport":"agent@shell.com",
//     "agent_dischargeport":"agent@koch.com",
//     "quality_api":"10",
//     "quality_sul":"0.20",
//     "tolerance":"5",
//     "org1":"Shell",
//     "org2":"BP",
//     "org3":"Koch",
//     status:"ConfirmedParcel"
    
//  },
//  {
//     "deliver_Id":"D123",  
//     "buy_deal":"TR123",
//     "sell_deal":"TR2456",
//     "product":"BRENT",
//     "volume_type":"500 BBL",
//     "vessel_name":"THE PRINCESS",
//     "shipping_company":"SHIPPING CO",
//     "loadport":"AMSTERDAM",
//     "laycan_loadport":"10-2-2018 - 8-3-2018",
//     "cargo_loading":"20-2-2018 - 2-3-2018",
//     "vessel_move_loadport":"10-2-2018 - 8-3-2018",
//     "scheduled_qty_loaded":"100",
//     "inspector_loadport":"inspector@bp.com",
//     "shippingagency_loadport":"Shipping company",
//     "Discharge_Port":"DUBAI",
//     "Laycan_DischargePort":"20-3-2018 - 5-4-2018",
//     "Cargo_Unloading":"20-3-2018 - 5-4-2018",
//     "Vessel_Move_DischargePort":"20-3-2018 - 5-4-2018",
//     "Scheduled_Qty_Unloaded_DischargePort":"50",
//     "Inspector_DischargePort":"inspector@koch.com",
//     "ShippingAgency_DischargePort":"Shipping company",
//     "created_By":"scheduler@shell.com",
//     "created_date":"10-1-2018 10:30:45",
//     "inco_term":"DES",
//     "agent_loadport":"agent@shell.com",
//     "agent_dischargeport":"agent@koch.com",
//     "quality_api":"10",
//     "quality_sul":"0.20",
//     "tolerance":"5",
//     "org1":"Shell",
//     "org2":"BP",
//     "org3":"Koch",
//     "status":"Planning"
//  },
//  {  
//     "deliver_Id":"D124",
//     "buy_deal":"TR123",
//     "sell_deal":"TR2456",
//     "product":"BRENT",
//     "volume_type":"500 BBL",
//     "vessel_name":"THE PRINCESS",
//     "shipping_company":"SHIPPING CO",
//     "loadport":"AMSTERDAM",
//     "laycan_loadport":"10-2-2018 - 8-3-2018",
//     "cargo_loading":"20-2-2018 - 2-3-2018",
//     "vessel_move_loadport":"10-2-2018 - 8-3-2018",
//     "scheduled_qty_loaded":"100",
//     "inspector_loadport":"inspector@bp.com",
//     "shippingagency_loadport":"Shipping company",
//     "Discharge_Port":"DUBAI",
//     "Laycan_DischargePort":"20-3-2018 - 5-4-2018",
//     "Cargo_Unloading":"20-3-2018 - 5-4-2018",
//     "Vessel_Move_DischargePort":"20-3-2018 - 5-4-2018",
//     "Scheduled_Qty_Unloaded_DischargePort":"50",
//     "Inspector_DischargePort":"inspector@koch.com",
//     "ShippingAgency_DischargePort":"Shipping company",
//     "created_By":"scheduler@shell.com",
//     "created_date":"10-1-2018 10:30:45",
//     "inco_term":"DES",
//     "agent_loadport":"agent@shell.com",
//     "agent_dischargeport":"agent@koch.com",
//     "quality_api":"10",
//     "quality_sul":"0.20",
//     "tolerance":"5",
//     "org1":"Shell",
//     "org2":"BP",
//     "org3":"Koch",
//     "status":"Planning"

//  },
//  {  
//     "deliver_Id":"D124",
//     "buy_deal":"TR123",
//     "sell_deal":"TR2456",
//     "product":"BRENT",
//     "volume_type":"500 BBL",
//     "vessel_name":"THE PRINCESS",
//     "shipping_company":"SHIPPING CO",
//     "loadport":"AMSTERDAM",
//     "laycan_loadport":"10-2-2018 - 8-3-2018",
//     "cargo_loading":"20-2-2018 - 2-3-2018",
//     "vessel_move_loadport":"10-2-2018 - 8-3-2018",
//     "scheduled_qty_loaded":"100",
//     "inspector_loadport":"inspector@bp.com",
//     "shippingagency_loadport":"Shipping company",
//     "Discharge_Port":"DUBAI",
//     "Laycan_DischargePort":"20-3-2018 - 5-4-2018",
//     "Cargo_Unloading":"20-3-2018 - 5-4-2018",
//     "Vessel_Move_DischargePort":"20-3-2018 - 5-4-2018",
//     "Scheduled_Qty_Unloaded_DischargePort":"50",
//     "Inspector_DischargePort":"inspector@koch.com",
//     "ShippingAgency_DischargePort":"Shipping company",
//     "created_By":"scheduler@shell.com",
//     "created_date":"10-1-2018 10:30:45",
//     "inco_term":"DES",
//     "agent_loadport":"agent@shell.com",
//     "agent_dischargeport":"agent@koch.com",
//     "quality_api":"10",
//     "quality_sul":"0.20",
//     "tolerance":"5",
//     "org1":"Shell",
//     "org2":"BP",
//     "org3":"Koch",
//     "status":"ConfirmedParcel"
//  },
//  {  
//     "deliver_Id":"D124",
//     "buy_deal":"TR123",
//     "sell_deal":"TR2456",
//     "product":"BRENT",
//     "volume_type":"500 BBL",
//     "vessel_name":"THE PRINCESS",
//     "shipping_company":"SHIPPING CO",
//     "loadport":"AMSTERDAM",
//     "laycan_loadport":"10-2-2018 - 8-3-2018",
//     "cargo_loading":"20-2-2018 - 2-3-2018",
//     "vessel_move_loadport":"10-2-2018 - 8-3-2018",
//     "scheduled_qty_loaded":"100",
//     "inspector_loadport":"inspector@bp.com",
//     "shippingagency_loadport":"Shipping company",
//     "Discharge_Port":"DUBAI",
//     "Laycan_DischargePort":"20-3-2018 - 5-4-2018",
//     "Cargo_Unloading":"20-3-2018 - 5-4-2018",
//     "Vessel_Move_DischargePort":"20-3-2018 - 5-4-2018",
//     "Scheduled_Qty_Unloaded_DischargePort":"50",
//     "Inspector_DischargePort":"inspector@koch.com",
//     "ShippingAgency_DischargePort":"Shipping company",
//     "created_By":"scheduler@shell.com",
//     "created_date":"10-1-2018 10:30:45",
//     "inco_term":"DES",
//     "agent_loadport":"agent@shell.com",
//     "agent_dischargeport":"agent@koch.com",
//     "quality_api":"10",
//     "quality_sul":"0.20",
//     "tolerance":"5",
//     "org1":"Shell",
//     "org2":"BP",
//     "org3":"Koch",
//     "status":"ConfirmedParcel"
//  }]
export default class pendingParcel extends React.Component{
    state = {
        pareclPendingCount: 0,
        pendingParcelData:[],
        pendingParcelCount:0

    }
    componentDidMount=()=>{

        let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
    console.log('----------------User Login Details'+retrievedUserDetails);
        Axios({
          method:'get',
          url:'/channels/mychannel/chaincodes/ParcelCC?peer=peer1&fcn=getParcelByCreator&args=["'+retrievedUserDetails.username+'"]',
          headers: {  
              'Authorization': 'Bearer '+ retrievedUserDetails.message.token,
              'Content-Type': 'application/json'
          }
          })
          .then((data) => {
          console.log('----------------all trade data connected to server for get is');
          console.log(data);
    
          let pendingParcelCount =0;
          let mainParcelData=[];
         data.data.forEach((data)=>{
            if(data.status=="Planned"){
             // if(data.approver==retrievedUserDetails.username || data.created_by==retrievedUserDetails.username){
                
                pendingParcelCount++;
                mainParcelData.push(data);
       
            //  }
            }
        })
        this.setState({pareclPendingCount:pendingParcelCount,pendingParcelData:mainParcelData});
        
    
                 
          })
          .catch((error) => {
          console.log(error);
          console.log(error+"error in get Trade");
          });

    }
//    componentDidMount=()=>{
//         let pendingParcelCount =0;
//         let mainParcelData=[];
//         pendingParcelData.forEach((data)=>{
//             if(data.status=="Planning"){
//                 pendingParcelCount++;
//                 mainParcelData.push(data);
//             }
//         })
//         this.setState({pareclPendingCount:pendingParcelCount,pendingParcelData:mainParcelData});
//     }
    render(){
        return(
            <div>
            <Grid>
        <Row className="trContainer show-grid" style={{marginLeft:"0", marginRight:"0"}}>
       
        <Col md={12} style={{paddingLeft:"0", paddingRight:"0"}}>
            
          <ParcelTableComponent headingText="Pending Parcel" number={this.state.pareclPendingCount}
           pendingParcelData={this.state.pendingParcelData}/>
          
        </Col> 
      </Row>
      </Grid>
          </div>
        )
    }
}