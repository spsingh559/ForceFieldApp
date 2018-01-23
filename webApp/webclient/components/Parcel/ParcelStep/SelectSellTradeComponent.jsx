import React from 'react';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
import ParcelDataRowSell from './ParcelDataRowSell';

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
 

class SelectSellTradeComponent extends React.Component {

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
        confirmedTrade: []
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

    sellTradePhase2=(obj)=>{
      this.props.sellTradePhase2(obj);
    }

  
    render(){
        return(
            <div className="trTableContainer">
                <h2>
                    {/* {this.props.headingText}
                    <span>{this.props.number}</span> */}
                </h2>                
                <Table onRowSelection={this.handleRowSelection}>
                <TableHeader displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}>
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
                <TableBody>
                        {
                            this.props.selltrades.map((item, i) => {
                                return (                                    
                                    <ParcelDataRowSell data={item} key={i} 
                                    sellTradePhase2={this.sellTradePhase2}/>
                                );
                            })
                        }           
                   </TableBody>
                </Table>
            </div>
        )
    }
}

export default SelectSellTradeComponent;