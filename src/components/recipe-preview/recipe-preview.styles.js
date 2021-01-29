import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    dialog: {
      position: 'relative'
    },
    paper: {
      width: '600px',
      height: '90vh',
      position: 'relative'
    },
    heroImage: {
      height: '337.5px',
    },
    content: {
      position: 'sticky'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '2fr 3fr',
      position: 'sticky'
    },
    listItem: {
      padding: '0 16px',
      height: '20px'
    },
    editButton: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '80px'
    },
    steps: {
      fontSize: '1em'
    },
    p: {
      margin: 0
    }
  });

  export default useStyles;