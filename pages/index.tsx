import Container from "@mui/material/Container";
import NavBar from "../src/components/NavBar";
import Header from "../src/components/Header";
import Box from "@mui/material/Box";
import { useState } from "react";
import PostList from "../src/components/PostList/PostList";

export default function Home() {
  return (
    <Container>
      <Box
        sx={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.1),
              rgba(0, 0, 0, 0.1)
            ),
            url(../../background.jpg)`,

          backgroundSize:'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          margin: 0,
          padding: 0,
          // overflow: 'hidden'

        }}
      >

        <div 
        style={{ maxWidth: '1200px', margin: '0 auto' }}
        > 
          <NavBar isFixed={true} />
          <Header />
        </div>
        

      </Box>

      <PostList />
    </Container>

  );
}
