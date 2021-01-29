import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    menuText: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    menuItem: {
        position: 'relative',
        left: 0,
        margin: '5px 0',
        width: '236px',
        color: 'white',
        opacity: .7,
        '&:hover': {
            opacity: 1,
            backgroundColor: 'rgba(255,255,255,.05)'
        },
        display: 'flex',
        transition: 'all .5s'
    },
    itemBox: {
        width: '118px',
    },
    shiftLeft: {
        left: '-118px',
    },
    active: {
        background: 'linear-gradient(135deg, rgba(226,226,226,0.00001) 0%, rgba(121,121,121,.4) 100%)'
    },
})

export default useStyles;
