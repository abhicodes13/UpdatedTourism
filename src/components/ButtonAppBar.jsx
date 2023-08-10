import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';


export default function ButtonAppBar() {
  const navigate = useNavigate();
  const handleClick = ()=>navigate('/');
  const Tour1Click = ()=>navigate('/Tour1');
  const Tour2Click = ()=>navigate('/Tour2');
  const Tour3Click = ()=>navigate('/Tour3');
  const Tour4Click = ()=>navigate('/Tour4');
  const homeClick = ()=>navigate('/');
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
        
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={homeClick}>
            Amazing Destinations
          </Typography>
          <Stack spacing={1} direction={{xs:'column', sm:'row'}} display={{xs:'none' ,sm:'inline-flex'}}>
          <Button variant='outlined' color="inherit" onClick={Tour1Click}>Casino</Button>
          <Button variant='outlined'  color="inherit" onClick={Tour2Click}>Helicopter</Button>
          <Button variant='outlined' color="inherit" onClick={Tour3Click}>Falls</Button>
          <Button variant='outlined' color="inherit" onClick={Tour4Click}>Dine</Button>
          <Button  color="inherit" onClick={handleClick}>Book Now</Button>
          </Stack>
    

        </Toolbar>
      </AppBar>
    </Box>
  );
}