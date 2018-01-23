import React from 'react';
import HistoryTableComponent from './HistoryTableComponent'

import {
    Table,
    TableRow,
    TableBody,
    TableHeader,
    TableRowColumn,
    TableHeaderColumn
  } from 'material-ui/Table';
  import TextField from 'material-ui/TextField';
  import SelectField from 'material-ui/SelectField';
  import MenuItem from 'material-ui/MenuItem';
  import DatePicker from 'material-ui/DatePicker';
  import RaisedButton from 'material-ui/RaisedButton';
  import FlatButton from 'material-ui/FlatButton';
  import Dialog from 'material-ui/Dialog';
  import Chip from 'material-ui/Chip';

  import Axios from 'axios';

  const ApprovingAuth={
    Shell:"trader1@shell.com",
    BP:"trader1@bp.com",
    Statoil:"trader1@stat-oil.com"
  }

  import {Collapse,Well,Row,Col,Grid} from 'react-bootstrap';

  const customContentStyle = {
    width: '100%',
    height:'1300px',
    maxWidth: 'none',
  };

  const style={
    dateRangeStyle:{
        borderRight:"1px solid #ccc",
        marginTop:"5px"
    },
    dateRangeHeader:{
        marginTop: "0",
        color:"#666666",
        fontWeight:"bold"
    },
    paddingZero:{
        padding:"2px 0px"
    },
    textStyle:{
      width:"100%"
    },
    colStyle:{
      padding:"0"
    },
    btnStyle:{
    margin:"10px 30px"
    },
    tradeViewDetails:{
      color: "#337ab7",
      marginTop:"46px"
    },
    radioButton: {
      marginBottom: 16,
    }
}


  class TradeDataRow extends React.Component{
    state={
        openRow:false,
        showCheckboxes: false,
        open:false,
        volume:this.props.data.volume.split(' ')[0],
        openMain:false,
        openHistory:false,
        value: "",
    firstPartyTxt:this.props.data.party1,
    secondPartyTxt:this.props.data.party2,
    incoTrem:this.props.data.inco_term,
    tradeLocation:this.props.data.trade_location.split('-')[0],
    tradeLocationSub:this.props.data.trade_location.split('-')[1],
    deliveryDateFrom:new Date(this.props.data.delivery_date.split('|')[0]),
    deliveryDateTo:new Date(this.props.data.delivery_date.split('|')[1]),
    laycanDateFrom:new Date(this.props.data.laycan_date.split('|')[0]),
    laycanDateTo:new Date(this.props.data.laycan_date.split('|')[1]),
    commodity:this.props.data.commodity, 
    productName:this.props.data.product_name,
    tradeVolume:this.props.data.volume.split(' ')[1],
    qualityApi:this.props.data.quality_api,
    qualitySul:this.props.data.quality_sul,
    tradeTolerence:this.props.data.tolerance,
    tradePriceType:this.props.data.price_type,
    tradeIndex:this.props.data.index,
    tradePriceUoM:this.props.data.price_UoM.split(' ')[0],
    tradeAssociatedFees:this.props.data.associated_fees.split(' ')[0],
    tradeComment:this.props.data.trader_comments,
    showCheckboxes: false,
    height: '300px',
    sellBtn:'',
    buyBtn:'',
    buttonChip:'',
    BuySellButtonDataStatus:false,
    historytradeData:[]
    }

    openCollapse=()=>{
        this.setState({openRow:!this.state.openRow});
        console.log('----------row clicked');

    }

    // Onchange 

    formatDate = (date) => { 
      if(date !== ""){
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        }
    }
    handleClose = () => {
      this.setState({openHistory: false});
    };
    handleChangevolume=(e)=>{
      this.setState({volume:e.target.value});
    }
    handleChangeRadio =(event, index, value) => this.setState({selectTradeByRadio:value});

    // handleChangeSecondPartyTxt=(event, index, value) => this.setState({secondPartyTxt:value});
    handleChangeIncoTrem=(event, index, value) => this.setState({incoTrem:value});
    handleChangeTradeLocation=(event, index, value) => this.setState({tradeLocation:value});
    handleChangeTradeLocationSub=(event, index, value) => this.setState({tradeLocationSub:value});
    handleChangeDeliveryDateFrom = (event, date) => this.setState({deliveryDateFrom: date,});
    handleChangeDeliveryDateTo = (event, date) => this.setState({deliveryDateTo: date,});
    handleChangeLaycanDateFrom = (event, date) => this.setState({laycanDateFrom: date,});
    handleChangeLaycanDateTo = (event, date) => this.setState({laycanDateTo: date,});
    handleChangeCommodity = (event, index, value) => this.setState({commodity:value});
    handleChangeProductName = (event, index, value) => this.setState({productName:value});
    handleChangeTradeVolume = (event, index, value) => this.setState({tradeVolume:value});
    handleChangeQualityApi = (event, index, value) => this.setState({qualityApi:event.target.value});
    handleChangeQualitySul = (event, index, value) => this.setState({qualitySul:event.target.value});
    handleChangeTradeTolerence = (event, index, value) => this.setState({tradeTolerence:event.target.value});
    handleChangePriceType = (event, index, value) => this.setState({tradePriceType:event.target.value});
    handleChangeTradeIndex = (event, index, value) => this.setState({tradeIndex:value});
    handleChangeTradePriceUoM = (event, index, value) => this.setState({tradePriceUoM:event.target.value});
    // handleChangeTradeAssociatedfees = (event, index, value) => this.setState({tradeAssociatedFees:value});
    handleChangeTradeComment = (event, index, value) => this.setState({tradeComment:event.target.value});
    handleChangeTradeAssociatedfees=(e)=>{
      this.setState({tradeAssociatedFees:e.target.value});
    }

    //  Submit

    submitNewTrade=()=>{
      let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
      // let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
//       let FirstPartyName=this.props.data.approver.split('@');
//       let partyFinalName=FirstPartyName[1].split('.');
//       let partyFinalNameCompany=partyFinalName[0];
// let approver;
//       if(partyFinalNameCompany=="STAT-OIL"){
//         approver=ApprovingAuth.Statoil
//       }else if(this.state.secondPartyTxt=="BP" ){
//         approver=ApprovingAuth.BP
//       }

//         console.log('-----data from checkbox is---------');
//         // console.log(this.state.selectTradeByRadio);
//         var tradeDir;
//         var tradeBuyDir;
//         if(this.state.buyBtn.length==0){
//           tradeDir="SELL";
//           tradeBuyDir="BUY"
//         }else{
//           tradeDir="BUY";
//           tradeBuyDir="SELL"
//         }

//         console.log('tradeDir'+ tradeDir);
//         console.log('tradeBuyDir'+ tradeBuyDir);


 
// var date=new Date();
//  console.log(date.getMonth());
//    console.log(date.getFullYear());
//     console.log(date.getDate());

    var monthName=["Jan", "Feb","March","April","May","Jun","July","Aug","Sept","Oct","Nov","Dec"];
var date=new Date();
var latestDate=date.getDate()+"-"+monthName[date.getMonth()]+"-"+date.getFullYear()+" "+ date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
console.log('Today is'+ latestDate); 

      var newTradeObj={
        "version":"1.0",
        trid:this.props.data.trid,
        direction:this.props.data.direction,
        counter_party_direction:this.props.data.counter_party_direction,
        party1:this.props.data.party1,
        party2:this.props.data.party2,
        inco_term:this.state.incoTrem,
        trade_location:this.state.tradeLocation+"-"+this.state.tradeLocationSub,
        delivery_date:this.formatDate(this.state.deliveryDateFrom)+"|"+ this.formatDate(this.state.deliveryDateTo),
        laycan_date:this.formatDate(this.state.laycanDateFrom)+"|"+this.formatDate(this.state.laycanDateTo),
        commodity:this.state.commodity,
        product_name:this.state.productName,
        quality_api:this.state.qualityApi,
        quality_sul:this.state.qualitySul,
        tolerance:this.state.tradeTolerence,
        price_type:this.state.tradePriceType,
        index:this.state.tradeIndex,
        price_UoM:this.state.tradePriceUoM + " $",
        associated_fees:this.state.tradeAssociatedFees,
        volume:this.state.volume+" "+this.state.tradeVolume,
        "marine_freight_estimate":"60",
        "inspector_fee":"260",
        "agent_fee":"240",
        "demurrage_estimate":"360",
        "throughput":"460",
        "storate_lease":"560",
        "created_by":this.props.data.created_by,
        "updated_by":retrievedUserDetails.username,
        "created_timestamp":this.props.data.last_update_timestamp,
        "updated_timestamp":latestDate,
        "trade_confirm_doc":this.props.data.trade_confirm_doc,
        "trader_comments":this.state.tradeComment,
        total_fee:((parseInt(this.state.tradePriceUoM) * parseInt(this.state.volume)) + (parseInt(this.state.tradeAssociatedFees)))+" $",
        new_status:'Amended'

      }

      this.props.submitNewTrade(newTradeObj);
      console.log('submitted data');
      console.log(newTradeObj);
      this.setState({openMain: false});
      
    }

    // Submit End

    AcceptTrade=()=>{

        // console.log('DATA clicked by parameter');
        // console.log(Accept);
        var monthName=["Jan", "Feb","March","April","May","Jun","July","Aug","Sept","Oct","Nov","Dec"];
        var date=new Date();
        var latestDate=date.getDate()+"-"+monthName[date.getMonth()]+"-"+date.getFullYear()+" "+ date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
        console.log('Today is'+ latestDate);
        let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));

        var obj=  {
            "agent_fee": this.props.data.agent_fee,
            "associated_fees": this.props.data.associated_fees,
            "commodity":this.props.data.commodity,
            "counter_party_direction":this.props.data.counter_party_direction,
            "created_timestamp":this.props.data.create_timestamp ,
            "created_by": this.props.data.created_by,
            "delivery_date": this.props.data.delivery_date,
            "demurrage_estimate": this.props.data.demurrage_estimate,
            "direction": this.props.data.direction,
            "inco_term": this.props.data.inco_term,
            "index": this.props.data.index,
            "inspector_fee": this.props.data.inspector_fee,
            "updated_timestamp": latestDate,
            "laycan_date":this.props.data.laycan_date,
            "marine_freight_estimate":this.props.data.marine_freight_estimate,
            "parcel_id": this.props.data.parcel_id,
            "party1": this.props.data.party1,
            "party2": this.props.data.party2,
            "price_UoM": this.props.data.price_UoM,
            "price_type": this.props.data.price_type,
            "product_name": this.props.data.product_name,
            "quality_api": this.props.data.quality_api,
            "quality_sul": this.props.data.quality_sul,
            "new_status": "ConfirmedTrade",
            "storate_lease": this.props.data.storate_lease,
            "throughput":this.props.data.throughput,
            "tolerance": this.props.data.tolerance,
            "total_fee": this.props.data.total_fee,
            "trade_confirm_doc": this.props.data.trade_confirm_doc,
            "trade_location":this.props.data.trade_location,
            "trader_comments":this.props.data.trader_comments,
            "trid":this.props.data.trid,
            "updated_by":retrievedUserDetails.username,
            "version": this.props.data.version,
            "volume": this.props.data.volume
          }

          this.props.acceptData(obj);
    }

    RejectTrade=()=>{

        var monthName=["Jan", "Feb","March","April","May","Jun","July","Aug","Sept","Oct","Nov","Dec"];
        var date=new Date();
        var latestDate=date.getDate()+"-"+monthName[date.getMonth()]+"-"+date.getFullYear()+" "+ date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
        console.log('Today is'+ latestDate);
        let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));

        var obj=  {
            "agent_fee": this.props.data.agent_fee,
            "associated_fees": this.props.data.associated_fees,
            "commodity":this.props.data.commodity,
            "counter_party_direction":this.props.data.counter_party_direction,
            "created_timestamp":this.props.data.create_timestamp ,
            "created_by": this.props.data.created_by,
            "delivery_date": this.props.data.delivery_date,
            "demurrage_estimate": this.props.data.demurrage_estimate,
            "direction": this.props.data.direction,
            "inco_term": this.props.data.inco_term,
            "index": this.props.data.index,
            "inspector_fee": this.props.data.inspector_fee,
            "updated_timestamp": latestDate,
            "laycan_date":this.props.data.laycan_date,
            "marine_freight_estimate":this.props.data.marine_freight_estimate,
            "parcel_id": "",
            "party1": this.props.data.party1,
            "party2": this.props.data.party2,
            "price_UoM": this.props.data.price_UoM,
            "price_type": this.props.data.price_type,
            "product_name": this.props.data.product_name,
            "quality_api": this.props.data.quality_api,
            "quality_sul": this.props.data.quality_sul,
            "new_status": "Rejected",
            "storate_lease": this.props.data.storate_lease,
            "throughput":this.props.data.throughput,
            "tolerance": this.props.data.tolerance,
            "total_fee": this.props.data.total_fee,
            "trade_confirm_doc": this.props.data.trade_confirm_doc,
            "trade_location":this.props.data.trade_location,
            "trader_comments":this.props.data.trader_comments,
            "trid":this.props.data.trid,
            "updated_by":retrievedUserDetails.username,
            "version": this.props.data.version,
            "volume": this.props.data.volume
          }

          this.props.rejectData(obj);
    }
    AmendTrade=()=>{
      //  this.props.AmendTrade(this.props.data.trid);
      this.setState({openMain:true});
    }
    viewHistory=()=>{
     // alert('Modal Open');
      let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
    //  console.log("TR ID-----------------",trid);
      
      Axios({
        method:'get',
        url:'/channels/mychannel/chaincodes/TradeCC?peer=peer1&fcn=getTradeRequestHistory&args=["'+this.props.data.trid+'"]',
        headers: {  
            'Authorization': 'Bearer '+ retrievedUserDetails.message.token,
            'Content-Type': 'application/json'
        }
        })
        .then((data) => {
        console.log('all trade data connected to server for get is');
        console.log(data);
        let historytradeData = [];
        data.data.forEach((data)=>{
       
          historytradeData.push(data);
          /*if(data.status=="Draft" && data.approver==retrievedUserDetails.username){
            aptCount++;
            approvalPendingTrades.push(data);
          }else if(data.created_by == retrievedUserDetails.username && data.status == "Draft"){
            drftTradesCount++;
            draftTrades.push(data);
          }*/
      })
  
     // console.log('pending data for draft');
      //console.log(aptCount);
      //console.log(approvalPendingTrades);
      //console.log('sent data for draft');
      //console.log(drftTradesCount);
      //console.log(draftTrades);
      
      this.setState({historytradeData:historytradeData});
  
               
        })
        .catch((error) => {
        console.log(error);
        console.log(error+"error in get Trade");
        });

      this.setState({openHistory:true});
      
    }

    handleCloseEdit=()=>{
      this.setState({openMain:false});
    }
render(){
console.log('create time stamp');
console.log('party');
console.log(this.props.data.party1);
    console.log(this.props.data.create_timestamp);
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleCloseEdit}
      />
    ];
    const historyActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />
    ];
   let BuySellButtonData='';

  //  <a onClick={this.AmendTrade}>Amend</a>
  //  <a onClick={this.RejectTrade}>Reject </a>
  //  <a onClick={this.AcceptTrade}>Accept</a>
  //  var ActionForSent;
   var sentActions;
   if(this.props.data.status=="Draft"){
     if( this.props.headingText=="Trade requests Sent" ){
      sentActions=null;
     }else{
       sentActions=[
         <div>
          <a onClick={this.AmendTrade}>Amend</a>
   <a onClick={this.RejectTrade}>Reject </a>
   <a onClick={this.AcceptTrade}>Accept</a>
   </div>
       ]
     }
   }else if(this.props.data.status=="Amended"){
    if( this.props.headingText=="Trade requests Sent for Amendment" ){
      sentActions=null;
     
     }else{
       sentActions=[
         <div>
            <a onClick={this.viewHistory}>History</a>
          <a onClick={this.AmendTrade}>Amend</a>
   <a onClick={this.RejectTrade}>Reject </a>
   <a onClick={this.AcceptTrade}>Accept</a>
   </div>
       ]
     }
   }
   let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
   let FirstPartyName=retrievedUserDetails.username.split('@');
   let partyFinalName=FirstPartyName[1].split('.');
   let partyFinalNameCompany=partyFinalName[0].toUpperCase();
  console.log('--------------------'+partyFinalNameCompany);
  console.log('--------------------'+this.props.data.party2);
   let Counterparty1;
   
   if(this.props.data.party2 == partyFinalNameCompany){
    Counterparty1 = this.props.data.party1;
    console.log(Counterparty1);
   }else{
    Counterparty1 = this.props.data.party2;
   }

   // Type logic

   let tradeCreatedBy = this.props.data.created_by.split('@')[1].split('.')[0].toUpperCase();

let tradeDirection;
if(tradeCreatedBy == partyFinalNameCompany){
tradeDirection = this.props.data.direction;
}else{
tradeDirection = this.props.data.counter_party_direction;
}




  //  Pending for Approval of Amend Trade
    return (
       <div style={{width:"auto"}}>

            <TableRow onTouchTap={this.openCollapse} style={{width:"100%"}} >
                <TableRowColumn style={{"verticalAlign":"middle", "whiteSpace":"normal", "width":"120px", "padding": "5px"}}>{this.props.data.last_update_timestamp}</TableRowColumn>
                <TableRowColumn style={{"verticalAlign":"middle", "whiteSpace":"normal", "width":"120px", "padding": "5px"}}>{this.props.data.trid} </TableRowColumn>
                <TableRowColumn style={{"verticalAlign":"middle", "whiteSpace":"normal", "width":"120px", "padding": "5px"}}> {tradeDirection} </TableRowColumn>
                <TableRowColumn style={{"verticalAlign":"middle", "whiteSpace":"normal", "width":"120px", "padding": "5px"}}> {Counterparty1} </TableRowColumn>
                <TableRowColumn style={{"verticalAlign":"middle", "whiteSpace":"normal", "width":"120px", "padding": "5px"}}> {this.props.data.product_name} </TableRowColumn>
                <TableRowColumn style={{"verticalAlign":"middle", "whiteSpace":"normal", "width":"120px", "padding": "5px"}}> {this.props.data.volume} </TableRowColumn>
                <TableRowColumn style={{"verticalAlign":"middle", "whiteSpace":"normal", "width":"120px", "padding": "5px"}}> {this.props.data.trade_location} </TableRowColumn>
                <TableRowColumn style={{"verticalAlign":"middle", "whiteSpace":"normal", "width":"120px", "padding": "5px"}}> {this.props.data.inco_term} </TableRowColumn>
            </TableRow>


            <Collapse in={this.state.openRow} style={{position:"relative", left:"0", "padding": "10px"}}>
            <Row>
             <Col md={3} style={style.dateRangeStyle}>
                <h6 style={style.dateRangeHeader}>Date Range</h6>
      
                    <Col md={4} style={style.paddingZero}>
                    <span>Delivery :</span>
                    </Col>
                    <Col md={8}  style={style.paddingZero}><span>{this.props.data.delivery_date}</span>
                   
                    </Col>

                    <Col md={3} style={style.paddingZero}><span>Laycan :</span></Col>
                    <Col md={9} style={style.paddingZero}>
                        <span>{this.props.data.laycan_date}</span>
                       
                       
                    </Col>
            </Col>
        <Col md={3} style={style.dateRangeStyle}>
            <h6 style={style.dateRangeHeader}>Quality</h6>

                <Col md={7} style={style.paddingZero}><span>Quality (API) :</span></Col>
                <Col md={5} style={style.paddingZero}>
                    <span>{this.props.data.quality_api}</span></Col>
                <Col md={7} style={style.paddingZero}><span>Quality (SUL) :</span></Col>
                <Col md={5} style={style.paddingZero}>
                <span>{this.props.data.quality_sul}</span>
                </Col>

            <Col md={7} style={style.paddingZero}>
            <span>Tolerence :</span>
            </Col>
            <Col md={5} style={style.paddingZero}><span>{this.props.data.tolerance}</span>
            </Col>
            </Col>
            <Col md={6} style={{marginTop:"5px"}}>
            <h6 style={style.dateRangeHeader}>Price</h6>
            <Col md={4}>

            <Col md={7} style={style.paddingZero}>
            <span>Price Type :</span>
            </Col>
            <Col md={5} style={style.paddingZero}><span>{this.props.data.price_type}</span>
            </Col>
            <Col md={7} style={style.paddingZero}><span>Index :</span>
            </Col>
            <Col md={5} style={style.paddingZero}><span>{this.props.data.index}</span>
            </Col>

            <Col md={7} style={style.paddingZero}><span>Price+UoM :</span>
            </Col>
            <Col md={5} style={style.paddingZero}><span>{this.props.data.price_UoM}</span>
            </Col>
            </Col>
            <Col md={8}>
            <Col md={7} style={style.paddingZero}><span>Total Associate Fee :</span>
            </Col>
            <Col md={5} style={style.paddingZero}><span><b>{this.props.data.associated_fees}</b></span>

            </Col>
            <Col md={7} style={style.paddingZero}><span>Total Fee :</span>
            </Col>
            <Col md={5} style={style.paddingZero}>
                <span><b>{this.props.data.total_fee}</b></span>
            </Col>
            </Col>
            </Col>
            <Col md={12} >
                <div className="tradeactions">
                   {sentActions}
                </div>
            </Col>
       </Row>

    </Collapse>
    <Dialog
    title="View Details"
    titleStyle={{background:"#1f497d",color:"#fff",lineHeight:"0"}}
    actions={historyActions}
    modal={false}
    open={this.state.openHistory}
    contentStyle={customContentStyle}
    onRequestClose={this.handleClose}
    autoScrollBodyContent={true}
  >
<HistoryTableComponent historytradeData={this.state.historytradeData}/>
  </Dialog>
    <Dialog
    title="Edit New Trade"
    titleStyle={{background:"#1f497d",color:"#fff",lineHeight:"0"}}
    actions={actions}
    modal={false}
    open={this.state.openMain}
    contentStyle={customContentStyle}
    onRequestClose={this.handleCloseEdit}
    autoScrollBodyContent={true}
  >
  <div style={{marginTop:"65px"}}>
    {/* <h1 style={{marginTop:"100px"}}> New Trade Component </h1> */}
    <Grid>

    <Row>
     
      <Col>
      <RaisedButton label="Submit" primary={true} style={{float:"right",marginTop:"40px"}}
       onTouchTap={this.submitNewTrade}/>
      </Col>
    </Row>

    <Row>
      <Col xs={6}>
      <h3>Trader Details</h3>
      <Col xs={4}>
       <TextField name="firstParty" autoComplete="off"
     style={style.textStyle}
     hintText="1st Party"
    floatingLabelText="1st Party"
    value={this.props.data.party1}
    disabled={true}
    /></Col>
    <Col xs={4}><SelectField name="secondParty"
     style={style.textStyle}
     hintText="Counterparty"
    floatingLabelText="Counterparty"
    disabled={true}
    value={this.state.secondPartyTxt}
    onChange={this.handleChangeSecondPartyTxt}
  >
    <MenuItem value="STAT-OIL" primaryText="STAT-OIL" />
    <MenuItem value="BP" primaryText="BP" />
    <MenuItem value="SHELL" primaryText="SHELL" />
          <MenuItem value="MERCURIA" primaryText="MERCURIA" />
    {/* <MenuItem value="Mercuria" primaryText="Mercuria" /> */}

  </SelectField></Col>
    <Col xs={4} style={style.textStyle}></Col>

    <Col xs={4}> <SelectField name="inco"
     style={style.textStyle}
     hintText="INCO Term"
    floatingLabelText="INCO Term"
    value={this.state.incoTrem}
    onChange={this.handleChangeIncoTrem}
  >
    <MenuItem value={"FOB"} primaryText="FOB" />
    <MenuItem value={"DES"} primaryText="DES" />
  </SelectField></Col>
    <Col xs={4}><SelectField name="tradeLocation"
     style={style.textStyle}
     hintText="Trade Location "
    floatingLabelText="Trade Location "
    value={this.state.tradeLocation}
    onChange={this.handleChangeTradeLocation}
  >
   <MenuItem value="Port A" primaryText="Port A" />
         <MenuItem value="Scotland" primaryText="Scotland" />
    <MenuItem value="NETHERLANDS" primaryText="NETHERLANDS" />
    <MenuItem value="Germany" primaryText="Germany" />
    <MenuItem value="Great Britain" primaryText="Great Britain" />
    <MenuItem value="France" primaryText="France" />
    <MenuItem value="India" primaryText="India" />
  </SelectField></Col>
   <Col xs={4}><SelectField name="tradeSub"
    style={style.textStyle}
    floatingLabelText="Delivery Port"
    value={this.state.tradeLocationSub}
    onChange={this.handleChangeTradeLocationSub}
  >
   <MenuItem value="Port A" primaryText="Port A" />
         <MenuItem value="Grangemouth" primaryText="Grangemouth" />
    <MenuItem value="Amsterdam" primaryText="Amsterdam" />
    <MenuItem value="Frankfurt" primaryText="Frankfurt" />
    <MenuItem value="London" primaryText="London" />
    <MenuItem value="Paris" primaryText="Paris" />
    <MenuItem value="Chennai" primaryText="Chennai" />
  </SelectField></Col>
  <Col xs={6}>
 <Col xs={6} style={style.colStyle}>
  <DatePicker name="fromDate"
    style={style.textStyle}
    textFieldStyle={style.textStyle}
      onChange={this.handleChangeDeliveryDateFrom}
      autoOk={this.state.autoOk}
      value={this.state.deliveryDateFrom}
      floatingLabelText="Delivery Date"
      defaultDate={this.state.maxDate}
      disableYearSelection={this.state.disableYearSelection}
    />
   </Col>
   <Col xs={6}>
   <DatePicker name="endDate"
    style={style.textStyle}
    textFieldStyle={{height:"71px",width:"100%",lineHeight:"6"}}
      onChange={this.handleChangeDeliveryDateTo}
      value={this.state.deliveryDateTo}
      autoOk={this.state.autoOk}
      floatingLabelText=" To"
      defaultDate={this.state.maxDate}
      disableYearSelection={this.state.disableYearSelection}
    />
   </Col>

  </Col>

  <Col xs={6}>
  <Col xs={6} style={style.colStyle}>
 <DatePicker name="lcFromDate"
   style={style.textStyle}
   textFieldStyle={style.textStyle}
     onChange={this.handleChangeLaycanDateFrom}
     autoOk={this.state.autoOk}
      value={this.state.laycanDateFrom}
     floatingLabelText="Laycan Date"
     defaultDate={this.state.maxDate}
     disableYearSelection={this.state.disableYearSelection}
   />
  </Col>
  <Col xs={6}>
   <DatePicker name="lcFromDate"
    style={style.textStyle}
    textFieldStyle={{height:"71px",width:"100%",lineHeight:"6"}}
    floatingLabelText="To"
      onChange={this.handleChangeLaycanDateTo}
      autoOk={this.state.autoOk}
      value={this.state.laycanDateTo}
      disableYearSelection={this.state.disableYearSelection}
    />
   </Col>

 </Col>
    </Col>
    <Col xs={6}>
    <h3>Commodity Details</h3>

    <Col xs={4}><SelectField name="commodity"
     style={style.textStyle}
     hintText="Commodity"
    floatingLabelText="Commodity"
    value={this.state.commodity}
    onChange={this.handleChangeCommodity}
  >
    <MenuItem value="Crude Oil" primaryText="Crude Oil" />
  </SelectField></Col>



    <Col xs={8} >
    <Chip style={{width:"max-content",marginBottom:"11px",marginTop:"34px"}} >
 {this.props.data.direction} Trade
</Chip>
         </Col>
    {/* <Col xs={4} style={style.textStyle}> </Col> */}
    <Col xs={4}><SelectField name="productName"
     style={style.textStyle}
     hintText="Product Name"
    floatingLabelText="Product Name"
    value={this.state.productName}
    onChange={this.handleChangeProductName}
  >
    <MenuItem value=" Brent Blend" primaryText=" Brent Blend" />
          <MenuItem value="Clair" primaryText="Clair" />
          <MenuItem value="Ekofisk Blend" primaryText="Ekofisk Blend" />
          <MenuItem value="Forcados" primaryText="Forcados" />
          <MenuItem value="Forties Blend" primaryText="Forties Blend" />
          <MenuItem value="Oseberg Blend" primaryText="Oseberg Blend" />
  </SelectField></Col>
  <Col xs={4}>
  <TextField name="volume" autoComplete="off"
     style={style.textStyle}
     hintText="Volume"
    floatingLabelText="Enter Volume"
    value={this.state.volume}
    onChange={this.handleChangevolume}
    />
  </Col>
  <Col xs={4}>
  <SelectField name="volume"
     style={style.textStyle}
     hintText="Unit of Measurement"
    floatingLabelText="Unit of Measurement"
    value={this.state.tradeVolume}
    onChange={this.handleChangeTradeVolume}
  >
    <MenuItem value="BBL" primaryText="BBL" />

  </SelectField></Col>
  <Col xs={4} style={style.textStyle}></Col>
  <Col xs={4}> <TextField name="qapi" autoComplete="off"
     style={style.textStyle}
hintText="Quality (API)"
value={this.state.qualityApi}
floatingLabelText="Quality (API)"
onChange={this.handleChangeQualityApi}
/></Col>
        <Col xs={4}> <TextField name="qsul" autoComplete="off"
     style={style.textStyle}
    hintText="Quality (SUL)"
    floatingLabelText="Quality (SUL)"
    value={this.state.qualitySul}
    onChange={this.handleChangeQualitySul}
/></Col>
        <Col xs={4}> <TextField name="tolerence" autoComplete="off"
     style={style.textStyle}
hintText="Tolerence (%)"
floatingLabelText="Tolerence (%)"
value={this.state.tradeTolerence}
onChange={this.handleChangeTradeTolerence}
/></Col>
    </Col>
      </Row>
      <Row>
    <Col xs={6}>
    <h3>Price Details</h3>
    <Col xs={4}> <TextField name="priceType" autoComplete="off"
     style={style.textStyle}
hintText="Price Type"
value={this.state.tradePriceType}
floatingLabelText="Price Type"
onChange={this.handleChangePriceType}
/></Col>
    <Col xs={4}><SelectField name="index"
     style={style.textStyle}
     hintText="Index"
    floatingLabelText="Index"
    value={this.state.tradeIndex}
    onChange={this.handleChangeTradeIndex}
  >
    <MenuItem value="Fixed" primaryText="Fixed" />
    <MenuItem value="Index" primaryText="Index" />
  </SelectField></Col>
    <Col xs={4} style={style.textStyle}></Col>
    <Col xs={4}>
    <TextField name="priceUoM" autoComplete="off"
     style={style.textStyle}
hintText="Price ($/bbl)"
value={this.state.tradePriceUoM}
floatingLabelText="Price ($/bbl)"
onChange={this.handleChangeTradePriceUoM}
/>
</Col>
    <Col xs={5}>

    <TextField name="associatedFees" autoComplete="off"
     style={style.textStyle}
     hintText="Associated Fees"
    floatingLabelText="Associated Fees (Total)"
    value={this.state.tradeAssociatedFees}
    onChange={this.handleChangeTradeAssociatedfees}    />

 </Col>
  <Col xs={3} style={style.colStyle}><div label="Dialog" style={style.tradeViewDetails} onClick={this.handleOpen}>VIEW/EDIT DETAILS</div>
  </Col>
  <Col xs={4}><div style={{fontSize:'12px'}}>Total Amount</div><div style={{fontSize:'20px'}}><b>
    {((parseInt(this.state.tradePriceUoM) * parseInt(this.state.volume)) + (parseInt(this.state.tradeAssociatedFees)))}$</b></div></Col>
    </Col>
    <Col xs={6}>
   <textarea className="newTrade_textarea" value={this.state.tradeComment} onChange={this.handleChangeTradeComment} placeholder="Trader Comments...">

     </textarea>
    </Col>
    </Row>
      
    <Dialog
    title="Header"
    titleStyle={{background:"#1f497d",color:"#fff",lineHeight:"0"}}
    actions={actions}
    modal={false}
    open={this.state.open}
    onRequestClose={this.handleClose}
  >
   <div className="">
   <Col md={6}>
     <h2>New Trade</h2>
     <h4>TR13312</h4>
    </Col>
    <Col md={6}>
    <RaisedButton label="Save" primary={true} style={{float:"right",marginTop:"40px"}} />
    </Col>
    <div className="clearfix"></div>
   </div>

   <div className="line"></div>
   <Table  height={this.state.height}>
<TableHeader
displaySelectAll={this.state.showCheckboxes}
adjustForCheckbox={this.state.showCheckboxes}
>

<TableRow>
  <TableHeaderColumn>Associated Fees Detail</TableHeaderColumn>
  <TableHeaderColumn>Share</TableHeaderColumn>
  <TableHeaderColumn>Total</TableHeaderColumn>
</TableRow>
</TableHeader>
<TableBody displayRowCheckbox={this.state.showCheckboxes}>

<TableRow>
  <TableRowColumn>Marine Freight Estimate</TableRowColumn>
  <TableRowColumn>100%</TableRowColumn>
  <TableRowColumn></TableRowColumn>
</TableRow>
<TableRow>
  <TableRowColumn>Inspector Fees</TableRowColumn>
  <TableRowColumn></TableRowColumn>
  <TableRowColumn>ADD</TableRowColumn>
</TableRow>
<TableRow>
  <TableRowColumn>Agent Fees</TableRowColumn>
  <TableRowColumn></TableRowColumn>
  <TableRowColumn>ADD</TableRowColumn>
</TableRow>
<TableRow>
  <TableRowColumn>Demurrage Estimate</TableRowColumn>
  <TableRowColumn></TableRowColumn>
  <TableRowColumn>ADD</TableRowColumn>
</TableRow>
<TableRow>
  <TableRowColumn>Throughput</TableRowColumn>
  <TableRowColumn></TableRowColumn>
  <TableRowColumn>ADD</TableRowColumn>
</TableRow>
<TableRow>
  <TableRowColumn>Storage Lease</TableRowColumn>
  <TableRowColumn></TableRowColumn>
  <TableRowColumn>ADD</TableRowColumn>
</TableRow>

</TableBody>
</Table>
  </Dialog>
    <Row>
      <div className="terms_conditions">
      <h3>General Terms and Condition</h3>
      <h4>This Trade comes under the <a href="#">terms and condition</a> of:</h4>
      <RaisedButton label="Upload GTC" primary={true} style={style} />
      </div>
      </Row>
      </Grid>
    </div>
  </Dialog>
        </div>
    );
  }
}

export default TradeDataRow;
