import React from 'react';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { getTitleSm, getTitle, getIcons, getTime } from './../../../helpers';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const DetailReport = ({ session, handleClose, open, pList }) => {
    const { sessionName, startTime, endTime, startDate } = session;

    return (
        <Dialog fullScreen open={open} onClose={handleClose}>
            <AppBar>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box mt={8}>
                <DialogContent>
                    {getTitleSm('Session Details')}
                    <Box>
                        <h4>{sessionName}</h4>
                        <Box>{new Date(startDate).toDateString()}</Box>
                        <Typography
                            style={{ color: '#797979' }}
                            variant="button"
                            gutterBottom
                        >
                            {getTime(
                                new Date(startTime).toTimeString().split(' ')[0]
                            )}{' '}
                            -{' '}
                            {getTime(
                                new Date(endTime).toTimeString().split(' ')[0]
                            )}
                        </Typography>
                    </Box>
                    {getTitle('Participants (' + pList.length + ')')}
                    {pList.length !== 0 ? (
                        <>
                            {pList.map((el, index) => {
                                return (
                                    <List key={index}>
                                        <ListItem
                                            style={{
                                                paddingLeft: 0,
                                                paddingRight: 30,
                                            }}
                                        >
                                            {getIcons('User')}
                                            <span style={{ paddingLeft: 5 }}>
                                                {el.empName}
                                            </span>
                                        </ListItem>
                                        <Divider />
                                    </List>
                                );
                            })}
                        </>
                    ) : (
                        <> No participants</>
                    )}
                </DialogContent>
            </Box>
        </Dialog>
    );
};

export default DetailReport;
