import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCookbookRecipes } from '../../redux/cookbook/cookbook.selectors';

import { Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Button,
  CardMedia,
  Typography,
  List,
  ListItem,
  ListItemText
 } from '@material-ui/core';
 import EditIcon from '@material-ui/icons/Edit'

import useStyles from './recipe-preview.styles';

import imageUrl from '../../assets/how-to-make-sourdough-bread.jpg';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const RecipePreview = ({ handleClose, open, recipes, index }) => {

  const classes = useStyles();

  const { name, notes, ingredients } = recipes[index];

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      PaperProps={{className: classes.paper}}
      scroll="body"
    >
      <CardMedia
        className={classes.heroImage}
        image={imageUrl}
        title={name}
      />
      <DialogTitle id="alert-dialog-slide-title">{name}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {notes}
        </DialogContentText>
        <Typography variant="h6" >Ingredients</Typography>
        <List dense>
          {
            ingredients.map((item, index) => (
              <ListItem className={classes.listItem} key={index}>
                  <ListItemText
                    primary={`${item.amount} ${item.unit.name.toLowerCase()} ${'-'} ${item.ingredient.name}`}
                  />
                </ListItem>
            ))
          }
        </List>
          
      </DialogContent>
      <DialogActions>
        <Button className={classes.editButton} onClick={handleClose} color="secondary">
          <EditIcon />
          <span>Edit</span>
        </Button>
        <Button onClick={handleClose} color="primary">
          Open
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = createStructuredSelector({
  recipes: selectCookbookRecipes
})

export default connect(mapStateToProps)(RecipePreview);
