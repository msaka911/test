import classes from "./Item.module.css"
import { useSelector } from "react-redux"
import { Fragment, useState } from "react"
import Overlay from "./Overlay"
import Card from "./Card"

const Item=(props)=>{
    const { author, id, category,url,name} = props;

    // const [disable,setDisable]=useState(false);
    // const date=useSelector((state)=>state.date)
   
    // const getDate=props.date

    // if (date>getDate){
    //     setDisable(true) 
    // }
    // else{
    //     setDisable(false) 
    // }


    const [clicked,setClicked]=useState(false)

    const clickevent=(event)=>{
        event.preventDefault();
        setClicked(true)
    }

    return(
        <Fragment>
        <button className={classes.item}  onClick={(e)=>clickevent(e)}>
          {props.children}
        </button>
        {clicked?(<Overlay clicked={clicked} setClick={setClicked}>
        <Card>
        <h2>{name}</h2>
        <label>id: {id}</label>
        <label>author: {author}</label>
        <label>category: {category}</label>
        <label>url: {url}</label>
        </Card>
        </Overlay>):""}
        </Fragment>
    )
}


export default Item;