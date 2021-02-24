import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCookbookRecipes } from '../../redux/cookbook/cookbook.selectors';
import { createKey } from '../../utils/utils'

import breadIcon from '../../assets/bread512.png'

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
import Ingredients from './ingredients/ingredients.component';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const RecipePreview = ({ handleClose, open, recipes, index }) => {

  const classes = useStyles();

  const { name, notes, ingredients, steps, imageUrl } = recipes[index];

  const handleScroll = (event) => {
    if (event.target.scrollTop > 337.5) {
      console.log("now")
    }
  }

  return (
    <Dialog
      className={classes.dialog}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      PaperProps={{ className: classes.paper, onScroll: handleScroll }}
      scroll="body"
    >
      <div className={classes.container}>
        <CardMedia
          className={classes.heroImage}
          image={imageUrl.length ? imageUrl : breadIcon}
          title={name}
        />
        <DialogTitle id="alert-dialog-slide-title">{name}</DialogTitle>
        <DialogContent className={classes.content}>
          <DialogContentText id="alert-dialog-slide-description">
            {notes}
          </DialogContentText>
          <div className={classes.grid} >
            <Ingredients ingredients={ingredients} />
            <div>
              <Typography variant="h6" >Instructions</Typography>
              <List>
                {
                  steps.map((step, index) => (
                    <ListItem key={step.id}>
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
      </div>
      <DialogActions className={classes.actions}>
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
