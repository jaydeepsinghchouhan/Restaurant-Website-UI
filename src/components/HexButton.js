import React from 'react'
import { Box, Container, Typography } from '@mui/material';

function Button() {
  return (
    <Container
      sx={{
        position: 'relative',
        width: '10%',
        height: '100px',
        backgroundColor: 'skyblue',
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="body1">About us</Typography>
    </Container>
  )
}

export default Button