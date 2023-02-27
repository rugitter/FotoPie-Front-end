import { GetStaticProps } from "next";
import Blog from "../src/components/Blog";

interface Post {
  title: string;
  content: string;
  url: string;
  thumbnail: string;
}

interface HomeProps {
  posts: Post[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  return <Blog posts={posts} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
