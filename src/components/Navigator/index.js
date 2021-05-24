import React, { useContext } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';

import { getIcons } from './../../helpers';
import './index.css';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
}));

const Menu = [
    {
        name: 'Home',
        path: '/Home',
        icon: 'DashboardIcon',
    },
    {
        name: 'Session Room',
        path: '/SessionRoom',
        icon: 'ComputerIcon',
    },
    {
        name: 'My Reports',
        path: '/Report',
        icon: 'AssignmentIcon',
    },
];

const Navigator = ({ handleNavigation, openNav }) => {
    const classes = useStyles();
    const theme = useTheme();

    const onLogOut = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('employeeName');
        localStorage.removeItem('employeeId');
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    console.log('Navigator rendered');
    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: openNav,
                [classes.drawerClose]: !openNav,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: openNav,
                    [classes.drawerClose]: !openNav,
                }),
            }}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={() => handleNavigation(false)}>
                    {theme.direction === 'rtl' ? (
                        <ChevronRightIcon />
                    ) : (
                        <ChevronLeftIcon />
                    )}
                </IconButton>
            </div>
            <Divider />
            <List>
                {Menu.map((item, index) => (
                    <NavLink
                        activeClassName={'activeNav'}
                        to={item.path}
                        key={index}
                    >
                        <ListItem button>
                            <ListItemIcon>{getIcons(item.icon)}</ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    </NavLink>
                ))}

                <ListItem button onClick={() => onLogOut()}>
                    <ListItemIcon>{getIcons('Logout')}</ListItemIcon>
                    <ListItemText primary={'Logout'} />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Navigator;
