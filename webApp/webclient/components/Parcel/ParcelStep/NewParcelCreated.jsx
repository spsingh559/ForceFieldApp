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

export default class NewParcelCreated extends React.Component{

    state={
        showCheckboxes:false
    }

    render(){
        return(
            <div>
                <Table onRowSelection={this.handleRowSelection}>
                <TableHeader displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}>
                  <TableRow>
                   
                    <TableHeaderColumn>BUY ID</TableHeaderColumn>
                    <TableHeaderColumn>SELL ID</TableHeaderColumn>
                    <TableHeaderColumn>VESSEL</TableHeaderColumn>
                    <TableHeaderColumn>SHIPPING CO.</TableHeaderColumn>
                    <TableHeaderColumn>PRODUCT</TableHeaderColumn>
                   
                    <TableHeaderColumn>STATUS</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={this.state.showCheckboxes}>
                    <TableRow> 
           
                       
                        <TableRowColumn>{this.props.parcelSubmit.sell_deal}</TableRowColumn>
                        <TableRowColumn>{this.props.parcelSubmit.buy_deal}</TableRowColumn>
                        <TableRowColumn>{this.props.parcelSubmit.vessel_name} </TableRowColumn>
                        <TableRowColumn>{this.props.parcelSubmit.shipping_company}</TableRowColumn>
                        <TableRowColumn>{this.props.parcelSubmit.product} </TableRowColumn>
                       
                        <TableRowColumn>Planned</TableRowColumn>
                    </TableRow>         
                </TableBody>
                </Table>

                <div className="parceldone">
                    <i className="fa fa-check-circle f-4" aria-hidden="true"></i>
                    <p>Parcel Successfully Created!</p>
                </div>
            </div>
        )
    }
}