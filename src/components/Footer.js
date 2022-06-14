import { Fragment } from 'react';
import classes from './Footer.module.css';

const Footer=(props)=>{
    return(
        <Fragment>
        {props.children}
        <div className={classes.wrapper}>
            <div>
                <h4>14zx4@queensu.ca</h4>
            </div>
            <div>
                <h4>Contact Us</h4>
            </div>
            <div>
                <h4>tel:3433335672</h4>
            </div>
        </div>
        <div>
            <h6 style={{margin:"auto",width:"100%",color:"white", textAlign:"center"}}>All Rights reserved Michael Xiang</h6>
        </div>
        </Fragment>
    )
}

export default Footer;