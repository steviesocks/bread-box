import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    paper: {
      width: '600px',
      height: '90vh',
      position: 'relative',
    },
    heroImage: {
      height: '337.5px',
    },
    content: {

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
    },
    container: {
      height: '80vh',
      position: 'absolute',
      overflowY: 'auto'
    },
    actions: {
      marginTop: '81.5vh',
      borderTop: '1px solid rgba(0,0,0,.3)'
    }
  });

  export default useStyles;