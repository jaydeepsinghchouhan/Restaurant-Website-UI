import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import Slider from 'react-slick'
import HotItemPNG from '../assets/images/hotItemCardBackground.png'
import BurgerSVG from '../assets/icons/burger1.svg'
import styles from '../styles/HotItems.css'


function HotItemCard() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay:true,
    autoplaySpeed:500,
    slidesToScroll: 1,
  };
  return (
    <Box  sx={{ width:'100,  backgroundImage:`url(${HotItemPNG})`, backgroundRepeat:'no-repeat', backgroundSize:'strech'}} >
      Hello
    </Box>
  )
}

export default HotItemCard