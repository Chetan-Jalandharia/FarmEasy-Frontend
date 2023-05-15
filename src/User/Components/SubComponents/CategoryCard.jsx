import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

import { Button, CardActionArea, CardActions } from "@mui/material";
// import { NavLink, useNavigate } from "react-router-dom";

export default function CategoryCard({ img, name, description }) {
  return (
    <Card sx={{ maxWidth: 300, minWidth: 280, mx: "auto"  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={ img}
          alt="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Box maxHeight={40} overflow={"hidden"}>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          sx={{ marginLeft: 1 }}
          size="small"
          variant="outlined"
          color="primary"
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}
