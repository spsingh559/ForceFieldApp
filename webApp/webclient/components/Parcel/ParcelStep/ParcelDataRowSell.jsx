import React from 'react';
import {
    Table,
    TableRow,
    TableBody,
    TableHeader,
    TableRowColumn,
  } from 'material-ui/Table';

  import {Collapse,Well,Row,Col} from 'react-bootstrap';

  const style={
    dateRangeStyle:{
        borderRight:"1px solid #ccc",
        marginTop:"5px"
    },
    dateRangeHeader:{
        marginTop: "0",
        color:"#666666"
    },
    paddingZero:{
        padding:"2px 0px"
    }
}

class ParcelDataRowSell extends React.Component {
    state={
        
        showCheckboxes: true,
        slectedTradeID: null,
        flipRow:false
    }

    openCollapse=()=>{
        // this.setState({slectedTradeID: this.props.data.trid});
        // console.log('row clicked=>', this.props.data.trid);
        this.setState({flipRow: true});
        let sellTradeData={
            sell_deal:this.props.data.trid,               
            "Discharge_Port":this.props.data.trade_location,
            "org1":this.props.data.party1,
            "org2":this.props.data.party2,
        }
console.log('-------data from sellTrade---------');
console.log(sellTradeData);
        this.props.sellTradePhase2(sellTradeData);
        
    }
    openCollapseReverse=()=>{
        this.setState({flipRow: false});
    }

    render() {
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
        if(this.state.flipRow==false){
            return(
                <TableRow onTouchTap={this.openCollapse} style={{width:"100%"}} >
                    <TableRowColumn >{this.props.data.create_timestamp}</TableRowColumn>
                    <TableRowColumn>{this.props.data.trid} </TableRowColumn>
                    <TableRowColumn> {Counterparty1} </TableRowColumn>
                    <TableRowColumn> {this.props.data.product_name} </TableRowColumn>
                    <TableRowColumn> {this.props.data.volume} </TableRowColumn>
                    <TableRowColumn> {this.props.data.trade_location} </TableRowColumn>
                    <TableRowColumn> {this.props.data.inco_term} </TableRowColumn>
                </TableRow>
            )
        }
        return(
            <TableRow  style={{width:"100%"}} >
                <TableRowColumn colSpan={4}>Row Has been selected</TableRowColumn>
                <TableRowColumn colSpan={3} onTouchTap={this.openCollapseReverse}> Revert Selection</TableRowColumn>
               
            </TableRow>
        )
    }
}

export default ParcelDataRowSell;