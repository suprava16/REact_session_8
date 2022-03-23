import React from 'react'
import Button from '@mui/material/Button';
import AppBlockingIcon from '@mui/icons-material/AppBlocking';
function Design() {
  return (
    <div>
      <Button variant='contained' color='success' size="large" startIcon={<AppBlockingIcon/>}>Click Me</Button>
    </div>
  )
}

export default Design