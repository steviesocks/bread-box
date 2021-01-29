import React from 'react';

import CustomIcon from '../../custom-icon/custom-icon';
import { MenuItem } from '@material-ui/core'

import useStyles from './icon-menu-item.styles';

const IconMenuItem = ({ svg, height, alt, label, shift, active }) => {

    const classes = useStyles()

    return (
        <div className={`${classes.menuItem} ${shift && classes.shiftLeft} ${active && classes.active}` }>
            <div className={classes.itemBox}>
                <CustomIcon height={height} src={svg} alt={alt} />
            </div>
            <div className={classes.itemBox}>
                <MenuItem className={classes.menuText} disableGutters>{label}</MenuItem>
            </div>
        </div>
    )
}

export default IconMenuItem;
