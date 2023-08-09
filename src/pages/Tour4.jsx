import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageCollage from '../components/ImageCollage';

import CustomizedAccordions from '../components/Accordion';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BasicModal from '../components/Modal';

const Tour4 =()=>
  <Container sx={{width:900}}>
    <Typography variant='h3' component ='h1'marginTop={3}>
      Explore the world
    </Typography>
    <Box marginTop={3} sx={{display:'flex'}}>
      <img src="https://www.niagarafallslive.com/wp-content/uploads/skylon-dining-1325x883-250k.jpg" alt="hello" 
      height={325}/>
      <ImageCollage/>



    </Box>
    <Box>
    <Typography variant='h6' component ='h4'marginTop={3}>
     About this ticket
    </Typography>
    <Typography variant='paragraph' component ='p'marginTop={3}>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni maxime odit excepturi dicta. Quo, quos totam exercitationem aut consequatur nam rerum officia delectus fugit provident non nihil et rem ad! 
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque sit nostrum facilis rem. Ducimus harum asperiores, et nostrum minima pariatur aliquid earum obcaecati unde officiis impedit accusantium nam ut provident!
    </Typography>
    </Box>
    <Box marginBottom={10}>
    <Typography variant='h6' component ='h4'marginTop={3} marginBottom={2}>
     Frequently Asked Questions
    </Typography>
   <CustomizedAccordions/>

  
    </Box>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation showLabels>
          <BasicModal/>
        </BottomNavigation>
      </Paper> 
  </Container>

export default Tour4;