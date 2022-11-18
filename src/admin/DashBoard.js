import React from 'react';
import {Alert ,Box, Container,TextField , CircularProgress, Button}  from '@mui/material';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
// import ImageIcon from '@mui/icons-material/Image';
// import WorkIcon from '@mui/icons-material/Work';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { NavLink, useNavigate } from 'react-router-dom';


import {useGetAllTeacherQuery} from '../services/profile';
import { getToken } from '../services/localstorage';



const DashBoard = () => {
    const token = getToken('token')
    const {data} = useGetAllTeacherQuery(token)
    console.log(data,'7')



  return (



    <div>
        
        <Box>
        DashBoard



   </Box>

 { data?.map(({name,_id,createdAt})=>{
return(
    <List key={_id} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <ListItem>
     
      <ListItemText primary={name} secondary={new Date(createdAt)?.toDateString()} />
    </ListItem>
  
    
  </List>)

   })
       
}
<NavLink to ='/RegisterTeacher'>
<Box>



<Button varient="contained" >
Add New Teacher
</Button>
</Box>
</NavLink>

    </div>
  )
}

export default DashBoard