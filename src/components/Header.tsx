import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import SearchBar from './Search/SearchBar';
import Link from '@mui/material/Link';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


export default function Header() {
  return (
    <Stack
      component='div'
      sx={{
        flexGrow: 1,
        Height: 300,
        width: '100%',
      }}
    >
      <Box
        sx={{
          mt: 8,
          ml: 'auto',
          mr: 'auto',
          // height:300,
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'column',
          alignContent: 'center',
        }}
      >
        <Typography
          variant="subtitle2"
          align='center'
          display='inline'
          color='#FFFFFF'
          sx={{ fontSize: 22, fontFamily: 'inherit', textAlign: 'left' }}
        >
          Discover moments.
          <br />
          Find inspiration.
        </Typography>

        <Paper
          sx={{
            p: '2px 4px',
            width: '100%',
            // mb: 15,
            mt: 2,
            '@media (min-width: 600px)': {
              width: 500,
            }
          }}
        >
          <SearchBar sx={{ width: '100%' }} />
       
        </Paper> 

 
        <Typography
          variant="subtitle2"
          align="center"
          display="inline"
          color="#FFFFFF"
          sx={{
            fontSize: 14,
            fontFamily: 'inherit',
            textAlign: 'left',
            mt: 1,
            mb: 15,
            lineHeight: 1.5,
            '& a': { textDecoration: 'none', mx: 0.5 },
          }}
        >
          <span style={{ fontSize: 18, opacity:0.7}}>Trending:</span>
          <Box component="span" sx={{ ml: 0.5 }}>
            <Link href="/category/flowers" color="inherit">
              Food,
            </Link>
            <Link href="#" color="inherit">
              Cars,
            </Link>
            <Link href="#" color="inherit">
              Building,
            </Link>
            <Link href="#" color="inherit">
              City,
            </Link>
            <Link href="#" color="inherit">
              Nature
            </Link>
          </Box>
          <Box display="inline-flex" alignItems="center" sx={{ marginLeft: '2px'}}>
            <Link href="/category/category-main-page" color="inherit">
              <MoreHorizIcon />
            </Link>
          </Box>
        </Typography>
      

      </Box>
      
    
    </Stack>
  );
}