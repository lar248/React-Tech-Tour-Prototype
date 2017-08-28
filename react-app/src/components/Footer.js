import React from 'react';

import FilterLink from './FilterLink';

const Footer = (listId) => (
  <p>
    Show:
    {' '}
    <FilterLink
      filter='SHOW_ALL'
      listId = { listId }
    >
      All
    </FilterLink>
    {' '}
    <FilterLink
      filter='SHOW_ACTIVE'
      listId = { listId }
    >
      Active
    </FilterLink>
    {' '}
    <FilterLink
      filter='SHOW_COMPLETED'
      listId = { listId }
    >
      Completed
    </FilterLink>
  </p>
);

export default Footer;


