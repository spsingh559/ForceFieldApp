import React from 'react';
import OngoingDataRow from './OngoingDataRow';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class OngoingComponent extends React.Component {
  state = {
   
  };
    render(){
      return(
        <div className="trTableContainer">
            <h2>
                {this.props.headingText}
                <span>{this.props.number}</span>
            </h2>                
            <Table >
            <TableHeader >
              <TableRow>
                <TableHeaderColumn>APPOINTING CO.</TableHeaderColumn>
                <TableHeaderColumn>DELIVERY ID</TableHeaderColumn>
                <TableHeaderColumn>VOLUME</TableHeaderColumn>
                <TableHeaderColumn>DEVIATION</TableHeaderColumn>
                <TableHeaderColumn>LOAD PORT</TableHeaderColumn>
                <TableHeaderColumn>DISCHARGE PORT</TableHeaderColumn>
                <TableHeaderColumn>DATE</TableHeaderColumn>
                <TableHeaderColumn>VESSEL</TableHeaderColumn>
                <TableHeaderColumn>Status</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
                    {
                        this.props.data.map((item, i) => {
                            return (                                    
                                <OngoingDataRow data={item} key={i} />
                            );
                        })
                    }           
               </TableBody>
            </Table>
        </div>
    );
    }

}
