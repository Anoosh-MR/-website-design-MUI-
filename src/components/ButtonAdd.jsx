import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import {
  EmojiEmotions,
  Add,
  PersonAdd,
  VideoCameraBack,
  Image,
  DateRange,
} from "@mui/icons-material";
import React from "react";
import { useState } from "react";

const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

export const ButtonAdd = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Add Button"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%-25px)", md: 30 },
        }}
        onClick={(event) => setOpen(true)}
      >
        <Fab color="primary" aria-label="Add">
          <Add />
        </Fab>
      </Tooltip>

      <StyleModal
        open={open}
        onClose={(event) => setOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          backgroundColor={"background.default"}
          color="text.primary"
          width={400}
          height={280}
          borderRadius={5}
          padding={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant="span" fontWeight="500">
              David John
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="Whats on you mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} marginTop={2} marginBottom={3}>
            <EmojiEmotions />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
            borderRadius="500"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyleModal>
    </>
  );
};
