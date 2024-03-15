import { Button } from '@mui/material'
import React from 'react'

const ButtonComponent = ({icon,text,classname,styles}) => {
  return (
    <Button className={classname} sx={styles}>
        {text}{icon}
    </Button>
  )
}

export default ButtonComponent
