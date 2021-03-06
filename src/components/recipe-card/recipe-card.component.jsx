import React, { useState } from 'react';

import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Typography,
    IconButton
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RecipeCardMenu from '../recipe-card-menu/recipe-card-menu.component';

import breadIcon from '../../assets/bread512.png'

import { formatDate } from '../../utils/utils';

import useStyles from './recipe-card.styles';
import RecipePreview from '../recipe-preview/recipe-preview.component';


const RecipeCard = ({ name, imageUrl, notes, dateCreated, index }) => {

    const classes = useStyles();
    
    const [previewOpen, setPreviewOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleModalOpen = () => {
        setPreviewOpen(true);
    };

    const handlePreviewClose = () => {
        setPreviewOpen(false);
    };

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea onClick={handleModalOpen}>
                    <CardMedia
                    className={classes.media}
                    image={imageUrl !== "" ? imageUrl : breadIcon}
                    title={name}
                    />
                    <CardContent className={classes.content}>
                        <Typography className={classes.title} gutterBottom variant="h6" component="h2">
                            {name}
                        </Typography>
                        <Typography className={classes.date} variant="body2" color="textSecondary" component="p">
                            {formatDate(dateCreated)}
                        </Typography>
                        <Typography className={classes.notes} variant="body2" color="textSecondary" component="p" >
                            {notes}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary" onClick={handleModalOpen}>
                            Preview
                    </Button>
                    <IconButton className={classes.moreVertIcon} size="small" onClick={handleClick}>
                        <MoreVertIcon className={classes.threeDots}/>
                    </IconButton>
                </CardActions>
                <RecipeCardMenu  
                    open={open} 
                    handleCloseMenu={handleCloseMenu} 
                    anchorEl={anchorEl} 
                    setAnchorEl={setAnchorEl} 
                    name={name}
                    index={index}
                    />
            </Card>
            <RecipePreview handleClose={handlePreviewClose} open={previewOpen} index={index} />
        </div>
    );
};

export default RecipeCard;