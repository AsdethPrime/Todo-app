import React from 'react'

import {
    Paper,
    Grid,
    Button,
    Typography,
    Divider,
} from '@material-ui/core'

let TodoItem = (props) => {
    let style = {
        textDecoration: props.done ? 'line-through' : 'none'
    } 

    let {id, todo } = props
    return (
    <div className='TodoItem'>
        <Paper>
            <Grid container>
                <Grid item xs={1}>
                    <Typography variant='h6'>
                        {id}
                    </Typography>                
                </Grid>
                <Grid item xs={9}>
                    <Typography variant='h6' style={style}>
                        {todo}
                    </Typography>                
                </Grid>
                <Grid item xs={2}>
                    <Button onClick={() => props.completed(id) } disabled={props.done}>
                        Mark Complete
                    </Button>         
                </Grid>
            </Grid>
        </Paper>
        <Divider />
    </div>
    )

}

export default TodoItem 