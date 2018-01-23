import React from 'react';


import {
    Table,
    TableRow,
    TableBody,
    TableHeader,
    TableRowColumn,
    TableHeaderColumn
  } from 'material-ui/Table';

  class HistoryTradeDataRow extends React.Component{
    state={

    }
    render(){
        let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
        let FirstPartyName=retrievedUserDetails.username.split('@');
        let partyFinalName=FirstPartyName[1].split('.');
        let partyFinalNameCompany=partyFinalName[0].toUpperCase();
       console.log('--------------------'+partyFinalNameCompany);
    //    console.log('--------------------'+ this.props.data.party2);
        let Counterparty1;
        
        if(this.props.data.Value.party2 == partyFinalNameCompany){
         Counterparty1 = this.props.data.Value.party1;
         console.log(Counterparty1);
        }else{
         Counterparty1 = this.props.data.Value.party2;
        }
     
        // Type logic
     
        let tradeCreatedBy = this.props.data.Value.created_by.split('@')[1].split('.')[0].toUpperCase();
     
     let tradeDirection;
     if(tradeCreatedBy == partyFinalNameCompany){
     tradeDirection = this.props.data.Value.direction;
     }else{
     tradeDirection = this.props.data.Value.counter_party_direction;
     }
     
     
    return (
        <div style={{width:"auto"}}>
 
             <TableRow onTouchTap={this.openCollapse} style={{width:"100%"}} >
                 <TableRowColumn style={{width:'10%'}}>{this.props.data.Value.last_update_timestamp}</TableRowColumn>
                 <TableRowColumn style={{width:'10%'}}>{this.props.data.Value.trid} </TableRowColumn>
                 <TableRowColumn style={{width:'10%'}}> {tradeDirection} </TableRowColumn>
                 <TableRowColumn style={{width:'10%'}}> {Counterparty1} </TableRowColumn>
                 <TableRowColumn style={{width:'10%'}}> {this.props.data.Value.product_name} </TableRowColumn>
                 <TableRowColumn style={{width:'10%'}}> {this.props.data.Value.volume} </TableRowColumn>
                 <TableRowColumn style={{width:'10%'}}> {this.props.data.Value.created_by} </TableRowColumn>
                 <TableRowColumn style={{width:'10%'}}> {this.props.data.Value.updated_by} </TableRowColumn>
             </TableRow>
             </div>
            );
          }
        
        } 
    export default HistoryTradeDataRow;