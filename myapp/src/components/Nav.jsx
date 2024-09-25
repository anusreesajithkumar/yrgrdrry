import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant='h6' align='center'>
             digipass
          </Typography>
          <Link to='/l' >
          
            <button variant="contained"> Login </button> 
          </Link>
          <Link to='/s' >
            <button variant="contained"> Signup </button>
          </Link>
          <Link to='/a' >

            <button variant="contained"> statebasics</button>
          </Link>
          <Link to='/counter' >

            <button variant="contained"> Counter</button>
          </Link>
          <Link to='/u' >

            <button variant="contained"> Use</button>
          </Link>
          <Link to='/ai' >

            <button variant="contained"> Api</button>
          </Link>
          <Link to='/po' >

            <button variant="contained">Pokemon</button>
          </Link>
        </Toolbar>
      </AppBar>
      <br /><br /><br /><br />

    </div>
  )
}

export default Nav