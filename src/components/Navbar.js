import React from 'react';
import { Grid, InputBase, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import BurgerPNG from '../assets/images/burgerLogo.png';
import '../styles/Navbar.css'
import SearchSVG from '../assets/icons/searchIcon.svg'
import ShoppingBagSVG from '../assets/icons/shoppingBag.svg'
import MenubarSVG from '../assets/icons/menubar.svg'


const Navbar = () => {

  return (
    <Stack container className='navbar' style={{ position:'relative ', zIndex:'2'}} direction='row'>
      <Stack item paddingLeft='25px' direction='row' >
          <img className='logo' src={BurgerPNG} style={{width:'33px'}} alt="Logo" />
          &nbsp; <Typography className='textShadow' variant='h5'>
            &nbsp; Burger</Typography>
      </Stack>
      <Stack item container direction='row' spacing={2} className='textShadow'>
        <Stack item ><Typography variant='h6'> &nbsp; Home</Typography></Stack>
        <Stack item ><Typography variant='h6'> &nbsp; Shop</Typography></Stack>
        <Stack item ><Typography variant='h6'> &nbsp; Manuel</Typography></Stack>
        <Stack item ><Typography variant='h6'> &nbsp; Order</Typography></Stack>
        {/* </Stack> */}
      </Stack>
      <Stack item container spacing={3} direction='row' paddingRight='30px' >
        <Stack> <img className='icons'  src={SearchSVG} alt="search icon"/> </Stack>
        <Stack> <img className='icons'  src={ShoppingBagSVG} alt="shopping bag icon"/> </Stack>
        <Stack> <img className='icons'  src={MenubarSVG} alt="Menubar icon"/> </Stack>
      </Stack>
    </Stack>
  );
}

export default Navbar;

