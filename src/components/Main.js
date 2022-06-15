import { Fragment, useEffect,useState} from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { stateActions } from '../store/store';
import classes from "./Main.module.css"
import Item from './Item';
const axios = require('axios');

const Main=()=>{
    
    const [healthCare,setHealth]=useState([]);
    const [finance,setFinance]=useState([]);
    const [tech,setTech]=useState([]);

    const token=useSelector((state)=>state.token)

    const[data,setData]=useState([])

    const config = {
        headers: { Authorization: `Bearer ${token}`,
                  },
        
    };

    useEffect(()=>{
          axios.post('https://wemi-round2-server.herokuapp.com/round2/get-products',"",config)
          .then(function (response) {
            setData(response.data.products)
            }
            )
          .catch(function (error) {
            alert.error("cannot load the page")
          })
          
        },[])

    useEffect(()=>{
        if (data){
            setHealth(data.filter(item=>{
                return item.category==="Health Care"
            }));
            setFinance(
                data.filter(item=>{
                    return item.category==="Finance"
                })
            );
            setTech(
                data.filter(item=>{
                    return item.category==="Technology"
                })
            )
        }
    },[data])
    
  
    console.log(data)

    return(
        <Fragment>
            <div className={classes.wrapper}>
                <div>
                <h3>Health Care</h3>
                {healthCare?.map(items=>{
                    return(
                    <Item name={items.name} key={items.id} data={items.finish_date} id={items.id} author={items.author} category={items.category} url={items.url}>
                        <label>{items.name}</label>
                    </Item>
                    )
                })}
                </div>
                <div>
                <h3>Finance</h3>
                {finance?.map(items=>{
                    return(
                    <Item>
                        <label>{items.name}</label>
                    </Item>
                    )
                })}
                </div>
                <div>
                <h3>Technology</h3>
                {tech?.map(items=>{
                    return(
                    <Item>
                        <label>{items.name}</label>
                    </Item>
                    )
                })}
                </div>
            </div>
        </Fragment>
        )
}

export default Main;