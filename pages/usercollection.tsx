import { GetStaticProps } from "next";
import Collection from "../src/components/Collection";

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
  return <Collection posts={posts} />;
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
