import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled, makeStyles } from '@mui/material/styles';
import { Avatar, Typography } from '@mui/material';
import { flexbox } from '@mui/system';
import { Big_Shoulders_Text } from '@next/font/google';
import axios from 'axios'
import axiosRequest from '../utils/axiosRequest';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#28282a' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

type User = {
  id: string;
  name: string;
  avatar: any; 
  picture: any;
}
  

export default function BasicStack() {
  
  const getAvatar = async(data:User)=>{
    try{
      const response = await axiosRequest('http://localhost/8080/api/post', "GET", data)
      if (response.status === 200){
        return response.data.avatar
      }
    
    }
    catch(error:any){
    console.log(error)
    }}

  return (
    <Box sx={{ width: '100%', marginTop:10, }}>
      <Stack spacing={5}>
      
        <Item sx={{
        display:'flex',
        justifyContent:'center',
        
        }}> 
            <Box sx={{
        display:'grid',
        // alignItem:'center',
        justifyContent:'center',
        }}>
            <Avatar>

            </Avatar>
            <Typography>Username</Typography>
            </Box>

            <Typography>
            Liked Your
            </Typography>
            <Typography>Posts</Typography>
        
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