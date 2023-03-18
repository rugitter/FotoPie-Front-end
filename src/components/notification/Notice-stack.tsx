import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled, makeStyles } from '@mui/material/styles';
import { Avatar, Typography } from '@mui/material';
import { flexbox } from '@mui/system';
// import { Big_Shoulders_Text } from '@next/font/google';
import axios from 'axios';
import axiosRequest from '../../utils/axiosRequest';
import {useState, useEffect} from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Image from "mui-image";
// import { DEV_MIDDLEWARE_MANIFEST } from 'next/dist/shared/lib/constants';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import { getNotification } from '../../axiosRequest/api/notification';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#28282a' : '#e8d3ff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function BasicStack() {
  // const[getAvatar, setGetAvatar]= useState([]);
  // const[getUsername, setGetUsername]= useState([]);
  // const[getPost, setGetPost]= useState([]);
type Notification = {
  id: number;
  userAvatar: string;
  userName: string;
  post: string;
};
  const [notifications, setNotifications]= useState<Notification[]>([]);

  const[deleteMark, setDeleteMark]= useState(true);
  const[deleteIcon, setDeleteIcon]= useState(true);

  useEffect(()=>{
    const fetchData = async () =>{
      try{
        // Get User Avatar from User Schema
        const Response = await getNotification()
        console.log(Response)
        // setGetAvatar(Response.data.userAvatar)
        // setGetUsername(Response.data.userName)
        // setGetPost(Response.data.post)
        setNotifications(Response.data)
      }
      catch (error:any){
        console.log(error)
      } 
    } 
    fetchData();
      // setInterval(fetchData, 5000)
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
          <Box sx={{width:"90%", display:"flex",flexDirection:"column", alignItem:"center",justifyContent:"center"}}>

          {notifications.slice(0,10).map((notification)=>(
            <Box key={notification.id} sx={{display:"flex",justifyContent:"center"}}>
              <Item sx={{
                display:'flex',
                justifyContent:'space-evenly',
                alignItems:'center',
                width:'70%',
                color:'primary',
                margin:'1px'
              }}>
              <Box sx={{
                display: 'flexbox',
                flexDirection:'row',
                alignItem:'center',
                color:'primary',
                }}>
              <Avatar alt="avatar" src={notification.userAvatar}/>
              <Typography>{notification.userName}</Typography>
              </Box>
               Liked Your Post
              <img alt="image" src={notification.post} width={50} height={45}/>
              </Item>
            </Box>
          ))}
            </Box>

            {/* <Typography>
            Liked Your
            </Typography>

            <Box>
            <img alt="image" src={getPost[0]} width={40} height={40}/>
            </Box> */}
            
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
        
      </Stack>

    </Box>
  );
}