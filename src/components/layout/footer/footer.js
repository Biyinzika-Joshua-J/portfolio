import React from 'react'
import FooterCurve from '../../../assests/footer-curve-svg.svg'
import './footer.css'

import { Box } from '@mui/system'

export const Footer = () => {
  return (
    <footer>
        <Box width={'100vw'}>
            <img className='footer-curve' src={FooterCurve} alt="orange curve" />
        </Box>
    </footer>
    
  )
}
