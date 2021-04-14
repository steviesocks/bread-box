import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    ingredientsTab: {
        "& > *": {
            margin: '8px 0'
        }
      },
      h6: {
        margin: 0
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
          marginTop: 0,
          width: '100%',
          position: 'relative',
          top: '-1px',
          
      },
      unitRoot: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderTop: 'none'
          },
         "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
             borderTop: '2px solid #3f51b5'
         },
         "&:hover .MuiOutlinedInput-notchedOutline": {
             borderTop: '1px solid rgba(0, 0, 0, .87)'
         }
      },
      unitSelect: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        
    
      },
      unitInput: {        
          "& .MuiSelect-nativeInput": {
              border: 'none'
          }
      },
      amount: {
          width: '100%',
          marginBottom: 0,
          borderBottomRightRadius: 0
      },
      amountRoot: {
          "& .MuiOutlinedInput-root": {
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 0
          }
      },
      amountInput: {
          height: '30px',
          fontSize: '30px',
          textAlign: 'center',
      },
      ingredientSelect: {
      },
      addButton: {
      },
}));

  export default useStyles;