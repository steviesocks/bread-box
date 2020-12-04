import React from 'react';

import { CircularProgress } from '@material-ui/core'

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? <CircularProgress /> : 
        <WrappedComponent {...otherProps} />
};

export default WithSpinner;