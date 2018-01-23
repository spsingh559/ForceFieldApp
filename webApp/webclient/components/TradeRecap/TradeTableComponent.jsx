import React, { Component } from 'react';
import TradeDataRow from './TradeDataRow';

import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

class DraftTradeTableComponent extends Component {

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

    acceptData=(obj)=>{
        this.props.acceptData(obj);
    }

    rejectData=(obj)=>{
        this.props.rejectData(obj);
    }

    AmendTrade=(trid)=>{
        this.props.AmendTrade(trid);
    }

    submitNewTrade=(obj)=>{
        this.props.submitNewTrade(obj);
    }
    
    render() {
        return(
            <div className="trTableContainer">
                <h2>
                    {this.props.headingText}
                    <span>{this.props.number}</span>
                </h2>                
                <Table onRowSelection={this.handleRowSelection} style={{"tableLayout":"fixed"}} wrapperStyle={{margin:"0 30px", overflowX:"hidden"}}>
                <TableHeader displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}>
                  <TableRow>
                    <TableRowColumn style={{"verticalAlign":"middle", "whiteSpace":"normal", "width":"120px", "padding": "5px"}}>Date</TableRowColumn>
                    <TableRowColumn style={{"verticalAlign":"middle", "whiteSpace":"normal", "width":"120px", "padding": "5px"}}>Trade ID</TableRowColumn>
                    <TableRowColumn style={{"verticalAlign":"middle", "whiteSpace":"normal", "width":"120px", "padding": "5px"}}>Type</TableRowColumn>
                    <TableRowColumn style={{"verticalAlign":"middle", "whiteSpace":"normal", "width":"120px", "padding": "5px"}}>Counter Party</TableRowColumn>
                    <TableRowColumn style={{"verticalAlign":"middle", "whiteSpace":"normal", "width":"120px", "padding": "5px"}}>Product</TableRowColumn>
                    <TableRowColumn style={{"verticalAlign":"middle", "whiteSpace":"normal", "width":"120px", "padding": "5px"}}>Quantity</TableRowColumn>
                    <TableRowColumn style={{"verticalAlign":"middle", "whiteSpace":"normal", "width":"120px", "padding": "5px"}}>Location</TableRowColumn>
                    <TableRowColumn style={{"verticalAlign":"middle", "whiteSpace":"normal", "width":"120px", "padding": "5px"}}>Inco Term</TableRowColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                        {
                            this.props.tradeData.map((item, i) => {
                                return (                                    
                                    <TradeDataRow data={item} key={i} 
                                    acceptData={this.acceptData}
                                    rejectData={this.rejectData}
                                    AmendTrade={this.AmendTrade}
                                    submitNewTrade={this.submitNewTrade}
                                    headingText={this.props.headingText}/>
                                );
                            })
                        }           
                   </TableBody>
                </Table>
            </div>
        );
    }
}

export default DraftTradeTableComponent;