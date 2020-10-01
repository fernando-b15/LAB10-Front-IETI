import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export class UserList extends React.Component {

    render(){

		const useStyles = makeStyles({
		  table: {
			minWidth: 650,
		  },
		});
        return(
		  <TableContainer component={Paper}>
			  <Table aria-label="simple table">
				<TableHead>
				  <TableRow>
					<TableCell align="right">Id</TableCell>
					<TableCell align="right">Username</TableCell>
					<TableCell align="right">Email</TableCell>
					<TableCell align="right">Password</TableCell>
				  </TableRow>
				</TableHead>
				<TableBody>
				  {this.props.userList.map((row) => (
					<TableRow key={row.userId}>
					  <TableCell align="right">{row.userId}</TableCell>
					  <TableCell align="right">{row.userName}</TableCell>
					  <TableCell align="right">{row.email}</TableCell>
					  <TableCell align="right">{row.password}</TableCell>
					</TableRow>
				  ))}
				</TableBody>
			  </Table>
			</TableContainer>
				);

    }
}
export default UserList;