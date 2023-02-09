import React from 'react'
import { Box, Stack, IconButton, Container } from '@mui/material'

import LinkedinIcon from '../../assests/bi_linkedin.svg'
import EmailIcon from '../../assests/bi_envelope-fill.svg'

export const Socials = () => {
  return (
    <>
     
        <Box width={'150px'} sx={{marginLeft:'auto', marginRight:'auto'}}>
                <Stack direction={'row'} spacing={2}>
                    <IconButton href='https://www.linkedin.com/in/biyinzika-joshua-j/' target={'_blank'}>
                        <img src={LinkedinIcon} alt="linkedin icon" />
                    </IconButton>
                    <IconButton  href='mailto:joshuabiyinzika22@gmail.com' target={'_blank'}>
                        <img src={EmailIcon} alt="Email icon" />
                    </IconButton>
                </Stack>
         </Box>
      
    </>
  )
}
