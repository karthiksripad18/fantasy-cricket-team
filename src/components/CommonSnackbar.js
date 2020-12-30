import React, {useState} from 'react';

import {Snackbar} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const CommonSnackBar = ({isOpen, message, handleSnackState}) => {
    return (
        <Snackbar
            open={isOpen}
            autoHideDuration={4000}
            message={message}
            action={
                <React.Fragment>
                    <IconButton size="small" aria-label="close" color="inherit">
                        <CloseIcon onClick={() => handleSnackState(false)} fontSize="small" />
                    </IconButton>
                </React.Fragment>
            }
        />
    )
}

export default CommonSnackBar;