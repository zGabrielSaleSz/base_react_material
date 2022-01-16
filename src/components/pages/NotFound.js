import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

const NotFound = () => {
    return ( 
        <Container sx={{backgroundColor:'white'}}>
            <Stack spacing={3}>
                <Box maxWidth sx={{margin: "auto"}}>
                    <Card sx={{padding: "10px"}}>
                        <img src="/assets/404.png" alt="404" style={{width:"100%"}}/>
                    </Card>
                </Box>
                <Divider/>
                <Typography color="black" textAlign="center">
                    Hey, the page you have tried to access does not exist anymore D:
                </Typography>
            </Stack>
        </Container>
       
     );
}
 
export default NotFound;