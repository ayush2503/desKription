import React from 'react';
import {makeStyles,TextField,Typography,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width:'100%',
        marginTop:'2rem',
      },
    }
  ));

function Save(props) {
    const classes = useStyles()
    return (
        <div style={{padding:'2rem'}} >
            <TextField
                className={classes.root}
                label="UserId"
                value={props.id}
                name="id"
                onChange={props.change}
                disabled={props.update}
            />
            <TextField
                className={classes.root}
                value={props.Name}
                onChange={props.change}
                label="Name"
                name="Name"
            />
            <TextField   
                className={classes.root} 
                onChange={props.change}
                value={props.desc}
                label="Description"
                name="desc"
                multiline
            />

            <Typography className={classes.root}>
                <Button variant="contained" onClick={props.submitHandler}  color='primary'>Save</Button>
                <Button variant="contained" onClick={props.home} style={{marginLeft:'1rem'}} color='secondary'>Go to home</Button>
            </Typography>
        </div>
    )
}

export default Save
