import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
      margin: '25px auto'
    },
    logoBg: {
      height: '70px',
      width: '70px',
      borderRadius: '50%',
      padding: '10px',
      '&:hover': {
        background: 'linear-gradient(135deg, rgba(226,226,226,0.00001) 0%, rgba(121,121,121,.3) 100%)'
      }
    },
    logo: {
        height: '50px',
        transition: 'all .75s'
    },
    rotate: {
      transform: 'rotate(180deg)'      
    }
  });

  export default useStyles;