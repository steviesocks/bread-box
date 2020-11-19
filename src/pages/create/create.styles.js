import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    createPage: {
        padding: 0,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '60vh 60vh',
        gridGap: '20px',
    },
});

export default useStyles;

