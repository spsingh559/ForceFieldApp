import React from 'react';
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
  
import ParcelDataRow from './ParcelDataRow';

const tradeData = [
    {
      "agent_fee": "240",
      "associated_fees": "1800052",
      "commodity": "crudeoil",
      "counter_party_direction": "SELL",
      "create_timestamp": "3-4-2018",
      "created_by": "uniper1",
      "delivery_date": "12-2-2018",
      "demurrage_estimate": "360",
      "direction": "BUY",
      "inco_term": "BRENT",
      "index": "loreum",
      "inspector_fee": "260",
      "last_update_timestamp": "uniper1",
      "laycan_date": "12-3-2018",
      "marine_freight_estimate": "60",
      "parcel_id": "",
      "party1": "SHELL",
      "party2": "BP",
      "price_UoM": "100BBL",
      "price_type": "Indexed",
      "product_name": "brent",
      "quality_api": "60",
      "quality_sul": "0.6",
      "status": "Draft",
      "storate_lease": "560",
      "throughput": "460",
      "tolerance": "6",
      "total_fee": "789660",
      "trade_confirm_doc": "tradeconfirmdoc.pdf",
      "trade_location": "Netherlends",
      "trader_comments": "Good",
      "trid": "TRID1515846408704",
      "updated_by": "bp1",
      "version": "1.0",
      "volume": "760",
    },
    {
      "agent_fee": "240",
      "associated_fees": "1800052",
      "commodity": "crudeoil",
      "counter_party_direction": "BUY",
      "create_timestamp": "3-4-2018",
      "created_by": "uniper1",
      "delivery_date": "12-2-2018",
      "demurrage_estimate": "360",
      "direction": "BUY",
      "inco_term": "BRENT",
      "index": "loreum",
      "inspector_fee": "260",
      "last_update_timestamp": "uniper1",
      "laycan_date": "12-3-2018",
      "marine_freight_estimate": "60",
      "parcel_id": "",
      "party1": "BP",
      "party2": "HP",
      "price_UoM": "100BBL",
      "price_type": "Indexed",
      "product_name": "brent",
      "quality_api": "60",
      "quality_sul": "0.6",
      "status": "Draft",
      "storate_lease": "560",
      "throughput": "460",
      "tolerance": "6",
      "total_fee": "789660",
      "trade_confirm_doc": "tradeconfirmdoc.pdf",
      "trade_location": "Netherlends",
      "trader_comments": "Good",
      "trid": "TRID1515846460217",
      "updated_by": "bp1",
      "version": "1.0",
      "volume": "760"
    },
    {
      "agent_fee": "240",
      "associated_fees": "1800052",
      "commodity": "crudeoil",
      "counter_party_direction": "BUY",
      "create_timestamp": "3-4-2018",
      "created_by": "uniper1",
      "delivery_date": "12-2-2018",
      "demurrage_estimate": "360",
      "direction": "SELL",
      "inco_term": "BRENT",
      "index": "loreum",
      "inspector_fee": "260",
      "last_update_timestamp": "uniper1",
      "laycan_date": "12-3-2018",
      "marine_freight_estimate": "60",
      "parcel_id": "",
      "party1": "BP",
      "party2": "HP",
      "price_UoM": "100BBL",
      "price_type": "Indexed",
      "product_name": "brent",
      "quality_api": "60",
      "quality_sul": "0.6",
      "status": "Draft",
      "storate_lease": "560",
      "throughput": "460",
      "tolerance": "6",
      "total_fee": "789660",
      "trade_confirm_doc": "tradeconfirmdoc.pdf",
      "trade_location": "Netherlends",
      "trader_comments": "Good",
      "trid": "TRID1515846460218",  
      "updated_by": "bp1",
      "version": "1.0",
      "volume": "760"
    },
    {
      "agent_fee": "240",
      "associated_fees": "1800052",
      "commodity": "crudeoil",
      "counter_party_direction": "BUY",
      "create_timestamp": "3-4-2018",
      "created_by": "uniper1",
      "delivery_date": "12-2-2018",
      "demurrage_estimate": "360",
      "direction": "SELL",
      "inco_term": "BRENT",
      "index": "loreum",
      "inspector_fee": "260",
      "last_update_timestamp": "uniper1",
      "laycan_date": "12-3-2018",
      "marine_freight_estimate": "60",
      "parcel_id": "",
      "party1": "BP",
      "party2": "HP",
      "price_UoM": "100BBL",
      "price_type": "Indexed",
      "product_name": "brent",
      "quality_api": "60",
      "quality_sul": "0.6",
      "status": "Rejected",
      "storate_lease": "560",
      "throughput": "460",
      "tolerance": "6",
      "total_fee": "789660",
      "trade_confirm_doc": "tradeconfirmdoc.pdf",
      "trade_location": "Netherlends",
      "trader_comments": "Good",
      "trid": "TRID1515846460219",
      "updated_by": "bp1",
      "version": "1.0",
      "volume": "760"
    },
    {
      "agent_fee": "240",
      "associated_fees": "1800052",
      "commodity": "crudeoil",
      "counter_party_direction": "BUY",
      "create_timestamp": "3-4-2018",
      "created_by": "uniper1",
      "delivery_date": "12-2-2018",
      "demurrage_estimate": "360",
      "direction": "BUY",
      "inco_term": "BRENT",
      "index": "loreum",
      "inspector_fee": "260",
      "last_update_timestamp": "uniper1",
      "laycan_date": "12-3-2018",
      "marine_freight_estimate": "60",
      "parcel_id": "",
      "party1": "BP",
      "party2": "HP",
      "price_UoM": "100BBL",
      "price_type": "Indexed",
      "product_name": "brent",
      "quality_api": "60",
      "quality_sul": "0.6",
      "status": "Pending",
      "storate_lease": "560",
      "throughput": "460",
      "tolerance": "6",
      "total_fee": "789660",
      "trade_confirm_doc": "tradeconfirmdoc.pdf",
      "trade_location": "Netherlends",
      "trader_comments": "Good",
      "trid": "TRID1515846460220",
      "updated_by": "bp1",
      "version": "1.0",
      "volume": "760",
      "approver": "trader1@uniper.com"
    },
    {
      "agent_fee": "240",
      "associated_fees": "1800052",
      "commodity": "crudeoil",
      "counter_party_direction": "BUY",
      "create_timestamp": "3-4-2018",
      "created_by": "uniper1",
      "delivery_date": "12-2-2018",
      "demurrage_estimate": "360",
      "direction": "BUY",
      "inco_term": "BRENT",
      "index": "loreum",
      "inspector_fee": "260",
      "last_update_timestamp": "uniper1",
      "laycan_date": "12-3-2018",
      "marine_freight_estimate": "60",
      "parcel_id": "",
      "party1": "BP",
      "party2": "HP",
      "price_UoM": "100BBL",
      "price_type": "Indexed",
      "product_name": "brent",
      "quality_api": "60",
      "quality_sul": "0.6",
      "status": "ConfirmedTrade",
      "storate_lease": "560",
      "throughput": "460",
      "tolerance": "6",
      "total_fee": "789660",
      "trade_confirm_doc": "tradeconfirmdoc.pdf",
      "trade_location": "Netherlends",
      "trader_comments": "Good",
      "trid": "TRID1515846460221",
      "updated_by": "bp1",
      "version": "1.0",
      "volume": "760"
    },
    {
      "agent_fee": "240",
      "associated_fees": "1800052",
      "commodity": "crudeoil",
      "counter_party_direction": "BUY",
      "create_timestamp": "3-4-2018",
      "created_by": "uniper1",
      "delivery_date": "12-2-2018",
      "demurrage_estimate": "360",
      "direction": "SELL",
      "inco_term": "BRENT",
      "index": "loreum",
      "inspector_fee": "260",
      "last_update_timestamp": "uniper1",
      "laycan_date": "12-3-2018",
      "marine_freight_estimate": "60",
      "parcel_id": "",
      "party1": "BP",
      "party2": "HP",
      "price_UoM": "100BBL",
      "price_type": "Indexed",
      "product_name": "brent",
      "quality_api": "60",
      "quality_sul": "0.6",
      "status": "ConfirmedTrade",
      "storate_lease": "560",
      "throughput": "460",
      "tolerance": "6",
      "total_fee": "789660",
      "trade_confirm_doc": "tradeconfirmdoc.pdf",
      "trade_location": "Netherlends",
      "trader_comments": "Good",
      "trid": "TRID1515846460212",
      "updated_by": "bp1",
      "version": "1.0",
      "volume": "760"
    }
  ]
 

class SelectBuyTradeComponent extends React.Component{

    state = {
        fixedHeader: false,
        fixedFooter: false,
        stripedRows: true,
        showRowHover: true,
        selectable: true,
        multiSelectable: false,
        enableSelectAll: false,
        deselectOnClickaway: true,
        showCheckboxes: true,
        height: '300px',
      };
    
      isSelected = (index) => {
        return this.state.selected.indexOf(index) !== -1;
      };
    
      handleRowSelection = (selectedRows) => {
          console.log(selectedRows)
        this.setState({
          selected: selectedRows,
        });

    };

    buyTradePhase1=(obj)=>{
      this.props.buyTradePhase1(obj);
    }

 
    render(){
        return(
            <div className="trTableContainer">
                <h2>
                    {/* {this.props.headingText}
                    <span>{this.props.number}</span> */}
                </h2>                
                <Table 
                  onRowSelection={this.handleRowSelection} 

                  selectable={this.state.selectable}
                  multiSelectable={this.state.multiSelectable}>
                <TableHeader 
                  displaySelectAll={this.state.showCheckboxes}
                  adjustForCheckbox={this.state.showCheckboxes}
                  enableSelectAll={this.state.enableSelectAll}
                >
                  <TableRow>
                    <TableHeaderColumn>Date</TableHeaderColumn>
                    <TableHeaderColumn>Trade ID</TableHeaderColumn>
                    <TableHeaderColumn>Counter Party</TableHeaderColumn>
                    <TableHeaderColumn>Product</TableHeaderColumn>
                    <TableHeaderColumn>Quantity</TableHeaderColumn>
                    <TableHeaderColumn>Location</TableHeaderColumn>
                    <TableHeaderColumn>Inco Term</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody 
                   displayRowCheckbox={this.state.showCheckboxes}
                   deselectOnClickaway={this.state.deselectOnClickaway}
                   showRowHover={this.state.showRowHover}
                   stripedRows={this.state.stripedRows}
                >
                        {
                            this.props.buytrades.map((item, i) => {
                                return (                                    
                                    <ParcelDataRow data={item} key={i}
                                    buyTradePhase1={this.buyTradePhase1} />
                                );
                            })
                        }           
                   </TableBody>
                </Table>
            </div>
        )
    }
}

export default SelectBuyTradeComponent;