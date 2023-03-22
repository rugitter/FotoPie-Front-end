import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled, makeStyles } from '@mui/material/styles';
import { Avatar, CircularProgress, Typography } from '@mui/material';
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
import { useSelector, useDispatch } from 'react-redux'
import { fetchNotifications } from '../../../store/notification/notifyAction';
import { AppDispatch, RootState } from '../../../store/store';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#28282a' : '#e8d3ff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function BasicStack() {

  // const [notifications, setNotifications]= useState<Notification[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const {notifications, status} = useSelector((state:RootState) => state.notifySlice)
  const [loading, setLoading] = useState(true)

  //fetch data
  useEffect(()=>{
    dispatch(fetchNotifications());
  },[dispatch]);

  useEffect(()=>{
    if (status === 'succeeded'){
      setLoading(false);
    }
  },[status]);

  if(status === 'loading' || status === "idle"){
    return(
      <Box sx={{display:"flex", justifyContent:'center', mt:'5%'}}>
        <CircularProgress />
      </Box>
    )
  } else if (notifications.length === 0){
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
            <a href={`/photo-quick-view/${notification.directFilename}`} style={{ textDecoration: 'none' }} >
            <Box key={notification.id} sx={{display:"flex",justifyContent:"center"}}>
              
              <Item sx={{
                display:'flex',
                justifyContent:'space-evenly',
                alignItems:'center',
                width:'70%',
                color:'primary',
                margin:'2px'
              }}
             >
              <Box sx={{
                display: 'flexbox',
                flexDirection:'row',
                alignItem:'center',
                color:'primary',
                }}>
              <Avatar alt="avatar" src={notification.userAvatar}/>
              <Typography>{notification.userName}</Typography>
              </Box>
               <Typography>Liked Your Post</Typography>
              <img alt="image" src={notification.post} width={50} height={45}/>
              </Item>
              
            </Box>
            </a>
          ))}
            </Box>
      </Stack>
    </Box>
  );
}}