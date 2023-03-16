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
  console.log({ tag });
 
  
  const [category, setCategory] = useState<ResponseImageData[]>([]);
  const [page, setPage] = useState(1);
  const [loaderHandler, setLoaderHandler] = useState(true);

  const [Error, setError] = useState(null);

  let limit = 10;

  //let id = props.id;
  const fetchImages = async () => {
    try {
      //console.log(tag);
      const res = await categoryPosts( tag  , page, limit);
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

  useEffect(() => {
    if (!router.isReady) return;
    fetchImages();
    {/*categoryPosts(tag, page, limit).then((res) => {
      console.log(res);
      // if (id !== res.data.id) return router.push("/404");
      setCategory([...category, ...res.data]);
      setPage(page + 1);
      if ([...res.data].length === 0) {
        setLoaderHandler(false);
      }
    });*/}
  }, [{ tag }]);

  return (
    <>
      <NavBar isFixed={false} color="#000000" />
      <Typography
        variant="h3"
        sx={{
          ml: 5,
          mt: 5,
          fontWeight: 500,
          //fontStyle: "italic",
          //fontFamily: "Monospace",
        }}
      >
        Category: '{tag} image'
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 4, md: 6 }}
        sx={{ ml: 5, mt: 7 }}
      >
        <Button variant="outlined" href="#contained-buttons" color="secondary">
          Search Tag1
        </Button>
        <Button variant="outlined" href="#contained-buttons" color="secondary">
          Search Tag2
        </Button>
        <Button variant="outlined" href="#contained-buttons" color="secondary">
          Search Tag3
        </Button>
        <Button variant="outlined" href="#contained-buttons">
          Search Tag4
        </Button>
        <Button variant="outlined" href="#contained-buttons">
          Search Tag5
        </Button>
        <Button variant="outlined" href="#contained-buttons">
          Search Tag6
        </Button>
        <Button variant="outlined" href="#contained-buttons">
          Search Tag7
        </Button>
      </Stack>
      {/*<h1>Category: '{tag} image'</h1>*/}
      {/*<h2>{props.id}</h2>*/}
      <Box sx={{ width: "100%", height: "100%", overflowY: "scroll" }}>
        <InfiniteScroll
          dataLength={category.length}
          next={fetchImages}
          hasMore={true}
          loader={loaderHandler ? <Loader /> : <NoMore />}
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