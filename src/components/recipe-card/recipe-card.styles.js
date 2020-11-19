import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        minWidth: '100px',
    },
    media: {
        height: '200px',
        position: 'relative'
    },
    moreVert: {
        position: 'absolute',
        top: 0,
        left: '100px',
    },
    threeDots: {

    },
    content: {
        height: '140px',
        overflow: 'hidden',
    },
    title: {
        lineHeight: 1.43
    },
    date: {
        marginBottom: '5px'
    },
    notes: {
        textOverflow: 'ellipsis'
    },
    cardActions: {
        justifyContent: 'space-between'
    }
});

export default useStyles;