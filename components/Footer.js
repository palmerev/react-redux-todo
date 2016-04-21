import React from 'react'
import FilterLink from '../containers/FilterLink'
import { FILTERS } from '../actions'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter={FILTERS.SHOW_ALL}>
    All
    </FilterLink>
    {", "}
    <FilterLink filter={FILTERS.SHOW_ACTIVE}>
    Active
    </FilterLink>
    {", "}
    <FilterLink filter={FILTERS.SHOW_COMPLETED}>
    Completed
    </FilterLink>
  </p>
)

export default Footer
