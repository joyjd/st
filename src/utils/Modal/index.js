import React from 'react';
import Btn from './../Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const Modal = ({
    headerTitle,
    children,
    textCOnfirm,
    textCancel,
    handleConfirm,
    handleClose,
    openModal,
}) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    console.log('modal executed');
    return (
        <Dialog
            fullScreen={fullScreen}
            fullWidth={true}
            maxWidth={'md'}
            open={openModal}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                {headerTitle}
            </DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <Btn
                    autoFocus
                    onClick={handleClose}
                    color="primary"
                    variant="contained"
                >
                    {textCancel}
                </Btn>
                <Btn
                    onClick={handleConfirm}
                    color="primary"
                    autoFocus
                    variant="contained"
                >
                    {textCOnfirm}
                </Btn>
            </DialogActions>
        </Dialog>
    );
};

export default React.memo(Modal);
