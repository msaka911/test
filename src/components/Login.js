import { useRef,useState } from "react"
import { stateActions } from '../store/store';
import { useAlert } from 'react-alert'
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import classes from "./Login.module.css"
import Calendar from 'react-calendar';
import logo from "./favicon.png"
import Overlay from "./Overlay"
import 'react-calendar/dist/Calendar.css';

const Login=()=>{
    const loggedin = useSelector((state) => state.loggedin);
    const navigate=useNavigate()
    const alert = useAlert()
    const dispatch = useDispatch();
    const [value, onChange] = useState(new Date());


    const[visible,setVisible]=useState(false);

    const username=useRef();

    if(loggedin){
      navigate("/main")
    }
     
    const submit=async(event)=>{
        event.preventDefault();
        if (username.current.value.length>20 || username.current.value.length<2){
            alert.error("please input 2-20 characters")
            return
        }
    
        const bodyParameters = {
            displayName: username.current.value,
            displayDate: value.toISOString().split('T')[0]
        }
        
        const axios = require('axios');
        await axios.post('https://wemi-round2-server.herokuapp.com/round2/authentication',
        bodyParameters,
        ).then((response)=>{
            dispatch(stateActions.setState(true));
            dispatch(stateActions.setToken(response.data.access_token))
            dispatch(stateActions.setUsername(username.current.value));
            dispatch(stateActions.setDate(value.toISOString().split('T')[0]));
            navigate('/main');
            }
        ).catch((e)=>{
            alert.error("authentification faild, try it again")
        })
        }


    return(
        <form className={classes.form} onSubmit={submit}>
            <img src={logo}/>
            <div className={classes.username}>
                    <input placeholder="username" ref={username}></input>
            </div>
            <div className={classes.date}>
                    <label onClick={()=>setVisible(true)} >{value.toISOString().split('T')[0]}</label>
                    {visible?<Overlay clicked={visible} setClick={setVisible}><Calendar onChange={onChange} value={value} className={classes.calender}/></Overlay>:""}
            </div>
            <button>Get Token</button>
        </form>
    )
}


export default Login;