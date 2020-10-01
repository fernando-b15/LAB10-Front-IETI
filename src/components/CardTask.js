import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from './Card';

export default class CardTask extends React.Component {

    constructor(props) {
        super(props);
	}	
	
    
    render() {
		console.log(this.props.task);
        const cardTask = this.props.task.map((task, i) => {
            return (
                <Card
                    descripcion={task.descripcion}
                    name={task.responsable.name}
                    status={task.estado}
                    dueDate={task.dueDate} 
                />
            );
        })
        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
                <div>
                    <ul>
                        {cardTask}
                    </ul>
                </div>
             </Container>
        );


    }
}
