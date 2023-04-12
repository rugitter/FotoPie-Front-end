import { Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#28282a" : "white",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "30px", // Change border radius to 30px
  margin: "20px", // Change margin to 20px
  padding: "30px", // Change padding to 30px
  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)", // Add box shadow
  "&:hover": {
    backgroundColor: theme.palette.mode === "dark" ? "#1c1c1e" : "#f8f8f8", // Change background color on hover
    transform: "scale(1.05)", // Add scaling effect on hover
    transition: "background-color 0.3s ease-in-out, transform 0.3s ease-in-out", // Add transition effect on hover
  },
}));

export default Item;
