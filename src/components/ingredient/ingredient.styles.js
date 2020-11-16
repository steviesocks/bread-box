import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    paper: {
        padding: '30px',
        width: '100%'
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
          height: '50px',
          fontSize: '30px',
          textAlign: 'center'
      },
      ingredientSelect: {
          marginTop: '20px'
      },
      addButton: {
        position: 'relative'
      },
      fab: {
          position: 'absolute',
          left: '100%',
          zIndex: 1
      }
});

  export default useStyles;