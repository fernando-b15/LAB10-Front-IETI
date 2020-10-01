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
import "./style.css";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {MuiPickersUtilsProvider,KeyboardDatePicker} from "@material-ui/pickers";
import moment from "moment";





export class NewTask extends React.Component{
	constructor(props) {
		super(props);
		this.state={descripcion:"",responsable:{name:"",email:""},estado:"",dueDate: moment()};
        this.handleChangeDescripcion=this.handleChangeDescripcion.bind(this);
        this.handleChangeResponsable=this.handleChangeResponsable.bind(this);
        this.handleChangeStatus=this.handleChangeStatus.bind(this);
        this.handleChangeDueDate=this.handleChangeDueDate.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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
						<FormControl margin="normal" fullWidth>
							<InputLabel>Description</InputLabel>
							<Input id="descripcion" name="description" value={this.state.descripcion} onChange={this.handleChangeDescripcion} />
						</FormControl>
						<FormControl margin="normal" fullWidth>
							<InputLabel>Responsible</InputLabel>
							<Input id="Responsable" name="responsible" autoComplete="responsible" value={this.state.responsable.name} onChange={this.handleChangeResponsable} />
						</FormControl>
						<FormControl margin="normal" fullWidth>
							<InputLabel>Status (Ready/In Progress/Completed)</InputLabel>
							<Input id="Estado" name="estado" autoComplete="estado"  value={this.state.estado} onChange={this.handleChangeStatus}/>
						</FormControl>
						<MuiPickersUtilsProvider utils={DateFnsUtils}> 
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="MM/dd/yyyy"
                            value={this.state.dueDate1}
                            onChange={this.handleChangeDueDate}
                            fullWidth
                            KeyboardButtonProps={{"aria-label": "change date"}}
                        />
						</MuiPickersUtilsProvider>	
					   
						<br/>
						<br/>
						<Button type="submit" variant="contained" color="primary">
							Add
						</Button>
						<br/>
						<Link href="/home" variant="body2"> back </Link>
					</Paper>
				</form>
			</React.Fragment>	
        );
	}
	handleChangeDescripcion(e){
        this.setState({descripcion: e.target.value });
    };
    
    handleChangeResponsable(e){
        this.setState({responsable: { name: e.target.value } });
    };
    
    handleChangeStatus(e){
        this.setState({estado: e.target.value });
    };
    
    handleChangeDueDate(date){
		console.log(date);
        this.setState({dueDate: date });
    };
	handleSubmit(e){		
		e.preventDefault();
		console.log(this.state);		
		if (localStorage.getItem("items") === null) {
			  var items = [this.state];
			  console.log(items);
			  localStorage.setItem("items", JSON.stringify(items));
		} else {
          let items = JSON.parse(localStorage.getItem("items"));
          items.push(this.state);
		  console.log(items);
          localStorage.setItem("items", JSON.stringify(items));
        }
		window.location.href = "/home";

	}
}
