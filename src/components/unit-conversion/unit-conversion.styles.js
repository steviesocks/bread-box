import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    paper: {
      padding: '30px',
      width: '550px',
      margin: '25px auto'
    },
    calculator: {
        display: 'grid',
        gridTemplateColumns: '10fr 1fr 10fr',
        gridGap: '5px',
        padding: 0,
        margin: 'auto'
    },
    inputs: {
        padding: 0
    },
    unit: {
        width: '100%',
        position: 'relative',
        top: '-1px'
    },
    amount: {
        width: '100%'
    },
    amountInput: {
        height: '75px',
        fontSize: '30px',
        textAlign: 'center'
    },
    equals: {
        fontSize: '30px',
        fontWeight: 'bold',
        color: '#999',
        position: 'relative',
        top: '35px',
        padding: 0
    },
    ingredient: {
        padding: 0,
        marginTop: '20px',

    },
    fab: {
        position: 'relative',
        left: '275px'
    }
  });

  export default useStyles;