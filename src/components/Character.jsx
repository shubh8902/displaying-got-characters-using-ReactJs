import React from 'react'
import { useState } from 'react';
import { Card, styled, Box, Typography } from '@mui/material';

const Image = styled('img')({
    width: '100%',
    height: 300
})

const Component = styled(Card)`
width: 200px;
margin: 10px;
position: relative;
`

const Container = styled(Box)`
position: absolute;
top: 0;
color: #fff;
height: 300px;
width: 100%;
background: #000;
opacity: 0.5;
`

function Character({ value }) {

    const [toggle, setToggle] = useState(false);

    const toggleHover = () => {
        setToggle(!toggle);
    }

    return (
        value.characterImageFull ?
            <Component onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <Image src={value.characterImageFull} alt="" />
                {toggle ?
                    <Container>
                        <Typography>Name: {value.characterName}</Typography>
                        <Typography>Real Name: {value.actorName}</Typography>
                        <Typography>House: {value.houseName}</Typography>
                        <Typography>Nickname: {value.nickname}</Typography>
                    </Container>
                    : ''
                }
            </Component>
            : ''
    )
}

export default Character;