import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import Container from "@mui/material/Container";
import FeaturedPosted from "./components/FeaturedPosted";
import Grid from "@mui/material/Grid";
import { featuredPosts } from "./data/Data";
import { PostCard } from "./components/PostCard";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [data, setData] = React.useState(true);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: data ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Header />
        <FeaturedPosted />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
export default App;
