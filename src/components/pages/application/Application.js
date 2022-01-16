import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import { getCommonStyles } from '../../../common/Styles';

const Application = () => {
    const { user } = useSelector(state => state.user);
	const history = useHistory();
    const commonStyles = getCommonStyles();

	useEffect(() => {
		if (user.id === 0) {
			history.push('/login');
		}
	}, [user]);

    const getUserAvatar = () => {
		if(user.name) {
			const result = user.name.split(' ').map(name => name[0]);
			return result[0] + result[result.length - 1];
		}
	}

    const classes = {
        container: { 
            display: 'grid', 
            gridTemplateRows: '64px auto',
            width:'100%', 
            height: '100%'
        },
        header: {
            height: '100%', 
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'space-between',
            padding: '0px 16px',
        },
        sideHeader: {
            display: 'flex',
            flexDirection: 'row',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            gap: '8px',
        },
        burguerIcon: {
            cursor: 'pointer',
        }
    }

    return ( 
        <Box id="container" className={commonStyles.panelContainer}> 
            <Box className={commonStyles.toolBar}>
                <header style={classes.header}>
                    <div style={classes.sideHeader}>
                        <MenuIcon sx={classes.burguerIcon}/>
                    </div>
                    <div style={classes.sideHeader}>
                        <label>{user.name}</label>
                        <Avatar sx={{ bgColor: 'primary', color: 'black' }}>{getUserAvatar()}</Avatar>
                    </div>
                
                </header>
            </Box>
            Hi, I'm your main page
        </Box>
    );
}

export default Application;