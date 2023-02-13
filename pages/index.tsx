import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import Copyright from "../src/Copyright";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/counter/counterSlice";
import type { RootState } from "../store/store";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js + RTK with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>

        <Copyright />

        <div>
          <h1>The value of count is {count}</h1>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      </Box>
    </Container>
  );
}
