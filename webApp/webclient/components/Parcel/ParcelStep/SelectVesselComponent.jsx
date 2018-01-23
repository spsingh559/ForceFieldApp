import React from 'react';
import VesselComponent from './vesselComponent'

const vesselData  = [
    {
        "vesselName": "The Princess",
        "shipping_company": "XYZ Shipping Co.",
        "capacity": "1M BBLS",
        "date":"28th Feb 2018 - 5th March 2018"
    },
    {
        "vesselName": "Ellie Lady",
        "shipping_company": "XYZ Shipping Co.",
        "capacity": "1M BBLS",
        "date":"28th Feb 2018 - 5th March 2018"
    }

]



export default class SelectVesselComponent extends React.Component{

    vesselObj=(obj)=>{
        this.props.vesselObj(obj);
    }

    render(){
        return(
            <div>
                <strong> 2 vessels available </strong>
                <br /> <br/>
                            
                    <div className="vesselList">
                        {
                            vesselData.map((vessel, i)=>{
                               return <VesselComponent vessel={vessel} key={i}
                               vesselObj={this.vesselObj}/>
                            })
                        }
                    </div>
                   
                
            </div>
        )
    }
}