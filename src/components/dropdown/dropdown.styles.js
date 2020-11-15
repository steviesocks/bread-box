import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    dropdown: {
        position: 'relative',
        left: 0,
        height: '60vh',
        background: 'linear-gradient(135deg, rgba(226,226,226,0.00001) 0%, rgba(121,121,121,.3) 100%)',
        transition: 'all .75s'
    },
    hidden: {
        left: '-120%'
    }
  });

  export default useStyles;