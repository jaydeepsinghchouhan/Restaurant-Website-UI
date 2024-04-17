import { Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowSVG from '../assets/icons/offerArrow.svg'
import OfferPNG from '../assets/images/offerFood.png'

function Offer() {
  return (
    <Stack container direction='row' marginTop='7%' paddingTop='4%' sx={{backgroundColor:'#FF8616', height:'47vh'}}>
        <Grid container>
            <Grid item xs={3}>
        <Stack item alignItems='start' sx={{color:'white', paddingTop:'11%', paddingLeft:'33%'}} >
            <Typography variant='h5' fontWeight='777'>
                Get Up To
            </Typography>
            <Typography variant='h3' fontWeight='800'>50% Off</Typography>
            <Typography variant='h5' fontWeight='777'>On Your Two Order's</Typography>
            <Button size="large" variant='contained' sx={{
                      color: "orange",
                      backgroundColor: "white",
                      textDecoration: "none",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "darkorange",
                        transition: "ease-in-out 0.3s",
                      },
                    }}><Typography sx={{textTransform:'capitalize'}} variant='h6'>Order Now</Typography></Button>
        </Stack>
        </Grid>
        <Grid item xs={2}>
        <Stack item paddingLeft='11%' sx={{display:'flex', justifyContent:'flex-end', alignItems:'center', position:'relative', right:-50}} >
            <img src={ArrowSVG}></img>
        </Stack>
        </Grid>
        <Grid item xs={7} sx={{display:'flex', justifyContent:'flex-end', alignItems:'top', position:'relative', top:-97, right:10}} >
        <Stack>
            <img src={OfferPNG} style={{filter: 'drop-shadow(3px 7px 7px rgba(0, 0, 0, 0.5))'}} width='110%vw'></img>
        </Stack>
        </Grid>
        </Grid>
    </Stack>
  )
}

export default Offer