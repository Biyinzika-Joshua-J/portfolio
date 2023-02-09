import React from 'react'
import { Container, TextField, Stack } from '@mui/material'

import './contact.css'

import { HeadingCentered } from '../index'

export const Contact = () => {
  return (
    <>
        <Container maxWidth='sm' sx={{marginTop:10}} id='contact'>
            <HeadingCentered text={'Contact'}/>

            <Stack direction={'column'} spacing={3}>
                <form >
                    <TextField
                        variant='outlined'
                        label='Name'
                        color='secondary'
                        sx={{width:'100%', marginBottom:'20px'}}
                        type='text'
                    />

                    <TextField
                        variant='outlined'
                        label='Email'
                        color='secondary'
                        sx={{width:'100%', marginBottom:'20px'}}
                        type='email'
                    />

                    <TextField
                        variant='outlined'
                        label='Message'
                        color='secondary'
                        sx={{width:'100%', marginBottom:'20px'}}
                        type='text'
                        multiline
                        rows={5}
                    />

                </form>
            </Stack>
        </Container>
    </>
  )
}
