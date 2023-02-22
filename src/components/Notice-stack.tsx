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
import {useState, useEffect} from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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
  const[getAvatar, setGetAvatar]= useState([]);
  const[getUsername, setGetUsername]= useState([]);
  const[getPost, setGetPost]= useState([]);

  // useEffect(()=>{
  //   try{
  //     Get User Avatar from User Schema
  //     const userResponse = axiosRequest('/api/user',"GET");
  //     const postResponse = axiosRequest('/api/post',"GET");
  //     console.log(userResponse,postResponse);
  //     setGetAvatar(userResponse.avatar)
  //     setGetUsername(postResponse.username)
  //     setGetPost(postResponse.post)
  //   }
  //   catch (error:any){
  //     console.log(error)
  //   }

  // },[])

  // const getAvatar = async(data:User)=>{
  //   try{
  //     const response = await axiosRequest('http://localhost/8080/api/post', "GET", data)
  //     if (response.status === 200){
  //       return response.data.avatar
  //     }
    
  //   }
  //   catch(error:any){
  //   console.log(error)
  //   }}

  return (
    //<ul> {lists.map(list)=>{<li>}}
    <Box sx={{ width: '100%', 
    marginTop:2, }}>
      <Stack spacing={5}
      sx={{ 
      dispaly: 'flex', 
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'secondary' }}>
      
        <Item sx={{
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        width:'70%',
        color:'secondary',

        }}> 
            <Box sx={{
        display: 'flexbox',
        flexDirection:'row',
        alignItem:'center',

        }}>
          
            <Avatar>
            {/* {getAvatar.avatar} */}
            </Avatar>
            {/* <Typography>{getUsername.username}</Typography> */}
            Name
            </Box>

            <Typography>
            Liked Your
            </Typography>
            {/* <Typography>{getPost.post}</Typography> */}
            <Typography>
            Post
            </Typography>

            <IconButton
            size="small"
            edge="end"
            color="secondary"
            aria-label="close"
            sx={{position:'absolute', left:'79%'}}
          >
            <CloseIcon />
            </IconButton>
        </Item>


       
        
      </Stack>
    </Box>
  );
}