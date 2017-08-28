import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions';


const AddTodo = ({ 
                  dispatch, 
                  onAddTodo, 
                  listId 
                }) => {
  let input;
  return (
    <div>
      <input ref={ node => {
        input = node
      }} />
      <button onClick={()=>{
        onAddTodo(input.value);
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};

const mapStateToProps = (
  state
) => {
  return state;
};

const mapDispatchToProps = (
  dispatch,
  ownProps
) => {
  return {
    onAddTodo : (text) => {
      dispatch(
        addTodo(ownProps.listId, text)
      );
    }
  };
};

const VisibleAddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);

export default VisibleAddTodo;
