import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import NewRequestComponent from './NewRequestComponent.jsx';

import Axios from 'axios';
const data = [
    {
        deliveryId: 'D1001',
        appointingCo: 'Mercuria',
        volume: '75k',
        deviation: 'NO',
        loadPort:'Amsterdam',
        dischargePort: 'Grangemouth',
        date: '28 Feb - 5 Mar 2018',
        vessel: 'The Princess',  
    },
    {
        deliveryId: 'D1001',
        appointingCo: 'Mercuria',
        volume: '75k',
        deviation: 'NO',
        loadPort:'Amsterdam',
        dischargePort: 'Grangemouth',
        date: '28 Feb - 5 Mar 2018',
        vessel: 'The Princess',  
    },
    {
        deliveryId: 'D1001',
        appointingCo: 'Mercuria',
        volume: '75k',
        deviation: 'NO',
        loadPort:'Amsterdam',
        dischargePort: 'Grangemouth',
        date: '28 Feb - 5 Mar 2018',
        vessel: 'The Princess',  
    }    
  ];

  
export default class ParentNewRequest extends React.Component{
    state = {
        pareclCount: 0,
        parcelData:[]
       
       
    }

    componentDidMount=()=>{

        let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
    console.log('----------------User Login Details'+retrievedUserDetails);
        Axios({
          method:'get',
          url:'/channels/mychannel/chaincodes/ParcelCC?peer=peer1&fcn=getParcelByShippingCompany&args=["'+retrievedUserDetails.username+'"]',
          headers: {  
              'Authorization': 'Bearer '+ retrievedUserDetails.message.token,
              'Content-Type': 'application/json'
          }
          })
          .then((data) => {
          console.log('----------------all trade data connected to server for get is');
          console.log(data);
    
          let confirmParcelCount =0;
          let mainParcelData=[];
         data.data.forEach((data)=>{
            if(data.status=="Planned"){             
                
                confirmParcelCount++;
                mainParcelData.push(data);
       
             
            }
        })
        this.setState({pareclCount:confirmParcelCount,parcelData:mainParcelData});
        
    
                 
          })
          .catch((error) => {
          console.log(error);
          console.log(error+"error in get Trade");
          });

    }
    static get contextTypes() {
        return {
          router: React.PropTypes.object.isRequired
        }
      }

    approveButton=(obj)=>{
        console.log('data reach to parent');
        console.log(obj);
        let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
        Axios({
            method:'post',
            url:'/channels/mychannel/chaincodes/ParcelCC/fcnname/updateParcelByShippingCompany',
            data:obj,
            headers: {  
                'Authorization': 'Bearer '+ retrievedUserDetails.message.token,
                'Content-Type': 'application/json'
            }
            })
            .then((data) => {
            console.log('----------------all parcel data connected to server for post is');
            // console.log('accept data -------------------'+data);
            alert('Hash for Approve Parcel by Shipping Agency'+data.data);
            this.context.router.push('/Ongoing');
         
         // this.setState({pareclCount:confirmParcelCount,parcelData:mainParcelData});
          
      
                   
            })
            .catch((error) => {
            console.log(error);
            console.log(error+"error in post parcel by shipping");
            });	
    }
    render(){
        return(
            <div style={{marginTop:"65px"}}>
                <Row className="trContainer show-grid" style={{marginLeft:"0", marginRight:"0"}}>
                <Col md={12} style={{paddingLeft:"0", paddingRight:"0"}}>
                <NewRequestComponent headingText="New request" number={this.state.pareclCount}
                 data={this.state.parcelData}
                 approveButton={this.approveButton}/>
                </Col>
                </Row>
              </div>
            )
    }
}