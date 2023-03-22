import { Box, Button, Paper, styled } from "@mui/material"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#28282a' : '#e8d3ff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
const NoNotification = ()=>{
    return(
        <Box sx={{display:"flex",justifyContent:'center'}}>
        <Item sx={{width:"60%", mt:"5%"}}>
        <h1>No new notifications found</h1>
        <p>Please check back later</p>
        <Button variant="outlined" sx={{bgcolor:"white", marginTop:"2%"}} href={"/upload"}>Upload Photos</Button>
        </Item>
      </Box>
    )
}

export default NoNotification