import './App.css';
import ReactDOM from 'react-dom';
import { Route, Routes} from 'react-router-dom';
import { Fragment } from 'react';
import Login from './components/Login';
import Main from './components/Main';
import { useSelector } from 'react-redux';
import Footer from './components/Footer';

function App() {


  const isLoggedin = useSelector(state => state.loggedin);
  


  return (
     <Footer>
      <Routes>
        {isLoggedin?<Route path='/main' element={<Main/>}/>:<Route path='*' element={<Login/>}/>}
        {isLoggedin?<Route path='/main' element={<Main/>}/>:null}
      </Routes>
      </Footer>
  );
}


export default App;
