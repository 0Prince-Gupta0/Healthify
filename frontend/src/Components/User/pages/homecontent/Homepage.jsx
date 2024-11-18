import React from "react";
import Screen from "./Slider";
import { Avatar, Grid, Typography, useTheme, Tooltip } from "@mui/material";
import h1_hero from '../../assets/h1_hero.png';
import Image from 'mui-image';
import { Box } from "@mui/system";
import Gallery from "./Gallery";

const Homepage = () => {
  const theme = useTheme();

  // Define a color palette
  const primaryColor = '#009688'; // Teal
  const secondaryColor = '#004d40'; // Darker Teal
  const backgroundColor = '#e0f2f1'; // Light Teal
  const textColor = '#333'; // Dark Gray

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ marginBottom: "60px" }}>
          <Screen />
        </Grid>

        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: '60px',
            borderRadius: "20px",
            gap: "10px",
            overflow: "hidden",
            position: "relative",
            backgroundColor: backgroundColor,
            padding: '20px',
          }}
        >
          <Grid container item sx={{ minHeight: '80vh' }} xs={12}>
            <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
              <Image
                src={h1_hero}
                shift="top"
                distance="2rem"
                shiftDuration={320}
                fit="cover"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
            </Grid>

            <Grid
              item
              xs={12} md={7}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 6,
                backgroundColor: '#ffffff',
                padding: "20px",
                borderRadius: "20px",
                boxShadow: `0 4px 8px rgba(0, 0, 0, 0.2)`,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    width: "90%",
                    maxWidth: "500px",
                    marginTop: "20px",
                    fontSize: "24px",
                    fontStyle: "italic",
                    color: textColor,
                  }}
                >
                  “I am at an age where I just want to be fit and healthy. Our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean, it will care for you hard.”
                </Typography>

                <Tooltip title="User Profile" arrow>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{
                      width: 60,
                      height: 60,
                      border: `2px solid ${primaryColor}`,
                      cursor: "pointer",
                      marginTop: "20px",
                    }}
                  />
                </Tooltip>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
          <Typography sx={{ textAlign: "center", fontSize: "36px", fontWeight: "bold", color: primaryColor }}>
            Gallery
          </Typography>
        </Grid>
        
        <Grid container item xs={12}>
          <Gallery />
        </Grid>
      </Grid>
    </>
  );
};

export default Homepage;
