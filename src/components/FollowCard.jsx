import { Avatar, Button, Card, CardHeader, IconButton } from "@mui/material";
import React from "react";

export const FollowCard = () => {
  return (
    <Card
      max="3"
      sx={{
        marginLeft: "30px",
        marginTop: "10px",
        width: "100%",
        height: "100%",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            src="https://randomuser.me/api/portraits/"
            aria-label="recipe"
          ></Avatar>
        }
        action={
          <IconButton>
            <Button variant="contained">Follow</Button>
          </IconButton>
        }
        title="David Smith"
        subheader="follows you"
      />
    </Card>
  );
};
