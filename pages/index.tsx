import * as React from 'react'
import Button from '@mui/material/Button'
import SignUp from './SignUp/signup';

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/counter/counterSlice";
import type { RootState } from "../store/store";

export default function Home() {
  return (
    <div>
      <SignUp></SignUp>
    </div>
  )
};
 
