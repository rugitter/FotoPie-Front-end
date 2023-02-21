import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled, makeStyles } from '@mui/material/styles';
import { Avatar } from '@mui/material';
import { flexbox } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// const displayContent:any = makeStyles({
//     root: {
//         display: flexbox,
//         justifycontent: 'center',
//     }

// })
export default function BasicStack() {
// const classes = displayContent()
  return (
    <Box sx={{ width: '100%', marginTop:10 }}>
      <Stack spacing={5}>
        <Item>
            
            <div>
            <Avatar></Avatar>
            Liked your photo
            </div>
        </Item>
        <Item>
            Liked your photo
        </Item>
        <Item>
            Liked your photo
          </Item>
      </Stack>
    </Box>
  );
}