import { Avatar, Box, Paper, Stack, styled, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotifications } from "../../../store/notification/notifyAction";
import { AppDispatch, RootState } from "../../../store/store";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#28282a' : '#e8d3ff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const NotificationList =()=>{
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
    return (
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
    )
}

export default NotificationList