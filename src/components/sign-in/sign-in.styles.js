import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    paper: {
        width: '700px'
    },
    titleBar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        textTransform: 'capitalize'   
    },
    closeButton: {
        padding: '16px'
    },
    spinner: {
        color: 'white'
    },
    button: {
        width: '100px'
    },
    error: {
        color: 'red'
    }
})

export default useStyles;