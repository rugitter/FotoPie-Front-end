import Container from "@mui/material/Container";
import NavBar from "../src/components/NavBar/NavBar";
import Header from "../src/components/Header";
import Box from "@mui/material/Box";
import PostList from "../src/components/PostList/PostList";
import { useCheckToken } from "../src/hooks/useCheckToken";
import { MemoryRouter } from "react-router";

export default function Home() {
  return (
    <MemoryRouter>
      <Container>
        <Box
          sx={{
            backgroundImage: `
              linear-gradient(
                rgba(0, 0, 0, 0.1),
                rgba(0, 0, 0, 0.1)
              ),
              url(../../background.jpg)`,

            backgroundSize: "cover",
            margin: 0,
            padding: 0,
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <NavBar isFixed={true} />
            <Header />
          </div>
        </Box>

        <PostList />
      </Container>
    </MemoryRouter>
  );
}
