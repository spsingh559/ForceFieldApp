import React, { Component } from 'react';
import ParcelPendingDataRow from './ParcelPendingDataRow';
import Axios from 'axios';

import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';


const data = [
    {
        date: 'D56781',
        tradeID: 'TR 7612',
        type: 'TR 5496',
        counterParty: 'Princess',
        product:'Maersk',
        quantity: 'BRENT',
        location: 'ROT - AMS - GMH',
        incoTerm: 'Pending',
        
    },
    {
        date: 'D56781',
        tradeID: 'TR 7612',
        type: 'TR 5496',
        counterParty: 'Princess',
        product:'Maersk',
        quantity: 'BRENT',
        location: 'ROT - AMS - GMH',
        incoTerm: 'Pending',
       
    },
    {
               date: 'D56781',
        tradeID: 'TR 7612',
        type: 'TR 5496',
        counterParty: 'Princess',
        product:'Maersk',
        quantity: 'BRENT',
        location: 'ROT - AMS - GMH',
        incoTerm: 'Pending',
       
    },
];

const loggedinUserDetails = JSON.parse(sessionStorage.getItem('userLoginDetails'));

class ParcelTableComponent extends Component {

    state = {
        fixedHeader: false,
        fixedFooter: false,
        stripedRows: true,
        showRowHover: true,
        selectable: true,
        multiSelectable: false,
        enableSelectAll: false,
        deselectOnClickaway: true,
        showCheckboxes: false,
        height: '300px',
      };
    
      isSelected = (index) => {
        return this.state.selected.indexOf(index) !== -1;
      };
    
      handleRowSelection = (selectedRows) => {
        this.setState({
          selected: selectedRows,
        });
    };

    saveDataFlow2=(obj)=>{
        console.log('new data from parcelData is');
        console.log(' object');
        console.log(obj);
        
        
        Axios({
            method:'post',
            url: 'channels/mychannel/chaincodes/ParcelCC/fcnname/updateParcelDeviationRequest',
            data: obj,
            headers: {  
                'Authorization': 'Bearer '+ loggedinUserDetails.message.token,
                'Content-Type': 'application/json'
            }
        }).then((data)=>{
           alert('Hash for Deviate parcel'+ data.data )
           window.location.reload();      
        })
    }

    
    render() {
        return(
            <div className="trTableContainer">
                <h2>
                    {this.props.headingText}
                    <span>{this.props.number}</span>
                </h2>                
                <Table onRowSelection={this.handleRowSelection}>
                <TableHeader  displaySelectAll={this.state.showCheckboxes}
                    adjustForCheckbox={this.state.showCheckboxes}
                >
                <TableRow>
                    <TableHeaderColumn>DELIVERY ID</TableHeaderColumn>
                    <TableHeaderColumn>BUY ID</TableHeaderColumn>
                    <TableHeaderColumn>SELL ID</TableHeaderColumn>
                    <TableHeaderColumn>VESSEL</TableHeaderColumn>
                    <TableHeaderColumn>SHIPPING CO.</TableHeaderColumn>
                    <TableHeaderColumn>PRODUCT</TableHeaderColumn>
                    {/* <TableHeaderColumn>Location</TableHeaderColumn> */}
                    <TableHeaderColumn>STATUS</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                        {
                            this.props.pendingParcelData.map((item, i) => {
                                return (                                    
                                    <ParcelPendingDataRow data={item} key={i} saveDataFlow2={this.saveDataFlow2} />
                                );
                            })
                        }           
                   </TableBody>
                </Table>
            </div>
        );
    }
}

export default ParcelTableComponent;