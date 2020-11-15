import React, { useRef } from 'react';
import { ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton
    } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { useDrag, useDrop } from 'react-dnd';

const RecipeItem = ({keyString, name, amount, unit, deleteIngredient, index, moveCardHandler}) => {
    
    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: 'RECIPE_INGREDIENT',
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            // Get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // Determine mouse position
            const clientOffset = monitor.getClientOffset();
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            // Time to actually perform the action
            moveCardHandler(dragIndex, hoverIndex);
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        item: { index, name, type: 'RECIPE_INGREDIENT'},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

    const opacity = isDragging ? 0.4 : 1;

    drag(drop(ref))

    return (
        <ListItem ref={ref} style={{ opacity }}>
            <ListItemText
            primary={name}
            secondary={`${amount} ${unit.toLowerCase()}`}
            />
            <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => {deleteIngredient(keyString)}}>
                <DeleteIcon />
            </IconButton>
            </ListItemSecondaryAction>
        </ListItem>        
    );
};

export default RecipeItem;