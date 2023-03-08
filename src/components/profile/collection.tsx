import { useRouter } from "next/router";
import axiosRequest from "../../../src/utils/axiosRequest";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

interface CollectionProps {
  id: string;
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
        //setCollection([...res.data]);
        
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
      <h2>{props.id}</h2>
    </>
  );
}
