import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavBar from "../../src/components/NavBar";
import { getUserInfo } from "../../src/axiosRequest/api/user";
import ProfileHeader from "../../src/components/ProfilePage/ProfileHeader";
import ProfileGalleryAndCollection from "../../src/components/ProfilePage/ProfileGalleryAndCollection";

export interface User {
  firstName: string;
  lastName: string;
  avatarPath: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [isGallery, setIsGallery] = useState(true);
  const [profileUserId, setProfileUserId] = useState<
    string | string[] | undefined
  >("");

  const router = useRouter();
  const { id } = router.query;


 
  useEffect(() => {
    if (!router.isReady) return;
    setProfileUserId(id);
    getUserInfo(profileUserId).then(({ data }) => {
      setUser(data);
    });
  }, [profileUserId, user, router.isReady]);

  return (
    <>
      <NavBar isFixed={false} color="#000000" bgColor="#f8f8ff" />

      {user && (
        <ProfileHeader
          user={user}
          isGallery={isGallery}
          setIsGallery={setIsGallery}
        ></ProfileHeader>
      )}

      {profileUserId && (
        <ProfileGalleryAndCollection
          isGallery={isGallery}
          profileUserId={profileUserId}
        ></ProfileGalleryAndCollection>
      )}
    </>
  );
}
