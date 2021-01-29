import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    dropdown: {
        width: '118px',
        position: 'relative',
        overflow: 'hidden',
        left: 0,
        padding: '5px 0',
        background: 'linear-gradient(135deg, rgba(226,226,226,0.00001) 0%, rgba(121,121,121,.3) 100%)',
        transition: 'all .5s'
    },
    hidden: {
        left: '-120%'
    },
    menuItem: {
        margin: '5px 0',
        color: 'white',
        opacity: .7,
        '&:hover': {
            opacity: 1,
            backgroundColor: 'rgba(255,255,255,.05)'
        },
        textTransform: 'uppercase',
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    itemBox: {
        width: '118px',
    },
    userName: {
        color: 'white',
        opacity: .7
    },
    icon: {
        opacity: .3
    }
  });

  export default useStyles;