import React from 'react';
import {AppBar, Toolbar, styled} from '@mui/material';
import got_logo from '../images/got_logo.jpg' 

const StyledHeader = styled(AppBar)`
background: #000
`

function Header() {
  return (
    <StyledHeader position='static'>
        <Toolbar>
           <img src={got_logo} alt="GOT Logo" style={{width: 250}} />
        </Toolbar>
    </StyledHeader>
  )
}

export default Header;