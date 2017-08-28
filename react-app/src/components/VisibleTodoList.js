import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../actions';

const Todo = ({
                onClick,
                completed,
                text
              }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration:
        completed ?
          'line-through' :
          'none'
    }}>
    {text}
  </li>
);

const TodoList = ({
                    todos,
                    onTodoClick
                  }) => (
  <ul>
    {todos.map(todo=>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

const getVisibleTodos = (listId, todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos.filter(t => t.listId === listId);
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed && t.listId === listId);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed && t.listId === listId);
    default:
      return todos;
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(
      ownProps.listId,
      state.todos,
      state.visibilityFilter
    )
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
