import React, {Component} from 'react';

class TodoList extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            todoList: [],
            newTask: ''
        }
    }

    handleChange = (event) => {
        let your_input = event.target.value;
        this.setState({
            newTask: your_input
        });
        console.log(your_input);
    }

    addTask = () => {
        if (this.state.newTask.length > 0)
        {
            let todoList = this.state.todoList;
            todoList.push(this.state.newTask);
            console.log(todoList);
            this.props.update(todoList.length);
            this.setState({todoList});    
        }
    }

    handleCheck = (index) => {
        let todoList = this.state.todoList;
        todoList.splice(index, 1);
        this.props.update(todoList.length);
        this.setState({todoList});
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>
                    <input type="text" onChange={this.handleChange} />
                    <button onClick={this.addTask}>Add</button>
                </div>
                {
                    this.state.todoList.map((item, index) => (
                        <div>
                            <input type='checkbox' checked={false}
                                onChange={()=>this.handleCheck(index)}/>
                            {item}
                        </div>
                    ))
                }
            </div>
            
        )
    }
}

export default TodoList;