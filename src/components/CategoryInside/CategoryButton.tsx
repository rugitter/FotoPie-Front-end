import { LinkOffSharp } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

interface CategoryButtonProps {
  links: never[];
  resetCategoryState: (newTag: string) => void;
}

const CategoryButton = ({ links, resetCategoryState }: CategoryButtonProps) => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 4, md: 6 }}
      sx={{ ml: 5, mt: 7 }}
    >
      {links.map((link) => (
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
        //</Link>
      ))}
    </Stack>
  );
};

export default CategoryButton;
