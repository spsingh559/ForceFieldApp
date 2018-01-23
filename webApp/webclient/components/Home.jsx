import React from 'react';
import { Link } from 'react-router';
import Axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
// import {Grid} from 'react-bootstrap';
import {Grid,Row,Col} from 'react-bootstrap';
import TradePortalComponent from './Dashboard/TradePortalComponent.jsx';
import TradeStatusAndRecap from './Dashboard/TradeStatusAndRecap/TradeStatusAndRecapComponent.jsx';
import Notification from './Dashboard/Notification.jsx';
import ParcelStatusComponent from './Dashboard/ParcelStatusComponent.jsx';
import TradeSummaryPublished from './Dashboard/TradeSummaryPublished.jsx';


export default class Home extends React.Component {

  state={
    buyCount:0,
    sellCount:0,
    animating:false,
    tradeData:[],
    pendingCount:0,
    correctionPendingCount:0
  }

  closeActivityIndicator = () =>setTimeout(() =>this.setState({
    animating: true }), 4000);

  componentDidMount=()=>{
    this.closeActivityIndicator();
    console.log('----------calling all trade data--------------');
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
        // this.setState({tradeData:data.data});
        var buyCount=0;
        var sellCount=0;
        let mainCTdata=[];
        let pendingCount=0;
        let correctionPendingCount=0;
        data.data.forEach((data)=>{
            // if(data.direction=="BUY"){
            //   buyCount++;
            // }else {
            //   sellCount++;
            // }

            if( (data.status=="Draft" || data.status=="Amended") && data.approver==retrievedUserDetails.username){
              pendingCount++;
            }

            if( (data.status=="Draft" || data.status=="Amended") && data.created_by==retrievedUserDetails.username){
              correctionPendingCount++;
            }

            if(data.status=="ConfirmedTrade" ){
              if(data.approver==retrievedUserDetails.username || data.created_by==retrievedUserDetails.username){
                mainCTdata.push(data);
               if(data.direction=="BUY"){
              buyCount++;
            }else {
              sellCount++;
            }
       
        // this.setState({countTrade:countTrade,ctData:mainCTdata});
              }
            }

          })
    console.log(buyCount+""+sellCount+""+data.data.length);
          this.setState({buyCount:buyCount,sellCount:sellCount,totalTrade:mainCTdata.length,tradeData:mainCTdata,pendingCount:pendingCount,
            correctionPendingCount:correctionPendingCount});
             
      })
      .catch((error) => {
      console.log(error);
      console.log(error+"error in get Trade");
      });
   

  }
  
  render() {
    let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
  
    if(this.state.animating==false){
      return(
      <div style={{marginTop:"90px",width:"500px",height:"500px"}}>
      <center>
        <h1> Hey {retrievedUserDetails.username}</h1>
        <br />
        <h5> Please Wait your Dashboard is Getting Ready </h5>
      
      <CircularProgress size={80} thickness={7} />
      </center>
    </div>
      )
    }else{

      return (
       
        <Grid style={{marginTop:"90px"}}>  
        
            
         
			<Row >
			<Col xs={2}><TradePortalComponent />
      </Col>
      <Col xs={7}><TradeStatusAndRecap buyCount={this.state.buyCount} sellCount={this.state.sellCount} totalTrade={this.state.totalTrade} 
      correctionPendingCount={this.state.correctionPendingCount}
      pendingCount={this.state.pendingCount}/>
      </Col>
      <Col xs={3}><Notification />
      </Col>
			</Row>
      <Row>
        <Col xs={6}> <ParcelStatusComponent />
        </Col>
        <Col xs={6}> <TradeSummaryPublished />
        </Col>
        </Row>        
          
         
          </Grid>
      )
    }
    }
  }



