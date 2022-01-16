
import { makeStyles } from '@mui/styles';

const toolbarHeight = 64;
const toolbarColor = 'linear-gradient(139deg, rgb(251, 136, 23), rgb(211 112 71), rgb(193, 33, 39), rgb(139 0 0))';

export const commonSx = {
    stackMobile: {
        display: 'flex',
        flexDirection: {
            xs: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
        },
        gap: 2

    },
    buttonMobile: {
        width: {
            xs: '100%',
            sm: '100%',
            md: '100%',
            lg: 'auto',
            xl: 'auto',
        }
    },
    containerMobile: {
        width: "100%",
        minWidth: "250px",
        margin: 'auto',
    },
    displayMobile: {
        display: {
            xs: 'flex',
            sm: 'flex',
            md: 'none',
            lg: 'none',
            xl: 'none'
        }
    },
    hideMobile: {
        display: {
            xs: 'none',
            sm: 'none',
            md: 'flex',
            lg: 'flex',
            xl: 'flex'
        }
    },

};

export const getCommonStyles = makeStyles((theme) => {
    return {
        smallToolBar: {
            backgroundImage: toolbarColor,
            height: '10px',
            width:'100%'
        },
        toolBar: {
            minHeight: toolbarHeight,
            backgroundImage: toolbarColor,
            
        },
        title: {
            color: theme.palette.primary.main,
            fontSize: '1.5rem',
            fontWeight: 'bold',
            borderBottom: '3px solid gray',
            marginBottom: '10px'
        },
        panelContainer: {
            display: 'grid',
            gridTemplateRows: `${toolbarHeight}px auto`,
            width: '100%',
        },
        panelChild: {
            padding: theme.spacing(2)
        },
        containerMobile: {
            margin: {
                sm: '0px',
                main: 30
            }
        },
        fontBold: {
            fontWeight: 'bold'
        },
        hyperLink: {
            textDecoration: 'underline',
            color: '#5B8FA7',
            fontWeight: 'bold',
            '&:hover': {
                cursor: 'pointer'
            }
        }
    }
});