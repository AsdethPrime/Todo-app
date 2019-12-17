import React from 'react'

import {
    Paper,
    Grid,
    Button,
    Typography,
    Divider,
} from '@material-ui/core'

let TodoItem = (props) => {
    let id = props.id
    let todo = props.todo
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
                    <Typography variant='h6'>
                        {todo}
                    </Typography>                
                </Grid>
                <Grid item xs={2}>
                    <Button>
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