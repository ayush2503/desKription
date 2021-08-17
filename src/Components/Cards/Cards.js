import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Accordion,AccordionSummary,AccordionDetails,Button,Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginTop:'1rem',
      padding: '1rem',
        
    },
    spaceTop:{
        marginTop:'1rem'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

function Cards(props) {
    const classes = useStyles();
    const {name,desc}=props
    return (
        <div className={classes.root}>
            <Accordion  className={classes.spaceTop}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>{name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {desc}
                    </Typography>
                </AccordionDetails>
                <AccordionDetails>
                    <Typography align='right' style={{width:'100%'}}>
                        <Button onClick={props.update} color='primary'>Edit</Button>
                        <Button onClick={props.delete} color='secondary'>Delete</Button>
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    )
}

export default Cards
