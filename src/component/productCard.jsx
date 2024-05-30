import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import React from "react";

const ProductCard = ({ good }) => {
  if (!good) return null;

  return (
    <Card
      sx={{
        width: "100%",
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        borderRadius: "5px",
        boxShadow: "none",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "160px",
        }}
      ></div>
      <CardMedia
        component="img"
        alt={good.title}
        height="200"
        image={good.media[0]}
        title={good.title}
        sx={{
          objectFit: "contain",
          zIndex: 1,
          transition: "transform 0.3s ease-in-out", // Add transition for smooth effect
          "&:hover": {
            transform: "scale(1.1)", // Scale image on hover
          },
        }}
      />
      <IconButton
        size="small"
        aria-label="like"
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          zIndex: 2,
        }}
      >
        <FavoriteBorderOutlinedIcon fontSize="small" />
      </IconButton>
      <CardContent sx={{ flex: "1 0 auto", paddingBottom: 0 }}>
        <Typography color={"#3B3C36"} variant="subtitle1" component="h6" noWrap>
          {good.title}
        </Typography>
        <Typography mt={2} marginBottom={"5%"} variant="caption" color="" component="mark">
          {Math.floor((good.price * 12) / 100)} So'm/oyiga
        </Typography>
        <Box mt={4} marginBottom={"10%"} display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Typography variant="body2" color="textSecondary" component="del">
              {good.price - Math.floor((good.price * good.salePercentage) / 100)} So'm
            </Typography>
            <Typography sx={{ fontSize: "16px" }} variant="body2" component="span">
              {good.price} So'm
            </Typography>
          </Box>
          <IconButton size="small" aria-label="">
            <AddOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
