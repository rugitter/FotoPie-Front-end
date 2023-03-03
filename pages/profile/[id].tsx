import { Container } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axiosRequest from "../../src/utils/axiosRequest";

export default function ProfilePage() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [avatar, setAvatar] = useState("");

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    
    axiosRequest(`/api/user/${id}`, "GET").then((res) => {
      console.log(res);
      setLastName(res.data.lastName);
      setFirstName(res.data.firstName);
      setAvatar(res.data.avatar);
    });
  }, [id]);

  return (
    <Container maxWidth="lg">
      <h1>Profile Page</h1>
      <div>
        {/* <Image
          src={`${avatar}`}
          alt="avatar"
          width={200}
          height={200}
        /> */}
      </div>
      <div>
        <p>{lastName}</p>
        <p>{firstName}</p>
      </div>
    </Container>
  );
}
