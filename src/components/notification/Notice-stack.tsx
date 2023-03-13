import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled, makeStyles } from '@mui/material/styles';
import { Avatar, Typography } from '@mui/material';
import { flexbox } from '@mui/system';
import { Big_Shoulders_Text } from '@next/font/google';
import axios from 'axios';
import axiosRequest from '../../utils/axiosRequest';
import {useState, useEffect} from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Image from "mui-image";
import { DEV_MIDDLEWARE_MANIFEST } from 'next/dist/shared/lib/constants';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#28282a' : '#e8d3ff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function BasicStack() {
  const[getAvatar, setGetAvatar]= useState([]);
  const[getUsername, setGetUsername]= useState([]);
  const[getPost, setGetPost]= useState([]);

  const[deleteMark, setDeleteMark]= useState(true);
  const[deleteIcon, setDeleteIcon]= useState(true);


  useEffect(()=>{
    const fetchData = async () =>{
      try{
        // Get User Avatar from User Schema
        const userResponse = await axiosRequest('/api/user',"GET");
        const postResponse = await axiosRequest('/api/post',"GET");
        console.log(userResponse,postResponse);
        setGetAvatar(userResponse.data.avatar)
        setGetUsername(postResponse.data.username)
        setGetPost(postResponse.data.post)
      }
      catch (error:any){
        console.log(error)
      }
      fetchData();
    } 
  },[])

    const onClickCloseButton= ()=>{
      setDeleteMark(!deleteMark)
      setDeleteIcon(!deleteIcon)
  }


  return (
    //<ul> {lists.map(list)=>{<li>}}
    <Box sx={{ width: '100%', 
    marginTop:2, }}>

    <IconButton
            size="small"
            edge="end"
            aria-label="close"
            onClick={onClickCloseButton}
            sx={{position:'relative', left:"80%", top:"5%", color:"purple" }}
            style={{display:deleteIcon ? "true" : "none"}}
          >
            <MarkChatReadIcon />
      </IconButton>
      <Stack spacing={5}
      sx={{ 
      display: 'flex', 
      justifyContent:'center',
      alignItems:'center',
      bgcolor:'secondary' }}
      >
        <Item sx={{
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        width:'70%',
        color:'primary',
        }}
        style={{backgroundColor:deleteMark ? "#e8d3ff" : "white"}}> 
            <Box sx={{
        display: 'flexbox',
        flexDirection:'row',
        alignItem:'center',
        color:'primary',
        }}>
          {/* fetch Avatar Username and Posts */}
            <Avatar alt="avatar" src={getAvatar[0]}>
            </Avatar>
            <Typography>{getUsername[0]}</Typography>
            </Box>

            <Typography>
            Liked Your
            </Typography>

            <Box>
            <Image alt="image" src={getPost[0]} style={{height:10, width:10}}/>
            </Box>
            
            {/* <IconButton
            size="small"
            edge="end"
            color="secondary"
            aria-label="close"
            onClick={onClickCloseButton}
            sx={{position:'relative', left:"10%", top:"30%" }}
            style={{display:deleteIcon ? "true" : "none"}}
            
          >
            <CloseIcon  />
            </IconButton> */}
        </Item>
      </Stack>





      <Stack spacing={5}
      sx={{ 
      display: 'flex', 
      justifyContent:'center',
      alignItems:'center',
      bgcolor:'secondary' }}
      >
        <Item sx={{
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        width:'70%',
        color:'primary',
        }}
        style={{backgroundColor:deleteMark ? "#e8d3ff" : "white"}}> 
            <Box sx={{
        display: 'flexbox',
        flexDirection:'row',
        alignItem:'center',
        color:'primary',
        }}>
          {/* fetch Avatar Username and Posts */}
            <Avatar alt="avatar" src={getAvatar[0]}>
            </Avatar>
            <Typography>{getUsername[0]}</Typography>
            </Box>

            <Typography>
            Liked Your
            </Typography>

            <Box>
            <Image alt="image" src={getPost[0]} style={{height:10, width:10}}/>
            </Box>
        
        </Item>
      </Stack>




      <Stack spacing={5}
      sx={{ 
      display: 'flex', 
      justifyContent:'center',
      alignItems:'center',
      bgcolor:'secondary' }}
      >
        <Item sx={{
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        width:'70%',
        color:'primary',
        }}
        style={{backgroundColor:deleteMark ? "#e8d3ff" : "white"}}> 
            <Box sx={{
        display: 'flexbox',
        flexDirection:'row',
        alignItem:'center',
        color:'primary',
        }}>
          {/* fetch Avatar Username and Posts */}
            <Avatar alt="avatar" src={getAvatar[0]}>
            </Avatar>
            <Typography>{getUsername[0]}</Typography>
            </Box>

            <Typography>
            Liked Your
            </Typography>

            <Box>
            <Image alt="image" src={getPost[0]} style={{height:10, width:10}}/>
            </Box>
        
        </Item>
      </Stack>


      <Stack spacing={5}
      sx={{ 
      display: 'flex', 
      justifyContent:'center',
      alignItems:'center',
      bgcolor:'secondary' }}
      >
        <Item sx={{
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        width:'70%',
        color:'primary',
        }}
        style={{backgroundColor:deleteMark ? "#e8d3ff" : "white"}}> 
            <Box sx={{
        display: 'flexbox',
        flexDirection:'row',
        alignItem:'center',
        color:'primary',
        }}>
          {/* fetch Avatar Username and Posts */}
            <Avatar alt="avatar" src={getAvatar[0]}>
            </Avatar>
            <Typography>{getUsername[0]}</Typography>
            </Box>

            <Typography>
            Liked Your
            </Typography>

            <Box>
            <Image alt="image" src={getPost[0]} width="10%"/>
            </Box>
        
        </Item>
      </Stack>


      <Stack spacing={5}
      sx={{ 
      display: 'flex', 
      justifyContent:'center',
      alignItems:'center',
      bgcolor:'secondary' }}
      >
        <Item sx={{
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        width:'70%',
        color:'primary',
        }}
        style={{backgroundColor:deleteMark ? "#e8d3ff" : "white"}}> 
            <Box sx={{
        display: 'flexbox',
        flexDirection:'row',
        alignItem:'center',
        color:'primary',
        }}>
          {/* fetch Avatar Username and Posts */}
            <Avatar alt="avatar" src={getAvatar[0]}>
            </Avatar>
            <Typography>{getUsername[0]}</Typography>
            </Box>

            <Typography>
            Liked Your
            </Typography>

            <Box>
            <Image alt="image" src={getPost[0]} width="10%"/>
            </Box>
        
        </Item>
      </Stack>
    </Box>
  );
}