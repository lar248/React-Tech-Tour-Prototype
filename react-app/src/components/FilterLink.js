import React from 'react';
import { connect } from 'react-redux';

import { setVisibilityFilter } from '../actions';

const Link = ({
                active,
                children,
                onClick,
                listId
              }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    // eslint-disable-next-line jsx-a11y/href-no-hash
    <a href="#"
       onClick={( e ) => {
         e.preventDefault();
         onClick();
       }}
    >
      {children}
    </a>
  );
};

const mapStateToProps = (
  state,
  ownProps
) => {
  return {
    active : ownProps.filter === state.visibilityFilter //.filter && ownProps.listId.listId === state.visibilityFilter.listId
  };
};

const mapDispatchToProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick : () => {
      const currentListId = ownProps.listId.listId;
      dispatch(
        setVisibilityFilter(ownProps.filter, currentListId)
      );
    }
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;




