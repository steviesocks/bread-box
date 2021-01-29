import { Icon } from "@material-ui/core";

import useStyles from './custom-icon.styles';

const CustomIcon = ({src, height, alt}) => {
    
    const classes = useStyles()

    return(
    <Icon className={classes.container}>
        <img alt={alt} src={src} style={{height}}/>
    </Icon>
)};

export default CustomIcon;