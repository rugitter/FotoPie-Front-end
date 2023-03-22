import  PostList  from "./CollectionPosts";

interface CollectionProps {
  id: string;
}
export default function Collection(props: CollectionProps) {
  let id = props.id;
  
  return (
    <>
      <PostList id = {id as string}/>
    </>
  );
}
