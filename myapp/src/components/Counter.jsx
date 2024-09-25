import { Button, Typography } from '@mui/material'
import  { useState } from 'react'
import React from 'react'


const Counter = () => {


    var [cnt, statement] = useState("0")
    
    var clkd=()=>{
    
        statement(cnt-1)
    }
    var clku = () => {

        statement(cnt+1)
    
    }
    return (
      <div>
            <Typography variant='h4'>{cnt}</Typography>
            <Button variant='outlined' onClick={clku}>+++</Button>
              <Button variant='outlined' onClick={clkd}>---</Button>
              </div>
  )
}

export default Counter