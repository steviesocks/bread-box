import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCookbookRecipes } from '../../redux/cookbook/cookbook.selectors';

import { INSTRUCTIONS } from '../../utils/instructions';

import {
  Dialog,
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
  ListItemText,
  Tooltip
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit'

import useStyles from './recipe-preview.styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const RecipePreview = ({ handleClose, open, recipes, index }) => {

  const classes = useStyles();

  const { name, notes, ingredients, imageUrl } = recipes[index];

  return (
    <Dialog
      className={classes.dialog}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      PaperProps={{ className: classes.paper }}
      scroll="body"
    >
      <CardMedia
        className={classes.heroImage}
        image={imageUrl}
        title={name}
      />
      <DialogTitle id="alert-dialog-slide-title">{name}</DialogTitle>
      <DialogContent className={classes.content}>
        <DialogContentText id="alert-dialog-slide-description">
          {notes}
        </DialogContentText>
        <div className={classes.grid}>
          <div >
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
          </div>
          <div>
            <Typography variant="h6" >Instructions</Typography>
            <Typography variant="caption">(placeholder)</Typography>
            <List>
              {
                INSTRUCTIONS.map((step, index) => (
                  <ListItem key={index}>
                    <ListItemText>
                      <Typography variant="h6" className={classes.steps}>{`${index + 1}. ${step.header}`}</Typography>
                      <p className={classes.p}>{step.notes}</p>
                    </ListItemText>
                  </ListItem>
                ))
              }
            </List>
          </div>

        </div>

      </DialogContent>
      <DialogActions>
        <Tooltip title="Coming soon">
          <Button className={classes.editButton} onClick={handleClose} color="secondary">
            <EditIcon />
            <span>Edit</span>
          </Button>
        </Tooltip>
        <Tooltip title="Coming soon">
          <Button onClick={handleClose} color="primary">
            Open
          </Button>
        </Tooltip>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = createStructuredSelector({
  recipes: selectCookbookRecipes
})

export default connect(mapStateToProps)(RecipePreview);
