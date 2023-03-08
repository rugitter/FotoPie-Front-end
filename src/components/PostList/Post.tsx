import React from "react";
import Link from "../../utils/Link";

const Post = ({ url, filename }: { url: string; filename: string }) => {
  return (
    <Link href={filename}>
      <img
        src={url}
        //srcSet={`${url}?w=100%&fit=crop&auto=format&dpr=2 2x`}
        alt=""
        loading="lazy"
        width={"100%"}
      />
    </Link>
  );
};

export default Post;
