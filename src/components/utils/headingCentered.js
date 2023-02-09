import React from 'react'
import { Typography } from '@mui/material'

import './headingCentered.css'

export const HeadingCentered = ({text}) => {
  return (
    <>
         <Typography variant='h3' color={'secondary'} align='center' className='heading-centered-underlined'>
                {text}
        </Typography>
    </>
  )
}
