import React, {Component} from 'react';
import {Home} from './components/Home'
import {NewTask} from './components/NewTask';
import {UserProfile} from './components/UserProfile';
import {UserList} from './components/UserList';
import {Login} from './components/Login';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import  { Redirect } from 'react-router-dom'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {isLoggedIn: false,userList: []};
		console.log('por qqqqqqqqqqqqqqqqqqqqq'+this.state.isLoggedIn);
		this.handleState = this.handleState.bind(this);
		if(!localStorage.getItem("user") && !localStorage.getItem("name"), !localStorage.getItem("password")){
			localStorage.setItem("user", "admin@hotmail.com");
			localStorage.setItem("name", "Administrator");
			localStorage.setItem("password", "admin");
		}
		
	}
	componentDidMount() {
        fetch('http://apitaskplannerhope.southcentralus.azurecontainer.io:8080/users')
            .then(response => response.json())
            .then(data => {
                let userList = [];
				console.log(data);
                data.forEach(function (user) {
					console.log(user);
                    userList.push(user)

                });
				setTimeout(() => {
				  this.setState({userList: userList});
				}, 100);
				console.log(this.state.userList)
				
            });
			
    }
	render(){
		const home = () => <Home />;
		const newtask = () => <NewTask />;
		const userprofile = () => <UserProfile />;
		const login = () => < Login logged={this.handleState} />;
		const userlist = () => <UserList userList={this.state.userList} />;
		console.log('entro a render');
		console.log(this.state.isLoggedIn);
		console.log(this.state.userList)
		if (this.state.isLoggedIn) {
			console.log('llllllllllleego aqui zzzzzzzzzzzzzzzzzzzzzzzzz33333333333333333333');
			return(			
				<Router>
				  <div className="App">     
					<Redirect to="/home" />		
				  </div>
				</Router>

			);	
		}
		else{
			console.log('llllllllllleego aqui zzzzzzzzzzzzzzzzzzzzzzzzz2222222222222222');
			return(
				<div>
				<Router>
				  <div className="App">   
					<Route exact path="/" component={login} /> 
					<Route exact path="/newtask" component={newtask} />  
					<Route exact path="/home" component={home} />
					<Route exact path="/userprofile" component={userprofile} />
					<Route exact path="/userlist" component={userlist} />							
					
				  </div>
				</Router>
				
				</div>
			);			
		} 
    }
	handleState(){
		setTimeout(() => {
		  this.setState({isLoggedIn: true});
		}, 100);
		
	}
	
}
export default App;	
