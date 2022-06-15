import { Fragment } from 'react';
import classes from './Footer.module.css';
import MainNavigation from './MainNavigation';

const Footer=(props)=>{
    return(
        <MainNavigation>
        <Fragment>
        {props.children}
        <div className={classes.wrapper}>
            <div>
                <button className={classes.button}>14zx4@queensu.ca</button>
            </div>
            <div>
                <a className={classes.link}href="https://github.com/msaka911/test"> https://github.com/msaka911/test</a>
            </div>
            <div>
                <h4>tel:3433335672</h4>
            </div>
        </div>
        <div>
            <h6 style={{margin:"auto",width:"100%",color:"white", textAlign:"center"}}>All Rights reserved Michael Xiang</h6>
        </div>
        </Fragment>
        </MainNavigation>
    )
}

export default Footer;