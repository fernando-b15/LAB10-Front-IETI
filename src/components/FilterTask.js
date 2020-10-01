import React, {Component} from 'react';
import ResponsiveDrawer from './ResponsiveDrawer';
import Button from '@material-ui/core/Button';
import Modal from 'react-awesome-modal';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Link from '@material-ui/core/Link';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Fab } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import DatePicker from 'react-datepicker';
import moment from "moment";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {MuiPickersUtilsProvider,KeyboardDatePicker} from "@material-ui/pickers";
import "./style.css";
import 'react-datepicker/dist/react-datepicker.css';

export class FilterTask extends React.Component{
	constructor(props) {
		super(props);
		this.state={visible:false,name:"",estado:"",dueDate: moment()};
		console.log(this.state);
		this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEstadoChange = this.handleEstadoChange.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClear = this.handleClear.bind(this);
		this.handleDueDateChange = this.handleDueDateChange.bind(this);
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
	handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }
	handleDueDateChange(date) {
         this.setState({dueDate: date });
    }

    handleEstadoChange(e) {
        this.setState({
            estado: e.target.value
        });
    }
	handleSubmit(e){
		e.preventDefault();
		console.log(this.state);
		localStorage.setItem("filtroName", this.state.name);
		localStorage.setItem("filtroEstado", this.state.estado);
		localStorage.setItem("filtroFecha", this.state.dueDate);
		window.location.href = "/home";
    }
	handleClear(e){
		e.preventDefault();
		console.log(this.state);
		localStorage.removeItem("filtroName");
		localStorage.removeItem("filtroEstado");
		localStorage.removeItem("filtroFecha");
		window.location.href = "/home";
		
    }

	render(){
			
		
		return(
			<div>
				<Fab color="primary" onClick={this.openModal} style={{position: "fixed",bottom: "30px",right: "90px" }}>
					<FilterListIcon></FilterListIcon>
				</Fab>	
				<Modal visible={this.state.visible} style={{ zIndex: "1" }} width="450" height="380" effect="fadeInUp" onClickAway={() => this.closeModal()} >
					<center>
						<h3>Filter Task</h3>
						<FormControl margin="normal">
							<InputLabel>Responsible</InputLabel>
							<Input id="Responsable" name="responsible" autoComplete="responsible" value={this.state.name} onChange={this.handleNameChange} />
						</FormControl>
						<br/>
						<FormControl margin="normal">
							<InputLabel>Status</InputLabel>
							<Input id="Estado" name="estado" autoComplete="estado"  value={this.state.estado} onChange={this.handleEstadoChange}/>
						</FormControl>
						<br/>						
						<br/>
						<p>Fecha:</p>
						<DatePicker
							id="due-date"
							selected={this.state.dueDate}
							placeholderText="Due date"
							onChange={this.handleDueDateChange}>
						</DatePicker>
						<br/>
						<br/>
						<div  justify="center" alignItems="center" direction="row">
							 <Button variant="contained"  color="primary" onClick={e => this.handleSubmit(e)}>
							   Filter
							</Button>
							{" "}
							<Button variant="contained" color="primary" onClick={e => this.handleClear(e)}>
							   Clear Filters
							</Button>
							{" "}
							<Button variant="contained" onClick={() => this.closeModal()} color="primary">
								Close
							</Button>
						</div>
					</center>		
				   </Modal>
				 </div>  
		);
	}
	
}