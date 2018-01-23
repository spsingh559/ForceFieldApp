import React, { Component } from 'react';
import { Link } from 'react-router';
import {Grid,Row,Col} from 'react-bootstrap';

class SecondaryNavigation extends Component{

    state={
        draft:true,
        amended:false,
        rejected:false
    }

    static get contextTypes() {
        return {
          router: React.PropTypes.object.isRequired
        }
      }

    draftClickHandler = (e) => {     
        console.log(e)
        this.props.draftViewNavigation();
        // this.context.router.push('/tradeRecap');
        // window.location.reload();
        this.setState({
            draft:true,
            amended:false,
            rejected:false
        })
    }

    amendClickHandler = (e) => {     
        console.log(e)
        this.props.amendDataView();

        this.setState({
            draft:false,
            amended:true,
            rejected:false
        })
    }

    rejectedClickHandler = (e) => {     
    //    console.log(e)
    console.log('Reject Tab Clicked');
    this.props.rejectDataView();
       
        this.setState({
            draft:false,
            amended:false,
            rejected:true
        })

    }

    render() {
        return(
            <div className="trSecNav">
                <a className={this.state.draft ? "trLink selected" : "trLink"} onTouchTap={() => this.draftClickHandler(event)}>Draft</a>
                <a className={this.state.amended ? "trLink selected" : "trLink"} onTouchTap={() => this.amendClickHandler(event)}>Amended</a>
                <a className={this.state.rejected ? "trLink selected" : "trLink"} onTouchTap={() => this.rejectedClickHandler(event)}>Rejected</a>
            </div>
        );
    }
}

export default SecondaryNavigation;