import { Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import BorderPNG from "../assets/images/border.png";
import ShareSVG from '../assets/icons/share.svg'
import ManSVG from '../assets/icons/man.svg'
import ManBgSVG from '../assets/icons/manRectangle.svg'


function AboutUs() {
  return (
    <Stack paddingTop='11%'>
      <Stack
          item
          container
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack item>
            <img src={BorderPNG}></img>
          </Stack>
          <Stack item>
            {" "}
            <Typography variant="h5" fontWeight="800" color="white">
              &nbsp; WHO WE ARE &nbsp;{" "}
            </Typography>{" "}
          </Stack>
          <Stack item>
            <img src={BorderPNG}></img>
          </Stack>
        </Stack>
      <Grid container paddingLeft='3%' paddingTop='11%'>
        <Grid item container xs={6} sx={{color:'white'}}>
          <Stack spacing={3} item alignItems='start'>
            <Stack><Typography variant='subtitle1' fontSize='19px' align="left">Community-Focused Initiatives Such As Partnerships With Local Farms Or Environmental Organizations.</Typography></Stack>
            <Stack><Typography textTransform='capitalize' align='left' variant='subtitle1' fontSize='19px'>Social media integration for sharing photos, reviews, and engaging with the veggie burger community.</Typography></Stack>
            <Stack width='100px'> <Divider sx={{borderBlockColor:'white'}}/></Stack>
            <Stack><Typography textTransform='capitalize' align='left' variant='subtitle1' fontSize='19px'>Nutritional information provided for each menu item, catering to health-conscious customers.</Typography></Stack>
            <Stack><Typography textTransform='capitalize' align='left' variant='subtitle1' fontSize='19px'>Wide range of veggie burger options including classic, gourmet, and customizable choices.</Typography></Stack>
            <Stack direction='row'><Stack><img width='60%' src={ShareSVG}></img></Stack><Stack> <Typography variant='subtitle1' fontSize='19px'>Sher</Typography></Stack> </Stack>
          </Stack>
        </Grid>
        <Grid item container xs={6}>
          <Stack item position='relative'>
            <img src={ManBgSVG} style={{position:'absolute', width:'90%',top:-17, right:50}}></img>
            <img  src={ManSVG} style={{position:'relative', width:'120%', top:-350, right:150}}></img>
          </Stack>
        </Grid>
      </Grid>
      </Stack>
  )
}

export default AboutUs