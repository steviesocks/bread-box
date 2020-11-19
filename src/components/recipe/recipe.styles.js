import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    paper: {
      position: 'relative',
      padding: '30px',
      width: '100%',
      gridRowEnd: 'span 2',
      overflow: 'scroll'
    },
    saveButton: {
      position: 'absolute',
      top: '45px',
      right: '30px'
    },
    clearButton: {
      textAlign: 'right'
    }
  });

  export default useStyles;