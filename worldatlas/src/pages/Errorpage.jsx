import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

function Errorpage() {
    const error = useRouteError();
  return (
    <div>
      <h1>Oops!an error occur</h1>
      {error && <p>{error.data}</p>}
      <NavLink to="/">Go Back</NavLink>
    </div>
  )
}

export default Errorpage
