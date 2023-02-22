import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack'
import Image from '../../public/background.jpg'
import Container from '@mui/material/Container';

export default function Header() {


  return (
    <Container
      sx={{ 
        // flexGrow: 1,
        // Height: 300,
        width: '100%',
        // mt: 12,
        // display:'flex',
        // justifyContent:'center',
        // flexDirection:'column',
        // alignItems:'center',
        backgroundImage:`url(../../background.jpg)`,
        // backgroundSize:'cover'
      }}
    >
      <Stack
      sx={{ 
        flexGrow: 1,
        Height: 300,
        width: '100%',
        // mt: 12,
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
        backgroundImage:`url(../../background.jpg)`,
        backgroundSize:'cover'
      }}
      >
      
        <Typography  
          variant="subtitle2" 
          align='center' 
          display='inline'
          sx={{
            mt:12
          }}
        >
          Start shining.<br/>
          Start earning.<br/>
          With your beloved shots. 
        </Typography>
        
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, mb: 12}}
        >

          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>

        </Paper>
      </Stack>
    </Container>
  )
}
