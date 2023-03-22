import Button from "@mui/material/Button";

interface CategoryButtonProps {
  link: string;
  resetCategoryState: (newTag: string) => void;
}

const CategoryButton = ({ link, resetCategoryState }: CategoryButtonProps) => {
  return (
    <Button
      key={link}
      variant="outlined"
      color="primary"
      onClick={() => {
        resetCategoryState(link);
      }}
    >
      {link}
    </Button>
  );
};

export default CategoryButton;
