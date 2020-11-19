import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    cookbookPage: {
       padding: 0,
    
    },
    title: {
        color: 'white'
    },
    cookbook: {
        padding: 0,
        marginTop: '20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gridGap: '20px'
    }
});

export default useStyles;