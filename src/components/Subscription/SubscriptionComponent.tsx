import styles from "./";
import SubscriptionButton from "./SubscriptionButton";
import Box from "@mui/material/Box";
import Image from "mui-image";

export default function SubscriptionComponent() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
        marginTop: "30px",
        marginBottom: "60px",
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <Box sx={{ marginRight: "30px" }}>
        <h1>
          Upgrade to <span className={styles.gradientText}>FotoPie+</span> and
          start creating with exclusive, royalty-free images.
        </h1>
        <ul>
          <li>Unlimited royalty-free downloads</li>
          <li>Exclusive AI image creating</li>
          <li>Enhanced photo viewing experience</li>
        </ul>
        <SubscriptionButton />
      </Box>

      <img src="/subscription-image.jpg" alt="" />
    </Box>
  );
}
