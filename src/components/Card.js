import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ResponsiveDrawer from './ResponsiveDrawer';
import moment from "moment";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h3" component="h2">
          {props.status} 
        </Typography>
		  <Typography className={classes.title} variant="h5" component="h2"  gutterBottom>
          {props.descripcion}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.name} - {moment(props.dueDate).format("dd-MM-yyyy")}
        </Typography>
      </CardContent>
    </Card>
  );
}