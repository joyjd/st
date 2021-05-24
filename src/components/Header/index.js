import React, { createRef } from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { getIcons } from './../../helpers';
import Box from '@material-ui/core/Box';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
}));

const Header = ({ handleNavigation, openNav }) => {
    const classes = useStyles();
    const theme = useTheme();
    const getNameInitials = () => {
        const name = localStorage.getItem('employeeName');
        const tmpArr = name.trim().split(' ');
        return tmpArr.length !== 1
            ? tmpArr[0].split('')[0].toUpperCase() +
                  tmpArr[tmpArr.length - 1].split('')[0].toUpperCase()
            : tmpArr[0].split('')[0].toUpperCase();
    };
    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: openNav,
            })}
        >
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                pr={2}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => handleNavigation(true)}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: openNav,
                        })}
                    >
                        {getIcons('MenuIcon')}
                    </IconButton>

                    <Typography variant="h6" noWrap>
                        GuidePRO
                    </Typography>
                </Toolbar>
                <Avatar
                    style={{ backgroundColor: '#081456' }}
                    aria-label="recipe"
                >
                    {getNameInitials()}
                </Avatar>
            </Box>
        </AppBar>
    );
};

export default Header;
