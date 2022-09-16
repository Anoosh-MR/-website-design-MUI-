import { Box, Typography, Avatar, AvatarGroup } from "@mui/material";
import React from "react";
import { Conversation } from "./Conversation";
import { FollowCard } from "./FollowCard";

const RightBar = () => {
  return (
    <Box
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px 0px"
      flex={2}
      p="2"
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
        <Typography marginLeft="20px" variant="h5" fontWeight="300" mt="10px">
          Online
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Rems Sharp"
            src="https://randomuser.me/api/portraits/men/41.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://randomuser.me/api/portraits/men/42.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://randomuser.me/api/portraits/men/49.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://randomuser.me/api/portraits/men/53.jpg"
          />
          <Avatar
            alt="Rems Sharp"
            src="https://randomuser.me/api/portraits/men/41.jpg"
          />
          <Avatar
            alt="Rems Sharp"
            src="https://randomuser.me/api/portraits/men/41.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://randomuser.me/api/portraits/men/49.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://randomuser.me/api/portraits/men/53.jpg"
          />
          <Avatar
            alt="Rems Sharp"
            src="https://randomuser.me/api/portraits/men/41.jpg"
          />
        </AvatarGroup>
        <Typography marginLeft="20px" variant="h5" fontWeight="300" mt="10px">
          People
        </Typography>
        <Box>
          <FollowCard />
          <FollowCard />
          <FollowCard />
        </Box>
        <Typography marginLeft="20px" variant="h5" fontWeight="300" mt="10px">
          Conversations
        </Typography>
        <Conversation />
      </Box>
    </Box>
  );
};

export default RightBar;
