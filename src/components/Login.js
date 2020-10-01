import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'
import logo from '../logo.svg';
import '../App.css';
import Modal from 'react-awesome-modal';
import Link from '@material-ui/core/Link';

export class Login extends React.Component{
	constructor(props) {
		super(props);
		this.state = {mail:"",pass:"",visible: false}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleMail = this.handleMail.bind(this);
		this.handlePass = this.handlePass.bind(this);
	}
	openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }
    render(){
		console.log(this.props);
        return (
            <React.Fragment>
			 <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">TODO React App</h1>
                </header>

                <br/>
                <br/>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
						<Modal visible={this.state.visible} width="200" height="150" effect="fadeInUp" onClickAway={() => this.closeModal()}>
							<div>
								<center>
								<h1>Error</h1>
								<p>Bad Credentials</p>
								<Button onClick={() => this.closeModal()} color="primary">
									Close
								</Button>
								</center>
							</div>
						</Modal>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" value={this.state.mail} onChange={this.handleMail} autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
									value={this.state.pass}
									onChange={this.handlePass}
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
								onClick = {this.handleSubmit}
                            >
                                Sign in
                            </Button>
                        </form>
						<Link href="./userprofile" variant="body2"> Sing-In </Link>
						<br />
						<Link href="./userlist" variant="body2"> UserList </Link>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
	handleSubmit(e){
		console.log('llllllllllleego aqui zzzzzzzzzzzzzzzzzzzzzzzzz');
        e.preventDefault();
		if(localStorage.getItem("user")===this.state.mail && localStorage.getItem("password")===this.state.pass){
			console.log(this.state);
			localStorage.setItem("isLoggedIn", true);
			this.props.logged();
			setTimeout(() => {
				window.location.href = "/home";
			}, 1000);

		}
		else{
			this.setState({visible: true});
		}	
    }
	handleMail(e) {
       this.setState({mail: e.target.value});
    }
	handlePass(e) {
       this.setState({pass: e.target.value});
    }

}
	