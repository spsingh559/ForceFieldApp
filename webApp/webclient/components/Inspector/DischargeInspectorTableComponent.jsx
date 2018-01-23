import React, { Component } from 'react';
import DischargeInspectorDataRow from './DischargeInspectorDataRow';

import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';



class DischargeInspectorTableComponent extends Component {

    

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
    handleDischargeChangeInspectorSubmit=(Obj)=>{
        this.props.handleDischargeChangeInspectorSubmit(Obj);
    }
    render() { 
        console.log("------------DATA------------------");
        console.log(this.props.data);
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
                    <TableHeaderColumn>APPOINTING CO.</TableHeaderColumn>
                    <TableHeaderColumn>VESSEL</TableHeaderColumn>
                    <TableHeaderColumn>SHIPPING CO.</TableHeaderColumn>
                    <TableHeaderColumn>LOAD DATE</TableHeaderColumn>
                    <TableHeaderColumn>LOCATION</TableHeaderColumn>
                    <TableHeaderColumn>LAYCAN</TableHeaderColumn>
                    <TableHeaderColumn>CAPACITY</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                        {
                            this.props.data.map((item, i) => {
                                return (                                    
                                    <DischargeInspectorDataRow 
                                    handleDischargeChangeInspectorSubmit={this.handleDischargeChangeInspectorSubmit} data={item} key={i} />
                                );
                            })
                        }           
                   </TableBody>
                </Table>
            </div>
        );
    }
}

export default DischargeInspectorTableComponent;