import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

export const HeaderText = () => {
  return (
    <>
        <div className="header-text">
            <Typography variant='h5' component={'p'} color='primary'>
                REACT DEVELOPER
            </Typography>

            <Typography variant='h2' component={'p'} sx={{marginTop:'50px'}} color='secondary'>
                Hello, My name is is Joshua Biyinzika
            </Typography>

            <Typography variant='h5' component={'p'} sx={{marginTop:'30px'}} color={'#828282'}>
                Am currently a CS student 👨‍🎓 at Goldsmith, University of London and I 💖 building user interfaces using React js. My experience may not be three years ⌛, but I do have grit 💪 for sure!
            </Typography>

            <Stack direction={'row'} spacing={4} sx={{marginTop:'20px'}}>
                <Button variant='contained' color='primary' href='#projects'>
                    Projects
                </Button>

                <Button href='https://www.linkedin.com/in/biyinzika-joshua-j/' target={'_blank'} variant='outlined' color='secondary' >
                    Linkedin
                </Button>
            </Stack>
        </div>
    </>
  )
}
