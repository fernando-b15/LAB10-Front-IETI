import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Link from '@material-ui/core/Link';
import InputLabel from '@material-ui/core/InputLabel';
import Avatar from '@material-ui/core/Avatar';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export class UserProfile extends React.Component{
	constructor(props) {
		super(props);
		this.state={name:"",mail:"",password:"",repassword:""};
        this.handleChangeName=this.handleChangeName.bind(this);
        this.handleChangeEmail=this.handleChangeEmail.bind(this);
        this.handleChangePassword=this.handleChangePassword.bind(this);
		this.handleChangerePassword=this.handleChangerePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		console.log(this.state);
	}
	render(){
		return(
			<React.Fragment>
				<form width="100%" height="100%" onSubmit={this.handleSubmit}>
					<Paper className="paper" square>
						<Typography variant="h1">New Task</Typography>
						<Avatar className="avatar">
							<InboxIcon />
						</Avatar>
						<FormControl margin="normal" required fullWidth>
							<InputLabel>Nombre</InputLabel>
							<Input id="Nombre" name="Nombre" value={this.state.name} onChange={this.handleChangeName} />
						</FormControl>
						<FormControl margin="normal" required fullWidth>
							<InputLabel>Email</InputLabel>
							<Input id="Email" name="Email" value={this.state.mail} onChange={this.handleChangeEmail} />
						</FormControl>
						<FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">password</InputLabel>
                                <Input name="password" type="password" id="password" value={this.state.password} onChange={this.handleChangePassword} autoComplete="current-password" autoFocus/>
                        </FormControl>
						<FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="repassword">Confirm password</InputLabel>
                                <Input name="repassword" type="password" id="repassword" value={this.state.repassword} onChange={this.handleChangerePassword} autoComplete="current-password" autoFocus/>
                        </FormControl>
					   
						<br/>
						<br/>
						<Button type="submit" variant="contained" color="primary">
							Update
						</Button>
						<br/>
						<Link href="/" variant="body2"> back </Link>
					</Paper>
				</form>
			</React.Fragment>	
        );
	}
	handleChangeName(e){
        this.setState({name: e.target.value });
    };
    
    handleChangeEmail(e){
		console.log(this.state);
        this.setState({mail: e.target.value });
    };
    
    handleChangePassword(e){
        this.setState({password: e.target.value });
    };
	handleChangerePassword(e){
        this.setState({password: e.target.value });
    };
	handleChangerePassword(e){
        this.setState({repassword: e.target.value });
    };
    
	handleSubmit(e){
			  e.preventDefault();	
			  if(this.state.password === this.state.repassword){
				  localStorage.setItem("user", this.state.mail);
				  localStorage.setItem("name", this.state.name);
				  localStorage.setItem("password", this.state.password);
				  window.location.href = "/";
			  }
			  else{
				  alert("passwords no coinciden");
			  }
		
	}
}
