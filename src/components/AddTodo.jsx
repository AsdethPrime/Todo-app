import React from 'react'
import { Formik, Form, Field } from 'formik'

import {Paper, Grid,Typography} from '@material-ui/core'
import {TextField } from 'formik-material-ui'


class AddTodo extends React.Component {
    render() {
        return (
            <div className='AddTodo'>
                <Paper>
                    <div className='AddTodo-heading'>
                        <Typography variant='h4' align='center'>
                            Add Todo 
                        </Typography>
                    </div>
                    <div className='AddTodo-form'>
                        <Formik
                            initialValues={{ todo: ''}}   
                            onSubmit={(values) => {
                                let id = parseInt(this.props.lastId) + 1
                                let action = values.todo                                
                                let todo = {
                                    id: id, 
                                    todoAction: action, 
                                    done: false,
                                }
                                this.props.addTodo(todo)                            
                            }} 
                        > 
                            {() => (
                                <Paper>
                                    <Form>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Field type="text" name='todo' placeholder='Add Todo...' component={TextField} fullWidth/>
                                            </Grid>
                                        </Grid>                                           
                                    </Form>
                                </Paper>
                            )}                            
                        </Formik>
                    </div>
                </Paper>
            </div>
        )

    }
}

export default AddTodo