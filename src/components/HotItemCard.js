import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import HotItemPNG from "../assets/images/hotItemCardBackground.png";
import BurgerSVG from "../assets/icons/burger1.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import ShoppingBagSVG from "../assets/icons/shoppingBag.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

function HotItemCard() {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2345,
    swipeToSlide:true,
    prevArrow: <ArrowCircleLeftRoundedIcon fontSize='large' sx={{color:'white',  "&:hover": { color:"white" }, position: 'absolute', top: '50%', left: '7', zIndex: '1', marginLeft: '-27px'}} />, 
    nextArrow: <ArrowCircleRightRoundedIcon fontSize="large" sx={{color:'white', "&:hover": { color:"white" }, position: 'absolute', top: '50%', right: '7', zIndex: '1', marginRight: '-27px'}} />,
    customPaging: function(i) { 
      return (
        <div
          style={{
            position:'absolute',
            bottom:'-300%',
            color: 'white',
            fontSize: '24px',
          }}
        >
          &#8226;
        </div>
      );
    }
  };

  return (
    <Container >
    <Stack sx={{textAlign:'center', position:'relative', paddingBottom:'7%',  right:-145}}>
      <Slider {...settings}>
        
        <div>
          <Stack
            sx={{
              height: "400px",
              width: "260px",
              backgroundImage: `url(${HotItemPNG})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%", 
              position: "relative",
            }}
          >
            <Link to='/'>
              <Stack>
                <FavoriteBorderIcon
                  sx={{ color: "white", position: "absolute", top: "7%", right: "11%", zIndex:'1' }}
                />
              </Stack>
            </Link>
            <Stack
              sx={{
                position: "absolute",
                top: "55%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <img src={BurgerSVG} style={{ width: "400px" }} alt="Burger" />
              <Typography
                variant="h6"
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "28.5%",
                  color: "white",
                  fontWeight: "800",
                  paddingTop: "3%",
                }}
              >
                Veg Crispy Burger
              </Typography>
              <Stack
                spacing={10}
                direction="row"
                sx={{
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  top: "66%",
                  right: "22%",
                }}
              >
                <Stack>
                  <Typography variant="h6" sx={{ color: "white" }}>
                    ₹ 250.00
                  </Typography>
                </Stack>
                <Link>
                  <Stack>
                    <img width="60%" src={ShoppingBagSVG} alt="Shopping Bag" />
                  </Stack>
                </Link>
              </Stack>
              <Stack
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  position: "absolute",
                  top: 350,
                  right: 90,
                }}
              >
                <Link>
                  <ArrowForwardIcon sx={{ color: "white" }} />
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </div>
        <div>
          <Stack
            sx={{
              height: "400px",
              width: "260px",
              backgroundImage: `url(${HotItemPNG})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%", 
              position: "relative", 
              marginTop:'35%'
            }}
          >
            <Link>
              <Stack>
                <FavoriteBorderIcon
                  sx={{ color: "white", position: "absolute", top: "7%", right: "11%", zIndex:'1' }}
                />
              </Stack>
            </Link>
            <Stack
              sx={{
                position: "absolute",
                top: "55%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <img src={BurgerSVG} style={{ width: "400px" }} alt="Burger" />
              <Typography
                variant="h6"
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "28.5%",
                  color: "white",
                  fontWeight: "800",
                  paddingTop: "3%",
                }}
              >
                Veg Crispy Burger
              </Typography>
              <Stack
                spacing={10}
                direction="row"
                sx={{
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  top: "66%",
                  right: "22%",
                }}
              >
                <Stack>
                  <Typography variant="h6" sx={{ color: "white" }}>
                    ₹ 250.00
                  </Typography>
                </Stack>
                <Link>
                  <Stack>
                    <img width="60%" src={ShoppingBagSVG} alt="Shopping Bag" />
                  </Stack>
                </Link>
              </Stack>
              <Stack
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  position: "absolute",
                  top: 350,
                  right: 90,
                }}
              >
                <Link>
                  <ArrowForwardIcon sx={{ color: "white" }} />
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </div>
        <div>
          <Stack
            sx={{
              height: "400px",
              width: "260px",
              backgroundImage: `url(${HotItemPNG})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%", // Stretch the background image
              position: "relative", // Add position relative to position absolute children
            }}
          >
            <Link>
              <Stack>
                <FavoriteBorderIcon
                  sx={{ color: "white", position: "absolute", top: "7%", right: "11%", zIndex:'1' }}
                />
              </Stack>
            </Link>
            <Stack
              sx={{
                position: "absolute",
                top: "55%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <img src={BurgerSVG} style={{ width: "400px" }} alt="Burger" />
              <Typography
                variant="h6"
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "28.5%",
                  color: "white",
                  fontWeight: "800",
                  paddingTop: "3%",
                }}
              >
                Veg Crispy Burger
              </Typography>
              <Stack
                spacing={10}
                direction="row"
                sx={{
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  top: "66%",
                  right: "22%",
                }}
              >
                <Stack>
                  <Typography variant="h6" sx={{ color: "white" }}>
                    ₹ 250.00
                  </Typography>
                </Stack>
                <Link>
                  <Stack>
                    <img width="60%" src={ShoppingBagSVG} alt="Shopping Bag" />
                  </Stack>
                </Link>
              </Stack>
              <Stack
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  position: "absolute",
                  top: 350,
                  right: 90,
                }}
              >
                <Link>
                  <ArrowForwardIcon sx={{ color: "white" }} />
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </div>
        <div>
          <Stack
            sx={{
              height: "400px",
              width: "260px",
              backgroundImage: `url(${HotItemPNG})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              position: "relative",
              marginTop:'35%'
            }}
          >
            <Link>
              <Stack>
                <FavoriteBorderIcon
                  sx={{ color: "white", position: "absolute", top: "7%", right: "11%", zIndex:'1' }}
                />
              </Stack>
            </Link>
            <Stack
              sx={{
                position: "absolute",
                top: "55%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <img src={BurgerSVG} style={{ width: "400px" }} alt="Burger" />
              <Typography
                variant="h6"
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "28.5%",
                  color: "white",
                  fontWeight: "800",
                  paddingTop: "3%",
                }}
              >
                Veg Crispy Burger
              </Typography>
              <Stack
                spacing={10}
                direction="row"
                sx={{
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  top: "66%",
                  right: "22%",
                }}
              >
                <Stack>
                  <Typography variant="h6" sx={{ color: "white" }}>
                    ₹ 250.00
                  </Typography>
                </Stack>
                <Link>
                  <Stack>
                    <img width="60%" src={ShoppingBagSVG} alt="Shopping Bag" />
                  </Stack>
                </Link>
              </Stack>
              <Stack
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  position: "absolute",
                  top: 350,
                  right: 90,
                }}
              >
                <Link>
                  <ArrowForwardIcon sx={{ color: "white" }} />
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </div>
      </Slider>
    </Stack>
    </Container>
  );
}

export default HotItemCard;
