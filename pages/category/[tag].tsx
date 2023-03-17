import { Button, Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Post from "../../src/components/PostList/Post";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../../src/components/Loader/Loader";
import Masonry from "@mui/lab/Masonry";
import NoMore from "../../src/components/Loader/NoMore";
import { categoryPosts } from "../../src/axiosRequest/api/category";
import NavBar from "../../src/components/NavBar";
import Stack from "@mui/material/Stack";
import Link from "next/link";

interface ResponseImageData {
  _id: string;
  price: number;
  tag: string;
  userEmail: string;
  imageUrl: string;
  description: string;
}

export default function CategoryInsidePage() {
  const router = useRouter();
  const { tag } = router.query;
  const tagString = tag as string;
  console.log({ tag });

  const [category, setCategory] = useState<ResponseImageData[]>([]);
  const [page, setPage] = useState(1);
  const [loaderHandler, setLoaderHandler] = useState(true);

  const [Error, setError] = useState(null);

  const [links, setLinks] = useState([]);

  let limit = 10;


  const fetchImages = async () => {
    try {
      const res = await categoryPosts(tag, page, limit);
      if (res.status === 200) {
        setCategory([...category, ...res.data]);
        setPage(page + 1);
        if ([...res.data].length === 0) {
          setLoaderHandler(false);
        }
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  const getSynonyms = async (word: string) => {
    try {
      const response = await fetch(
        `https://words.bighugelabs.com/api/2/3f3f84727a0ebebcff3c969e871a286a/${word}/json`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const synonyms = data?.noun?.syn || data?.verb?.syn || [];
      // check if the response contains synonyms for the noun or verb form of the word, otherwise return an empty array
      return synonyms;
    } catch (error) {
      console.error("Error fetching synonyms:", error);
      return [];
    }
  };

  useEffect(() => {
    if (!router.isReady) return;
    getSynonyms(tagString).then((result) => {
      // Use the resolved value here
      console.log(result);
      setLinks(result);
    });
    fetchImages();
    //}
  }, [tag]);

  return (
    <>
      <NavBar isFixed={false} color="#000000" />
      <Typography
        variant="h3"
        sx={{
          ml: 5,
          mt: 5,
          fontWeight: 500,
        }}
      >
        Category: '{tag} image'
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 4, md: 6 }}
        sx={{ ml: 5, mt: 7 }}
      >
        {links.map((link) => (
          <Link key={link} href={`/category/${link}`} passHref>
            <Button
              variant="outlined"
              href="#contained-buttons"
              color="primary"
            >
              {link}
            </Button>
          </Link>
        ))}
      </Stack>
      {/*<h1>Category: '{tag} image'</h1>*/}
      <Box sx={{ width: "100%", height: "100%", overflowY: "scroll" }}>
        <InfiniteScroll
          dataLength={category.length}
          next={fetchImages}
          hasMore={true}
          loader={loaderHandler ? <Loader /> : <NoMore />}
          //scrollThreshold={0.9}
        >
          <Masonry
            columns={{ sm: 2, md: 3 }}
            spacing={2}
            sx={{ m: "auto", mt: 15 }}
          >
            {category.map((category) => (
              <Post
                url={category.imageUrl}
                filename={category.imageUrl}
                key={category._id}
              />
            ))}
          </Masonry>
        </InfiniteScroll>
      </Box>
    </>
  );
}
