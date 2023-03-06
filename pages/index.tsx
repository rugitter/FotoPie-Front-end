import Container from "@mui/material/Container";
import PostList from "../src/components/PostList/PostList";
import TopBar from "../src/components/TopBar";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <>
        <TopBar />
        <PostList />
      </>
    </Container>
  );
}
