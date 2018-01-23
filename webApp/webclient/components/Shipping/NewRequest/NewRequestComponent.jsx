import React from 'react';
import NewRequestDataRow from './NewRequestDataRow';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class NewRequestComponent extends React.Component {
  state = {
    showCheckboxes: false
  }

  approveButton=(obj)=>{
      this.props.approveButton(obj);
  }

    render(){
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
                <TableHeaderColumn>APPOINTING CO.</TableHeaderColumn>
                <TableHeaderColumn>DELIVERY ID</TableHeaderColumn>
                <TableHeaderColumn>VOLUME</TableHeaderColumn>
                <TableHeaderColumn>DEVIATION</TableHeaderColumn>
                <TableHeaderColumn>LOAD PORT</TableHeaderColumn>
                <TableHeaderColumn>DISCHARGE PORT</TableHeaderColumn>
                <TableHeaderColumn>DATE</TableHeaderColumn>
                <TableHeaderColumn>VESSEL</TableHeaderColumn>
                <TableHeaderColumn></TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
                    {
                        this.props.data.map((item, i) => {
                            return (                                    
                                <NewRequestDataRow data={item} key={i} approveButton={this.approveButton}/>
                            );
                        })
                    }           
               </TableBody>
            </Table>
        </div>
    );
    }

}


