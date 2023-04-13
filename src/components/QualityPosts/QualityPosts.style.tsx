import { Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#28282a" : "white",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "30px",
  margin: "20px",
  padding: "30px",
  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    backgroundColor: theme.palette.mode === "dark" ? "#1c1c1e" : "#f8f8f8",
    transform: "scale(1.05)",
    transition: "background-color 0.3s ease-in-out, transform 0.3s ease-in-out",
    // Additional visual effects
    border: "2px solid #ff6f00", // Add a border on hover
    borderRadius: "50%", // Change border radius to create a circular shape on hover
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add a stronger box shadow on hover
    zIndex: 1, // Bring the component to the front on hover
    "&::before": {
      // Add a pseudo-element for a decorative element on hover
      content: "''",
      display: "block",
      position: "absolute",
      top: "-10px",
      left: "-10px",
      right: "-10px",
      bottom: "-10px",
      backgroundColor: "#ff6f00",
      opacity: 0.1,
      zIndex: -1, // Move the pseudo-element behind the component
    },
  },
}));

export default Item;
