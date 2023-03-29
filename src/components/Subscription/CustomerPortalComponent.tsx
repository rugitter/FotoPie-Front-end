import CustomerPortalButton from "./CustomerPortalButton";
import styles from "./Subscription.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function CustomerPortalComponent() {
  return (
    <Box
      className={styles.imageSection}
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
      <Box
        sx={{
          p: "40px",
        }}
      >
        <h1>
          Manage your <span className={styles.gradientText}>FotoPie+</span>{" "}
          membership in an easy way and explore the exclusive AI image creating
          function.
        </h1>

        <Box sx={{ lineHeight: 2.5 }}>
          <ul>
            <li>
              <strong>Unlimited royalty-free downloads</strong>
            </li>
            <li>
              <strong>Exclusive AI image creating. Try it?</strong>
              <br />
              <Button
                variant="contained"
                color="primary"
                endIcon={<SendIcon />}
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: "#8777D9",
                  color: "white",
                }}
              >
                <a href="/create-image">AI image creation</a>
              </Button>
            </li>
            <li>
              <strong>
                Using AI to generate similar photos of yours. Try it?
              </strong>
              <br />
              <Button
                variant="contained"
                color="primary"
                endIcon={<SendIcon />}
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: "#8777D9",
                  color: "white",
                }}
              >
                <a href="/create-variation">AI image simulation</a>
              </Button>
            </li>
          </ul>
        </Box>
        <br />
        <CustomerPortalButton />
      </Box>

      <img src="/subscription-image.jpg" alt="" />
    </Box>
  );
}
