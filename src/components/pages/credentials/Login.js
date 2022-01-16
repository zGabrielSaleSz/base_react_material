import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../../store/UserSlice';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';

import { getCommonStyles } from '../../../common/Styles';

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('Please develop this feature!');
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const commonStyles = getCommonStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit Clicked");
        fakeLogin();
    };

    const handleCreateAccountClick = (e) => {
        console.log("Create Account Clicked");
    };

    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    }

    const fakeLogin = () => {
        setIsLoading(true);
        setTimeout(() => {
            setUserSession({
                id: 1,
                name: 'Gabriel Sales',
                email: 'gabriel.s479@hotmail.com',
                admin: true,
                token: ''
            });

            setIsLoading(false);
            history.push("/panel");
        }, 1000);
    }

    const setUserSession = (user) => {
        dispatch(userActions.setUser(user));
    }

    const classes = {
        container: { 
            display: 'grid', 
            gridTemplateRows:'10px auto', 
            heigth: '100%', 
            width: '100%', 
            margin: 0
        },
        card: {
            width: '60%', 
            maxWidth: '500px', 
            margin: 'auto', 
            padding: '50px'
        }
    };

    return (
        <div style={classes.container}> 
            <div className={commonStyles.smallToolBar}></div>
            <Card style={classes.card}>
                <Stack spacing={3}>
                    <Stack justifyContent="center" alignItems="center" maxWidth>
                        <img src="assets/logo.svg" height="100" width="100"/>
                    </Stack>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <Stack spacing={5}>
                            <TextField type="email" className="input" color="primary" label="Email" value={email} onChange={handleEmailInput}/>
                            <TextField type="password" className="input" color="primary" label="Password" value={password} onChange={handlePasswordInput}/>
                            <Button className="button" color="primary" variant="contained" type="submit">
                                {isLoading ? 'Loading...' : 'Login'}
                            </Button>
                            <Alert variant="outlined" severity="error" sx={{ display: errorMessage.length > 0 ? "flex" : "none"}}>
                                {errorMessage}
                            </Alert>
                        </Stack>
                    </form>
                    <Divider/>
                    <ButtonGroup orientation="vertical" fullWidth>
                        <Button color="secondary" onClick={(e) => handleCreateAccountClick(e)}>
                            Register
                        </Button>
                    </ButtonGroup>
                </Stack>
            </Card>
        </div>
    );
}
 
export default Login;