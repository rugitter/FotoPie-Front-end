import { Button, Container, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import NavBar from "../../src/components/NavBar";
import Gallery from "../../src/components/ProfilePage/Gallery";
import Collection from "../../src/components/ProfilePage/Collection";
import { getUserInfo } from "../../src/axiosRequest/api/user";
import ProfileHeader from "../../src/components/ProfilePage/ProfileHeader";
import ProfileGalleryAndCollection from "../../src/components/ProfilePage/ProfileGalleryAndCollection";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [isGallery, setIsGallery] = useState(true);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!router.isReady) return;

    getUserInfo(id).then(({ data }) => {
      setUser(data);
    });
  }, [id, router.isReady]);

  return (
    <>
      <NavBar isFixed={false} color="#000000" bgColor="#f8f8ff" />

      <ProfileHeader
        user={user}
        isGallery={isGallery}
        setIsGallery={setIsGallery}
      ></ProfileHeader>

      <ProfileGalleryAndCollection
        isGallery={isGallery}
        id={id}
      ></ProfileGalleryAndCollection>
    </>
  );
}
