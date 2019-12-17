import React, { Component } from 'react'

import TodoHeader from './TodoHeader'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            todoList : [
                { id: 1, todoAction: 'Learn React', done: false },
                { id: 2, todoAction: 'Learn Material-Ui', done: false },
                { id: 3, todoAction: 'Learn Redux', done: false },
            ],
        }
        this.addTodo = this.addTodo.bind(this)
        this.lastId = this.lastId.bind(this)
        this.markComplete = this.markComplete.bind(this)
    }

    // Last Id to create a new TODO
    lastId(){
        let idList = []
        this.state.todoList.map( value => idList.push( value.id))
        return Math.max(...idList)
    }
    
    // Add a new Todo
    addTodo(todo){
        let todoList = this.state.todoList
        todoList.push(todo)
        this.setState({
            todoList: todoList
        })
    }

    // Mark Todo as complete 
    markComplete(id) {
        let todoList = this.state.todoList
        todoList.map( (todo) => {
            if(id === todo.id ) {
                todo.done = !todo.done               
            }
            return todo
        })
        this.setState({
            todoList: todoList
        })
    }


    render() {
        return (
            <div>
                <TodoHeader name="Manish" />
                <div className='AddTodo' style={{margin: 60}}>
                    <AddTodo addTodo={this.addTodo} lastId={this.lastId()}/>
                </div>                
                <div className='TodoList' style={{margin: 60}} > 
                    {this.state.todoList.map((el, idx) => <TodoItem key={idx} id={el.id} todo={el.todoAction} done={el.done} completed={this.markComplete}/>)}
                </div>
                
            </div>
        )
    }
}

