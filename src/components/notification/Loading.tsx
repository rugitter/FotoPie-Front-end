import { Box, CircularProgress } from "@mui/material"

//Loading components
const Loading =()=>{
    return (
    <Box sx={{display:"flex", justifyContent:'center', mt:'5%'}}>
        <CircularProgress />
    </Box>
)
}

export default Loading
    
