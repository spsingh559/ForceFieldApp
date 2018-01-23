import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Toggle from 'material-ui/Toggle';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Chip from 'material-ui/Chip';

const ApprovingAuth={
  SHELL:"trader1@shell.com",
  BP:"trader1@bp.com",
  Statoil:"trader1@stat-oil.com",
  MERCURIA:"trader1@mercuria.com"
}



import {Table,TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn} from 'material-ui/Table';

const style={
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
export default class NewTradeComponent extends React.Component {
  state = {
    value: "",
    open: false,
    firstPartyTxt:"",
    secondPartyTxt:"",
    incoTrem:"",
    tradeLocation:"",
    tradeLocationSub:"",
    deliveryDateFrom:"",
    deliveryDateTo:"",
    laycanDateFrom:"",
    laycanDateTo:"",
    commodity:"",
    productName:"",
    tradeVolume:"",
    qualityApi:"",
    qualitySul:"",
    tradeTolerence:"",
    tradePriceType:"",
    tradeIndex:"",
    tradePriceUoM:0,
    tradeAssociatedFees:0,
    tradeComment:"",
    showCheckboxes: false,
    height: '300px',
    volume:0,
    sellBtn:'',
    buyBtn:'',
    buttonChip:'',
    BuySellButtonDataStatus:false
    };
  
    handleOpen = () => {
      this.setState({open: true});
    };
  
    handleClose = () => {
      this.setState({open: false});
    };

    handleChangeFirstPartyTxt=(e)=>{
      this.setState({firstPartyTxt:e.target.value});
    }
    handleChangevolume=(e)=>{
      this.setState({volume:e.target.value});
    }
    handleChangeRadio =(event, index, value) => this.setState({selectTradeByRadio:value});
    handleChangeSecondPartyTxt=(event, index, value) => this.setState({secondPartyTxt:value});
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

    submitNewTrade=()=>{
      let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
      // let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
      let FirstPartyName=retrievedUserDetails.username.split('@');
      let partyFinalName=FirstPartyName[1].split('.');
      let partyFinalNameCompany=partyFinalName[0];
let approver;
      if(this.state.secondPartyTxt=="STAT-OIL"){
        approver=ApprovingAuth.Statoil
      }else if(this.state.secondPartyTxt=="BP" ){
        approver=ApprovingAuth.BP
      }
      else if(this.state.secondPartyTxt=="MERCURIA" ){
        approver=ApprovingAuth.MERCURIA
      }
      else if(this.state.secondPartyTxt=="SHELL" ){
        approver=ApprovingAuth.SHELL
      }
        console.log('-----data from checkbox is---------');
        // console.log(this.state.selectTradeByRadio);
        var tradeDir;
        var tradeBuyDir;
        if(this.state.buyBtn.length==0){
          tradeDir="SELL";
          tradeBuyDir="BUY"
        }else{
          tradeDir="BUY";
          tradeBuyDir="SELL"
        }

        console.log('tradeDir'+ tradeDir);
        console.log('tradeBuyDir'+ tradeBuyDir);


 
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
        direction:tradeDir,
        counter_party_direction:tradeBuyDir,
        party1:partyFinalNameCompany,
        party2:this.state.secondPartyTxt,
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
        "buyer_id":retrievedUserDetails.username,
        "seller_id":retrievedUserDetails.username,
        "last_update_timestamp":latestDate,
        "updated_by":retrievedUserDetails.username,
        "trade_confirm_doc":"tradeconfirmdoc.pdf",
        "trader_comments":this.state.tradeComment,
        total_fee:((parseInt(this.state.tradePriceUoM) * parseInt(this.state.volume)) + (parseInt(this.state.tradeAssociatedFees)))+" $",
        approver:approver
        

      }

      this.props.submitNewTrade(newTradeObj);
      //console.log(newTradeObj);
      
    }
    formatDate = (date) => { 
      if(date !== ""){
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        }
    }

    
    handleBuyOption=()=>{
      this.setState({buyBtn:"BUY",BuySellButtonDataStatus:true,buttonChip:"Buy Trade"})
    }

    handleSellOption=()=>{
      this.setState({sellBtn:"SELL",buttonChip:"Sell Trade",BuySellButtonDataStatus:true})
    }
  
  render() {
   // console.log('-------------data of first textbox--------');
//console.log(this.state);
    
var BuySellButtonData;
if(this.state.BuySellButtonDataStatus==false){
  BuySellButtonData=
<ul className="trSwitch" style={{width:"max-content",marginBottom:"11px",marginTop:"24px"}}>
                 <li><button onClick={this.handleBuyOption} className="selected"> BUY</button></li>
               <li><button onClick={this.handleSellOption}> SELL</button></li>
               </ul>
  
}else{
  BuySellButtonData=<Chip style={{width:"max-content",marginBottom:"11px",marginTop:"34px"}} >
 {this.state.buttonChip}
</Chip>
}
    
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <div style={{paddingLeft:"40px",float:"left"}}><b>Total</b></div>,
      <div style={{paddingLeft:"40px",float:"left"}}><b>$3756347</b></div>
    ];
    let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
    let FirstPartyName=retrievedUserDetails.username.split('@');
    let partyFinalName=FirstPartyName[1].split('.');
    let partyFinalNameCompany=partyFinalName[0];
    console.log('------Party Name----------');
    console.log(partyFinalNameCompany);

      return (
        <div style={{marginTop:"65px"}}>
          {/* <h1 style={{marginTop:"100px"}}> New Trade Component </h1> */}
          <Grid>
        
          <Row>
            <Col xs={6}><h1>New Trade</h1>
            </Col>
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
          value={partyFinalNameCompany}
          disabled={true}
          onChange={this.handleChangeFirstPartyTxt}
          /></Col>
          <Col xs={4}><SelectField name="secondParty"
           style={style.textStyle}
           hintText="Counterparty"
          floatingLabelText="Counterparty"
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
          {BuySellButtonData}
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
         <textarea className="newTrade_textarea" value={this.state.tradeComment} onChange={this.handleChangeTradeComment} placeholder="Trader Comments">

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
      )
    }
  }



