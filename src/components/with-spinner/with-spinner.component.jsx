import React from 'react';

import { CircularProgress } from '@material-ui/core'

import useStyles from './with-spinner.styles';

const WithSpinner = WrappedComponent => 
    function Comp({ isLoading, ...otherProps }) {
        const classes = useStyles();
        return isLoading ? <div className={classes.container}><CircularProgress className={classes.spinner} /></div> : 
            <WrappedComponent {...otherProps} />
};

export default WithSpinner;