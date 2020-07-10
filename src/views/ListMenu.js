/* import React from 'react';
import { connect } from 'react-redux';
import './views.css';

class TodoList extends React.Component {

  todoRef = React.createRef();

  _handleNewTodo = (e) => {
    let newTodo = this.todoRef.current.value;
    this.props.addNewTodo(newTodo);

    e.preventDefault();
    this.todoRef.current.value = '';
  }

  render() {
    const { todos } = this.props;

    return (
      <div className="App-Menu">
        <div>Menu List</div>
        <form onSubmit={this._handleNewTodo}>
          <label>New Todo <input ref={this.todoRef} /></label>
        </form>
        <ul className="Menu-Baru">{todos.map((item, index) => <li key={index}>{item}</li>)}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  addNewTodo: todo => dispatch({ type: 'ADD TODO', todo })
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList); */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './views.css';

function TodoList() {
  let todoRef;

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const _handleNewTodo = (e) => {
    let newTodo = todoRef.value;
    dispatch({
      type: 'ADD TODO',
      todo: newTodo
    })

    e.preventDefault();
    todoRef.value = '';
  }

    return (
      <div className="App-Menu">
        <div>Menu List</div>
        <form onSubmit={_handleNewTodo}>
          <label>New Todo <input ref={input => todoRef = input} /></label>
        </form>
        <ul className="Menu-Baru">{todos.map((item, index) => <li key={index}>{item}</li>)}</ul>
      </div>
  );
}

export default TodoList;