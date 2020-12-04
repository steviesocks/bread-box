import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    cookbook: {
        padding: 0,
        marginTop: '20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gridGap: '20px'
    }
});

export default useStyles;