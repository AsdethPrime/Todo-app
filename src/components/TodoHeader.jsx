import React from 'react'

import {
    Paper,
    AppBar,
    Typography,
} from '@material-ui/core'

let TodoHeader = (props) => {
    let name = props.name || 'Guest'
    return (
        <div className='TodoHeader'>
            <Paper elevation={24}>
                <AppBar position='fixed'>
                    <Typography variant='h4' align='center'>
                    {`${name}'s todo List`}
                    </Typography>
                </AppBar>
            </Paper>
        </div>
    )
}

export default TodoHeader