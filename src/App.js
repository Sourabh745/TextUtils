import React,{useState} from 'react';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
  const[changeText, SetChangeText] = useState('Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    }) 
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      SetChangeText('Light Mode');
      document.body.style.backgroundColor = '#6f42c1';
      showAlert('Dark Mode has been enabled' , 'success');
    }
    else{
      setMode('light');
      SetChangeText('Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert('light Mode has been enabled','success');
    }
  }
  const chngGreen = () =>{
    document.body.style.backgroundColor = 'Green';
  }
  
  return (
    <Router>

      <Navbar title="TextUtils" About="About us" mode={mode} toggleMode={toggleMode} changeText={changeText} chngGreen={chngGreen}/>
      <Alert alert = {alert}/>
      <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element={<div className="container"><TextForm showAlert={showAlert} heading = "Enter your text to analyze" mode={mode} /></div>}/>
         
      </Routes>
    </Router>
  );
}

export default App;
