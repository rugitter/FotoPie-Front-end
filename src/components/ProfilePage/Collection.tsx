import PostList from "./CollectionPosts";

interface CollectionProps {
  profileUserId: string | string[] | undefined;
}
export default function Collection(props: CollectionProps) {
  let id = props.profileUserId;

  //console.log(id, 'debug')

  return (
    <>
      <PostList id={id as string} />
    </>
  );
}
