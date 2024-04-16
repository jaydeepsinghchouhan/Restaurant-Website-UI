import React from "react";
import { Stack, Typography, Divider, Container, Box } from "@mui/material";
import BorderPNG from "../assets/images/border.png";
import HotItemCard from "./HotItemCard";
import Slider from 'react-slick';

function HotItems() {
  
  return (
    <>
      <Box container sx={{ paddingTop: "50px", width:'100vw' }}>
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
              &nbsp; HOT ITEMS &nbsp;{" "}
            </Typography>{" "}
          </Stack>
          <Stack item>
            <img src={BorderPNG}></img>
          </Stack>
        </Stack>
        <Stack>
          <Typography
            variant="subtitle1"
            sx={{
              paddingLeft: "5px",
              paddingTop: "20px",
              textTransform: "uppercase",
              fontFamily: "Poppins, sans-serif",
              color: "white",
            }}
          >
            Locally sourced, organic ingredients for a fresh and eco-friendly
            experience
          </Typography>
        </Stack>
        <Stack spacing={5} direction='row' width='100%' paddingTop='5%'>
          <HotItemCard/>
        </Stack>
      </Box>
    </>
  );
}

export default HotItems;
