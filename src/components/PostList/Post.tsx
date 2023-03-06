import React from "react";

const Post = ({ url }: { url: string }) => {
  return (
    <img
      src={url}
      // srcSet={`${url}?w=100%&fit=crop&auto=format&dpr=2 2x`}
      alt=""
      loading="lazy"
    />
  );
};

export default Post;
