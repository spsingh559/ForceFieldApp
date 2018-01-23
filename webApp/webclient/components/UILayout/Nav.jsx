import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
const style = {
  labelStyle: {
      width: 'auto',
      height: '22px',
      family: 'Helvetica',
      size: '18px',
      weight: 'bold',
      style: 'normal',
      stretch: 'normal',
      height: 'normal',
      spacing: 'normal',
      align: 'left',
      color: '#ffffff',
      textTransform: 'lowercase'
     },
     labelStyle1: {
      width: 'auto',
      height: '22px',
      family: 'Helvetica',
      size: '18px',
      marginLeft:"-100px",
      weight: 'bold',
      style: 'normal',
      stretch: 'normal',
      height: 'normal',
      spacing: 'normal',
      align: 'left',
      color: '#ffffff',
      textTransform: 'lowercase'
     },
  buttonBorder:{
    width: '167px',
    height: '48px',
    radius: '6px',
    margin: '8px',
    border: 'solid 1px #ffffff',
    color:'#FFFFFF'
  }
} ;
import {
  blue300,
} from 'material-ui/styles/colors';


const logo={
  shell:'../../images/shell.jpg',
  bp:'../../images/bp.png',
  statoil:'../../images/stat.jpg',
  mercuria:'../../images/logo-mercuria.png'
}
export default class Nav extends React.Component{
	state={
		openDrawer:false
  };
  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    }
  }

	handleClose = () => this.setState({openDrawer: false});
  handleToggle = () => this.setState({openDrawer: !this.state.openDrawer});

  newTradeNavigation=()=>{
    this.context.router.push('/newTrade');
  }
  dashboardNavigation=()=>{
    this.context.router.push('/');
  }
  tradeRecapNavigation=()=>{
    this.context.router.push('/tradeRecap');
  }
  confirmTradeNavigation=()=>{
    this.context.router.push('/confirmTrade');
  }
  confirmParcelNavigation=()=>{
    this.context.router.push("/confirmParcel");
  }
  pendingParcelNavigation=()=>{
    this.context.router.push("/pendingParcel");
  }
  createParcelNavigation=()=>{
    this.context.router.push("/parcelHome");
  }
  handleLogout=()=>{
    sessionStorage.removeItem('userLoginDetails');
    this.context.router.push("/login");
  }
  inspectorNavigation=()=>{
    this.context.router.push("/inspector");
  }
  agentNavigation=()=>{
    this.context.router.push("/agent");
  }
  newrequestNavigation=()=>{
    this.context.router.push("/NewRequest");
  }
  ongoingNavigation=()=>{
    this.context.router.push("/Ongoing");
  }
	render(){
    let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
    console.log(retrievedUserDetails);

    let logoIcon;
    if(retrievedUserDetails.username.split('@')[1].split('.')[0]=="shell"){
      logoIcon=logo.shell;
    }else if(retrievedUserDetails.username.split('@')[1].split('.')[0]=="bp"){
      logoIcon=logo.bp;
    }if(retrievedUserDetails.username.split('@')[1].split('.')[0]=="stat-oil"){
      logoIcon=logo.statoil;
    }if(retrievedUserDetails.username.split('@')[1].split('.')[0]=="mercuria"){
      logoIcon=logo.mercuria;
    }
    if(retrievedUserDetails.role=="Trader"){
		return(
			<div>
			 <AppBar
             title="Force Field App"
             iconClassNameRight="muidocs-icon-navigation-expand-more"
             onLeftIconButtonTouchTap={this.handleToggle}
             style={{position: "fixed",top:'0',backgroundColor: '#1f497d'}}
            >
           <FlatButton style={style.labelStyle1} label="Dashboard" onTouchTap={this.dashboardNavigation} />
           <FlatButton style={style.labelStyle} label="Trade Recap" onTouchTap={this.tradeRecapNavigation} />
           <FlatButton style={style.labelStyle} label="Confirmed Trades" onTouchTap={this.confirmTradeNavigation} />
           <FlatButton style={style.buttonBorder} label="New Trade" onTouchTap={this.newTradeNavigation}>
            </FlatButton>
           <List>
                <ListItem
                  disabled={true}
                  leftAvatar={
                    <Avatar src={logoIcon} style={{width:'34px',height:'34px'}} />

                  }
                >
                </ListItem>
          </List>
           </AppBar>

           <Drawer
          docked={false}
          width={200}
          open={this.state.openDrawer}
          onRequestChange={(openDrawer) => this.setState({openDrawer})}
          >

        <img src="images/mercuriaTraderImage.png"
        style={{width:'180px',height:'200px'}}/>
        <center style={{fontWeight:'bold',fontSize:16}}>{retrievedUserDetails.username}</center>
          <MenuItem onTouchTap={this.handleClose}>
           <Link to="/"> Home </Link>
          </MenuItem>
        	<MenuItem onTouchTap={this.handleClose}>
          <Link to ="/newTrade">New Trade</Link>
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose}>
          <Link to ="/tradeRecap">Trade Recap</Link>
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose}>
          <Link to ="/confirmTrade">Confirm Trade</Link>
          </MenuItem>
          <MenuItem onTouchTap={this.handleLogout}>
          Logout
          </MenuItem>
        </Drawer>
        </div>
      )
    }else if(retrievedUserDetails.role=="Operator"){
      return(
        <div>
      <AppBar
      title="Force Field App"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      onLeftIconButtonTouchTap={this.handleToggle}
      style={{position: "fixed",top:'0',backgroundColor: '#1f497d'}}
     >

    <FlatButton style={style.labelStyle} label="Confimed Parcel" onTouchTap={this.confirmParcelNavigation} />
    <FlatButton style={style.labelStyle} label="Pending Parcel" onTouchTap={this.pendingParcelNavigation} />
    <FlatButton style={style.buttonBorder} label="Create Parcel" onTouchTap={this.createParcelNavigation} />
    <List>
         <ListItem
           disabled={true}
           leftAvatar={
             <Avatar src={logoIcon} style={{width:'34px',height:'34px'}} />

           }
         >
         </ListItem>
   </List>
    </AppBar>

    <Drawer
   docked={false}
   width={200}
   open={this.state.openDrawer}
   onRequestChange={(openDrawer) => this.setState({openDrawer})}
   >

 <img src="images/operator.jpg"
 style={{width:'180px',height:'200px'}}/>
 <center style={{fontWeight:'bold',fontSize:16}}>{retrievedUserDetails.username}</center>
   <MenuItem onTouchTap={this.handleClose}>
    <Link to="/parcelHome"> Home </Link>
   </MenuItem>
   <MenuItem onTouchTap={this.handleClose}>
   <Link to ="/confirmParcel">Confirm Parcel</Link>
   </MenuItem>
   <MenuItem onTouchTap={this.handleClose}>
   <Link to ="/pendingParcel">Pending Parcel</Link>
   </MenuItem>
   <MenuItem onTouchTap={this.handleClose}>
   <Link to ="/parcelHome">Create Parcel</Link>
   </MenuItem>
   <MenuItem onTouchTap={this.handleLogout}>
   Logout
   </MenuItem>
 </Drawer>
  </div>
)
    }else if(retrievedUserDetails.role=="Inspector"){
      return(
        <div>
      <AppBar
      title="Force Field App"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      onLeftIconButtonTouchTap={this.handleToggle}
      style={{position: "fixed",top:'0',backgroundColor: '#1f497d'}}
     >

    <FlatButton style={style.labelStyle} label="New Request" onTouchTap={this.inspectorNavigation} />

    <List>
         <ListItem
           disabled={true}
           leftAvatar={
             <Avatar src="images/profile-img.jpg" style={{width:'34px',height:'34px'}} />

           }
         >
         </ListItem>
   </List>
    </AppBar>

    <Drawer
   docked={false}
   width={200}
   open={this.state.openDrawer}
   onRequestChange={(openDrawer) => this.setState({openDrawer})}
   >

 <img src="images/inspector.jpg"
 style={{width:'180px',height:'200px'}}/>
 <center style={{fontWeight:'bold',fontSize:16}}>{retrievedUserDetails.username}</center>
   <MenuItem onTouchTap={this.handleClose}>
    <Link to="/inspector"> Home </Link>
   </MenuItem>
   <MenuItem onTouchTap={this.handleClose}>
    <Link to="/inspector"> New Request </Link>
   </MenuItem>
   <MenuItem onTouchTap={this.handleLogout}>
   Logout
   </MenuItem>
 </Drawer>
  </div>
)
    }
    else if(retrievedUserDetails.role=="Agent"){
      return(
        <div>
      <AppBar
      title="Force Field App"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      onLeftIconButtonTouchTap={this.handleToggle}
      style={{position: "fixed",top:'0',backgroundColor: '#1f497d'}}
     >

    <FlatButton style={style.labelStyle} label="New Request" onTouchTap={this.agentNavigation} />

    <List>
         <ListItem
           disabled={true}
           leftAvatar={
             <Avatar src="images/agent.jpg" style={{width:'34px',height:'34px'}} />

           }
         >
         </ListItem>
   </List>
    </AppBar>

    <Drawer
   docked={false}
   width={200}
   open={this.state.openDrawer}
   onRequestChange={(openDrawer) => this.setState({openDrawer})}
   >

 <img src="images/profile-blank.png"
 style={{width:'180px',height:'200px'}}/>
 <center style={{fontWeight:'bold',fontSize:16}}>{retrievedUserDetails.username}</center>
   <MenuItem onTouchTap={this.handleClose}>
    <Link to="/agent"> Home </Link>
   </MenuItem>
   <MenuItem onTouchTap={this.handleClose}>
    <Link to="/agent"> New Request </Link>
   </MenuItem>
   <MenuItem onTouchTap={this.handleLogout}>
   Logout
   </MenuItem>
 </Drawer>
  </div>
)
    }else if(retrievedUserDetails.role=="Shipping"){
      return(
        <div>
      <AppBar
      title="Force Field App"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      onLeftIconButtonTouchTap={this.handleToggle}
      style={{position: "fixed",top:'0',backgroundColor: '#1f497d'}}
     >

    <FlatButton style={style.labelStyle} label="New Request" onTouchTap={this.newrequestNavigation} />
    <FlatButton style={style.labelStyle} label="Ongoing Shipping" onTouchTap={this.ongoingNavigation} />
    <List>
         <ListItem
           disabled={true}
           leftAvatar={
             <Avatar src="images/profile-img.jpg" style={{width:'34px',height:'34px'}} />

           }
         >
         </ListItem>
   </List>
    </AppBar>

    <Drawer
   docked={false}
   width={200}
   open={this.state.openDrawer}
   onRequestChange={(openDrawer) => this.setState({openDrawer})}
   >

 <img src="images/profile-blank.png"
 style={{width:'180px',height:'200px'}}/>
 <center style={{fontWeight:'bold',fontSize:16}}>{retrievedUserDetails.username}</center>
   <MenuItem onTouchTap={this.handleClose}>
    <Link to="/NewRequest"> New Request </Link>
   </MenuItem>
   <MenuItem onTouchTap={this.handleClose}>
    <Link to="/Ongoing"> Ongoing Shipping </Link>
   </MenuItem>
   <MenuItem onTouchTap={this.handleLogout}>
   Logout
   </MenuItem>
 </Drawer>
  </div>
)
    }
	}
}
