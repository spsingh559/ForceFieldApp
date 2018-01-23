import React, { Component } from 'react';
import AgentDataRow from './AgentDataRow';

import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';



class AgentTableComponent extends Component {

    

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
    handleChangeAgentSubmit=(Obj)=>{
        this.props.handleChangeAgentSubmit(Obj);
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
                                    <AgentDataRow handleChangeAgentSubmit={this.handleChangeAgentSubmit} data={item} key={i} />
                                );
                            })
                        }           
                   </TableBody>
                </Table>
            </div>
        );
    }
}

export default AgentTableComponent;