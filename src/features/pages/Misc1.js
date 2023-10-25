import React from "react";
import {
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Container,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const Misc1 = () => {
  const navigate = useNavigate();

  /* ---------------------- create chuyen route function ---------------------- */
  const handleProject = (projectId) => navigate(`/${projectId}`);
  return (
    <Grid
      container
      spacing={2}
      style={{ height: "fit-content", backgroundColor: "#7CE02E" }}
    >
      <Grid item md={6} xs={12}>
        <Box
          onClick={() => handleProject("beyond")}
          style={{
            padding: "1rem 1rem 0rem 1rem",
            cursor: "pointer",
          }}
          onMouseEnter={() =>
            (document.querySelector(
              ".responsive-heading-beyond"
            ).style.opacity = 1)
          }
          onMouseLeave={() =>
            (document.querySelector(
              ".responsive-heading-beyond"
            ).style.opacity = 0)
          }
        >
          <CardMedia
            component="img"
            alt="Card Image"
            height="70%"
            image="/Frame 14.png"
            style={{ objectFit: "cover" }}
          />
          <CardContent
            style={{
              height: "30%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              onClick={() => handleProject("consumerism")}
              variant="h1"
              className="responsive-heading-beyond"
              sx={{
                paddingBottom: "0.5rem",
                cursor: "pointer",
                opacity: 0,
                transition: "opacity 0.3s ease",
              }}
              gutterBottom
              align="center"
            >
              A conceptual project about Consumerism, 2020.
            </Typography>
          </CardContent>
        </Box>
      </Grid>

      {/* Second Component */}
      <Grid item md={6} xs={12}>
        <Box
          onClick={() => handleProject("beyond")}
          style={{
            padding: "1rem 1rem 0rem 1rem",
            position: "relative",
            cursor: "pointer",
          }}
          onMouseEnter={() =>
            (document.querySelector(
              ".custom-responsive-heading"
            ).style.opacity = 1)
          }
          onMouseLeave={() =>
            (document.querySelector(
              ".custom-responsive-heading"
            ).style.opacity = 0)
          }
        >
          <CardMedia
            component="img"
            alt="Card Image"
            height="70%"
            image="/Frame 15.png"
            style={{ objectFit: "cover" }}
          />
          <CardContent
            style={{
              height: "30%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              onClick={() => handleProject("beyond")}
              variant="h1"
              className="custom-responsive-heading"
              sx={{
                paddingBottom: "0.5rem",
                opacity: 0,
                transition: "opacity 0.3s ease",
              }}
              gutterBottom
              align="center"
            >
              Motion project for a gallery's podcast, 2021.
            </Typography>
          </CardContent>
        </Box>
      </Grid>

      {/* Third Component */}
      <Grid item xs={12}>
        <Box
          onClick={() => handleProject("okcomputer")}
          style={{
            padding: "1rem 1rem 0rem 1rem",
            position: "relative",
            cursor: "pointer",
          }}
          onMouseEnter={() =>
            (document.querySelector(
              ".okcomputer-responsive-heading"
            ).style.opacity = 1)
          }
          onMouseLeave={() =>
            (document.querySelector(
              ".okcomputer-responsive-heading"
            ).style.opacity = 0)
          }
        >
          <CardMedia
            component="img"
            alt="Card Image"
            height="70%"
            image="/Frame 16.png"
            style={{ objectFit: "cover" }}
          />
          <CardContent
            style={{
              height: "30%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              onClick={() => handleProject("okcomputer")}
              variant="h1"
              className="okcomputer-responsive-heading"
              sx={{
                paddingBottom: "0.5rem",
                opacity: 0,
                transition: "opacity 0.3s ease",
              }}
              gutterBottom
              align="center"
            >
              Redesign of Radiohead’s album, OK Computer , 2019
            </Typography>
          </CardContent>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Misc1;
