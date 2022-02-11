import Grid from "@mui/material/Grid";
import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Hidden from "@mui/material/Hidden";

export const PostCard = ({ post }) => {
  return (
    <Grid item sx={12} md={6}>
      <CardActionArea LinkComponent="a" href="#">
        <Card style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" style={{ color: "skyblue" }}>
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              style={{ width: 160 }}
              image={post.image}
              title={post.imageTitle}
            ></CardMedia>
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
};
