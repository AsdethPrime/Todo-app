import React from 'react'
import { Formik, Form, Field } from 'formik'

class AddTodo extends React.Component {

    render() {
        return (
            <div>
                <h6>Add New Todo</h6>
                <Formik
                    initialValues={{ todo: ''}}   
                    onSubmit={(values) => {
                        let id = parseInt(this.props.lastId) + 1
                        let action = values.todo
                        let done = false
                        let todo = {
                            id: id, 
                            todoAction: action, 
                            done: false,
                        }
                        this.props.addTodo(todo)

                    }}             
                >
                    {() => (
                        <Form>
                            <Field type="text" name='todo' />
                            <button type="submit">Add Todo</button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default AddTodo