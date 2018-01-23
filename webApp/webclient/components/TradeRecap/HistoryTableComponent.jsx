import React, { Component } from 'react';
import HistoryTradeDataRow from './HistoryTradeDataRow';

import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

class HistoryTableComponent extends React.Component {

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

  

    viewHistory=(tId)=>{
        this.props.viewHistory(tId);
    }
    
    render() {
        return(
            <div className="trTableContainer">
                          
                <Table onRowSelection={this.handleRowSelection}>
                <TableHeader displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}>
                  <TableRow>
                    <TableHeaderColumn>Date</TableHeaderColumn>
                    <TableHeaderColumn>Trade ID</TableHeaderColumn>
                    <TableHeaderColumn>Type</TableHeaderColumn>
                    <TableHeaderColumn>Counter Party</TableHeaderColumn>
                    <TableHeaderColumn>Product</TableHeaderColumn>
                    <TableHeaderColumn>Quantity</TableHeaderColumn>
                    <TableHeaderColumn>Created By</TableHeaderColumn>
                    <TableHeaderColumn>Last Updated By</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                        {
                            this.props.historytradeData.map((item, i) => {
                                return (                                    
                                    <HistoryTradeDataRow data={item} key={i} 
                                    viewHistory={this.viewHistory}                           
                                   />
                                );
                            })
                        }           
                   </TableBody>
                </Table>
            </div>
        );
    }
}

export default HistoryTableComponent;