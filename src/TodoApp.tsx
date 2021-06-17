import React from "react";
import TodoItem from "./components/TodoItem";
import Clock from './Clock';
import './APP.css';

interface TodoAppProps {}
interface TodoAppState {
  todoItems: string[];
  newTodo: string;
}

class TodoApp extends React.Component<TodoAppProps, TodoAppState> {
  constructor(props: TodoAppProps) {
    super(props);
    
    this.state = {
      todoItems: [],
      newTodo: "",
    };
  }

  handleNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTodo: e.target.value,
    });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const items = this.state.todoItems.concat(this.state.newTodo)

    this.setState({
      todoItems: items,
      newTodo: "",
    })
  }
  onDelete = (idx:number)=>{
    this.state.todoItems.splice(idx,1)
    this.setState({
      todoItems:this.state.todoItems
    })
  }

  render() {
    return (
      <div>
        <Clock></Clock>
        <h3>TODO LIST</h3>
        
        <form onSubmit={this.handleSubmit}>
        
          <label htmlFor="new-todo">뭘 해야하나요?</label> <br />
          <input type="text" id="new-todo" value={this.state.newTodo} onChange={this.handleNewTodo} /> <br />
          <button>추가하기 {this.state.todoItems.length + 1}</button>

        </form>
        {
          this.state.todoItems.map((item, idx) => (
            <TodoItem name={item} key={idx} idx={idx} onDelete={this.onDelete}/>
          ))
        }
      </div>
    )
  }
}

export default TodoApp;