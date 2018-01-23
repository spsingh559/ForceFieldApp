import React from 'react';
import NewTradeComponent from './NewTradeComponent.jsx';
import Axios from 'axios';
import Snackbar from 'material-ui/Snackbar';

export default class ParentNewTrade extends React.Component{

    state={
        autoHideDuration: 4000,
        message: 'Transaction Hash for New Trade is',
        open: false,
        trHash:''
    }
    componentDidMount=()=>{

      
    }

    static get contextTypes() {
        return {
          router: React.PropTypes.object.isRequired
        }
      }


    submitNewTrade=(obj)=>{
console.log('-----------data reach to parent');
console.log(obj);
let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));


Axios({
method:'post',
url:'/channels/mychannel/chaincodes/TradeCC/fcnname/createTrade',
data:obj,
headers: {
    'Authorization': 'Bearer '+ retrievedUserDetails.message.token,
    'Content-Type': 'application/json'
}
})
.then((data) => {
console.log('new trade connected to server for post is');
console.log(data.data);
alert('Transaction hash for new trade is'+ data.data);
this.context.router.push('/tradeRecap');
       
})
.catch((error) => {
console.log(error);
console.log(error+"error in new Trade");
});


    }
    render(){
        // var displayMessage=this.state.message+this.state.trHash;
        // console.log(displayMessage);
        return(
            <div>
                <NewTradeComponent submitNewTrade={this.submitNewTrade}/>
                {/* <Snackbar
          open={this.state.open}
          message={this.state.message}
         
          autoHideDuration={this.state.autoHideDuration}
         
          onRequestClose={this.handleRequestClose}
        /> */}
                </div>
        )
    }
}