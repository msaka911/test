import classes from './MainNavigation.module.css';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
const MainNavigation = (props) => {
  

  const username=useSelector((state)=>state.username)
  const date=useSelector((state)=>state.date)

  return (
      <Fragment>
    <header className={classes.header}>
      <div className={classes.top}>
      <h3 className={classes.logo}>{username}</h3>
      <h5 className={classes.contact}>{date}</h5>
      </div>
    </header>
    {props.children}
    </Fragment>
  );
};

export default MainNavigation;
