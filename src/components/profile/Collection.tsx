import { useRouter } from "next/router";
import axiosRequest from "../../../src/utils/axiosRequest";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

interface CollectionProps {
  id: string;
}

interface ResponseImageData {
  collect_user_email: string;
  collected_user_email: string;
  imageUrl: string;
  _id: string;
}

export default function Collection(props: CollectionProps) {
  const [collection, setCollection] = useState([]);
  const fetchImages = async () => {
    try {
      const res = await axiosRequest(
        `/api/user-collect/${props.id}`,
        "GET"
      );
      if (res.status === 200) {
        console.log(res.data)
        const imageUrlArray = res.data.map((image: ResponseImageData) => image.imageUrl);
        console.log(imageUrlArray)
        setCollection(imageUrlArray);
        console.log(collection)
        
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <h1>Collection</h1>
      {/*<h2>{props.id}</h2>*/}
      <ImageList sx={{ width: 1000, height: 900 }} cols={3} rowHeight={328}>
        {collection.map((item) => (
          <ImageListItem key={item}>
            <img
              src={`${item}?w=328&h=328&fit=crop&auto=format`}
              srcSet={`${item}?w=328&h=328&fit=crop&auto=format&dpr=2 2x`}
              
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      {/*<Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 1, sm: 0.5, md: 0.5 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
          columnSpacing={{ xs: 1, sm: 1, md: 0.5 }}
        >
          {collection.map((image,index) => (
            <Grid item key={image.id} xs={12} sm={6} md={4}>
              <img
                src={image}
                style={{
                  height: "300px",
                  width: "300px",
                  objectFit: 'cover'
                }}
              />
            </Grid>
          ))}
        </Grid>
              </Box>*/}
    </>
  );
}
