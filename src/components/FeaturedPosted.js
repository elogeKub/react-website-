import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const FeaturedPosted = () => {
  return (
    <Card
      style={{
        backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRo3lA1ea50o6H5nx_M0GUHr8hd3a796c4mHsxejVNM80m8Kan704SB7gBz3OkGoELqxE&usqp=CAU)`,
        backgroundPosition: "center",
        padding: "35px 25px",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          style={{ fontSize: 30, fontFamily: "Montserrat" }}
        >
          Title of Longer
        </Typography>
        <Typography variant="h6">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
        <Button variant="text">Learn More </Button>
      </CardContent>
    </Card>
  );
};

export default FeaturedPosted;
