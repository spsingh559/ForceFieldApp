import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class vesselComponent extends React.Component{

    state={
        vesselselected:false,
        vesselSelectedShow:false
    }

    selectVessel = () => {
        
        this.setState((prevState, props)=>{
           return {vesselselected:!prevState.vesselselected}
        }, () => console.log(this.state.vesselselected))
        this.setState({vesselSelectedShow:true});
       
    }

    createParcel=()=>{
        // let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
      let  shipping_company;
        if(this.props.vessel.vesselName=="The Princess"){
            shipping_company="shipping1@shipping.com";
        }else{
            shipping_company="shipping2@shipping.com";
        }
    this.props.vesselObj({
        vessel_name:this.props.vessel.vesselName,
        shipping_company:shipping_company
    });
}

    // saveDataVessel=()=>{
    //     this.setState({vesselSelectedShow:true});
        
    // }
    RevertChange=()=>{
        this.setState({vesselSelectedShow:false});
    }

    render() {
        if(this.state.vesselSelectedShow==false){
        return (
            <div className={this.state.vesselselected ? "vessel selected" : "vessel"} onClick={this.selectVessel}>
                <h4>{this.props.vessel.vesselName}</h4>
                <div>
                    <p>
                        {this.props.vessel.shipping_company} 
                        <span>{this.props.vessel.capacity}</span>
                    </p>
                    <p>{this.props.vessel.date}</p>
                </div>
               
            </div>
        );
    }else{
        return(
        <div>
        <h4>{this.props.vessel.vesselName} Has been selected</h4>

        <h6 onTouchTap={this.RevertChange}> Revert Changes </h6>
        <br />
        <br />
        <RaisedButton label="Create Parcel" secondary={true}  onTouchTap={this.createParcel}/>
        </div>
        )
    }
    }
}

export default vesselComponent;