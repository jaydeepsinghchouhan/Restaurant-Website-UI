import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import "../styles/Banner.css";
import StarPNG from "../assets/images/star.png";
import HalfStarPNG from "../assets/images/halfStar.png";
import ArrowSVG from "../assets/icons/firstArrow.svg";
import BurgerPNG from "../assets/images/burger.png";
import StarOfferPNG from "../assets/images/starOffer.png";
import PlayButtonSVG from "../assets/icons/playButton.svg";
import PlayCircleSVG from "../assets/icons/playCircle.svg";

import { Link } from "react-router-dom";

function Banner(rating) {
  if (!rating) rating = 4.5;
  return (
    <Grid container className="banner">
      <Grid item xs={4}>
        <Stack container>
          <Stack
            item
            container
            position="absolute"
            height="60px"
            backgroundColor="#FFFFFFBF"
            borderRadius="6%"
            width="200px"
            sx={{ transform: "rotate(5deg)", padding: "25px", overlay: "auto" }}
          ></Stack>
          <Stack
            item
            container
            sx={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              background: "white",
              width: "200px",
              height: "60px",
              borderRadius: "6%",
              padding: "25px",
            }}
          >
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
                <img src={StarPNG} alt=" * " />
              </Stack>
              <Stack item>
                <img src={StarPNG} alt=" * " />
              </Stack>
              <Stack item>
                <img src={StarPNG} alt=" * " />
              </Stack>
              <Stack item>
                <img src={StarPNG} alt=" * " />
              </Stack>
              <Stack item>
                <img src={HalfStarPNG} alt=" * " />
              </Stack>
              <Stack item color="#FF6947">
                {" "}
                <Typography variant="h6">
                  {" "}
                  &nbsp;&nbsp; | &nbsp; 4.5{" "}
                </Typography>
              </Stack>
            </Stack>
            <Stack item color="#FF6947">
              <Typography variant="h6"> 5k Happy review </Typography>
            </Stack>
          </Stack>
          <Stack
            sx={{
              fontWeight: "800",
              color: "white",
              paddingTop: "140px",
              width: "400px",
            }}
          >
            <Typography variant="h6" fontWeight="1000">
              Crispy, Crunchy, Veggie Deliciousness!
            </Typography>
            <Typography
              paddingTop="10px"
              variant="h3"
              fontWeight="1000"
              align="left"
            >
              Burgers That Love the Earth!
            </Typography>
            <Stack item container direction="row" paddingTop="20px">
              <Stack item>
                <Link>
                  <Button
                    size="large"
                    variant="contained"
                    sx={{
                      color: "orange",
                      backgroundColor: "white",
                      textDecoration: "none",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "darkorange",
                        transition: "ease-in-out 0.3s",
                      },
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: "600",
                        paddingLeft: "5px",
                        textTransform: "capitalize",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Explore
                    </Typography>
                  </Button>
                </Link>
              </Stack>
              <Link href="#"><Stack marginLeft="40px">
                <div
                  style={{
                    display: "absolute",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <img
                    style={{ position: "absolute", width: "43px" }}
                    src={PlayCircleSVG}
                  />
                  <img
                    style={{
                      position: "absolute",
                      paddingLeft: "14px",
                      paddingTop: "12px",
                      width: "17px",
                    }}
                    src={PlayButtonSVG}
                  />
                </div>
              </Stack>
              
                <Stack position='absolute' sx={{ paddingLeft: "92px", paddingTop: "7px" }}>
                  <Typography variant="h6" sx={{ textDecoration: "none", color:'white', fontFamily: "Poppins, sans-serif" }}>
                    Play Demo...
                  </Typography>
                </Stack>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Grid>
      <Grid
        item
        xs={2}
        sx={{ display: "flex", height: "400px", alignItems: "flex-start" }}
      >
        <Stack item position="absolute" style={{ top: 80, right: 750 }}>
          {" "}
          <img src={ArrowSVG} width="147px"></img>
        </Stack>
      </Grid>
      <Grid item xs={4} sx={{ display: "flex", justifyContent: "left" }}>
        <Stack item>
          {" "}
          <img src={BurgerPNG} width="626px"></img>
        </Stack>
        <Box
          item
          position="absolute"
          style={{
            display: "flex",
            top: 60,
            right: 600,
            justifyContent: "center",
            alignItems: "flex-end",
            color: "#FF7904",
          }}
        >
          {" "}
          <div style={{ position: "relative" }}>
            <img src={StarOfferPNG} alt="Star Offer" />
            <Typography
              variant="h6"
              style={{
                fontWeight: "800",
                position: "absolute",
                bottom: 40,
                right: 50,
                margin: "4px",
                transform: "rotate(-16deg)",
              }}
            >
              75%<br></br>
              OFF
            </Typography>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Banner;
