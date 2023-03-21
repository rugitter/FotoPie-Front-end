import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled, makeStyles } from '@mui/material/styles';
import { Avatar, Typography } from '@mui/material';
import { flexbox } from '@mui/system';
import axios from 'axios';
import axiosRequest from '../../utils/axiosRequest';
import {useState, useEffect} from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Image from "mui-image";
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import { getNotification } from '../../axiosRequest/api/notification';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#28282a' : '#e8d3ff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function BasicStack() {
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
  
  
  if (notifications.length === 0){
    return(
      <Box sx={{display:"flex",justifyContent:'center'}}>
        <Item sx={{width:"60%", mt:"5%"}}>
        <h1>No new notifications found</h1>
        <p>Please check back later</p>
        <Button variant="outlined" sx={{bgcolor:"white", marginTop:"2%"}} href={"/upload"}>Upload Photos</Button>
        </Item>
      </Box>
    )
  }else{return (
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
      </IconButton>
      <Stack spacing={5}
      sx={{ 
      display: 'flex', 
      justifyContent:'center',
      alignItems:'center',
      bgcolor:'secondary' }}
      >
          <Box sx={{width:"90%", display:"flex",flexDirection:"column", alignItem:"center",justifyContent:"center"}}>
          {/* to get notification mapped into Stack  */}
          {notifications.map((notification)=>(
            <Box key={notification.id} sx={{display:"flex",justifyContent:"center"}}>
              <Item sx={{
                display:'flex',
                justifyContent:'space-evenly',
                alignItems:'center',
                width:'70%',
                color:'primary',
                margin:'2px'
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
      </Stack>
    </Box>
  );
}}