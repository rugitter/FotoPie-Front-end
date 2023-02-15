import React from 'react'
import Link from 'next/link'
import { Alert } from '@mui/material'
import Typography from "@mui/material/Typography";
import { useRouter } from 'next/router'

const Activated = () => {
  
  return (
    <section>

      <Typography component="h1" variant="h5">
        User Activation 
      </Typography>

      <Alert severity='success'>
        You have been successfully activated. You can login now! 
        <Link href='/login'>
          <a>
            Log In
          </a>
        </Link>
      </Alert>
    </section>
  )
}

export default Activated