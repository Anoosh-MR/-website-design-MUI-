import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import { ButtonAdd } from "./components/ButtonAdd";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box backgroundColor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <ButtonAdd />
      </Box>
    </ThemeProvider>
  );
}

export default App;
