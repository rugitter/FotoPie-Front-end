import React from "react";
import Link from "../../utils/Link";
import styles from "../../styles/post.module.css";
import { PostListProps } from "./PostList";
import Container from "@mui/material/Container";
import { useRouter } from "next/router";

// export interface PostProps extends PostListProps {
//   url: string;
//   filename: string;
// }
export interface PostProps {
  url: string;
  filename: string;
  handleOpen: (filename: string) => void;
}

const Post = ({ url, filename, handleOpen }: PostProps) => {
  // const Post = ({ url, filename }: { url: string; filename: string }) => {
  const router = useRouter();
  // const handleClick = async () => {
  //   await router.push(`/photo-quick-view/${filename}`, undefined, {
  //     shallow: true,
  //   });
  //   handleOpen(filename);
  // };
  return (
    <div
    // href={`/photo-quick-view/${filename}`}
    // href={`/photo-quick-view/?filename=${filename}`}
    // as={`/photo-quick-view/${filename}`}
    onClick={() => handleOpen(filename)}>

      <div className={styles.container}>
        <img
          src={url}
          //srcSet={`${url}?w=100%&fit=crop&auto=format&dpr=2 2x`}
          alt=""
          loading="lazy"
          width={"100%"}
          className={styles.image}
        />
        <div className={styles.background}></div>
      </div>
    </div>
  );
};

export default Post;
