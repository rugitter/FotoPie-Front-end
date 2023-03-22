import { Typography } from "@mui/material";

interface CategoryHeaderProps {
  tag: string;
}

export default function CategoryHeader({ tag }: CategoryHeaderProps) {
  return (
    <Typography
      variant="h3"
      sx={{
        ml: 5,
        mt: 5,
        fontWeight: 500,
      }}
    >
      Category: '{tag} image'
    </Typography>
  );
}
