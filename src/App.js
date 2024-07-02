import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {BrowserRouter,Route,Routes} from "react-router-dom"



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "#010b1a";
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = "white"
    }
  }
  


  return (
    <>
      
      {/* <TextForm showAlert={showAlert} heading="Analyse the Text" mode={mode} /> */}

      

        <BrowserRouter>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <Routes>
            {/* <div className='container my-3' > */}
              <Route path="/" element={<TextForm showAlert={showAlert} heading="Analyse the Text" mode={mode} />} />
              <Route path="/About" element={<About mode={mode} />} />
            {/* </div> */}
            </Routes>
        </BrowserRouter>

        
      
    </>
  );
}

export default App;
