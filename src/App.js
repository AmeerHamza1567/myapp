// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Form from './components/Form';
// import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const showAlert=(msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been Enabled",'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled",'success');

    }
  }
  
  return (
  <>
  {/* <Router> */}
    <NavBar title = 'TextUtil' mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container">
    {/* <Routes>
      <Route exact path="/" element={<Form heading = 'Enter text to convert' mode = {mode} showAlert = {showAlert}/>}/>
      <Route exact path="/about" element={<About/>}/>
    </Routes>
       */
    <Form heading = 'Enter text to convert' mode = {mode} showAlert = {showAlert}/>
       }
    </div>
    {/* <About/> */}
    {/* </Router> */}
  </>
  );
}

export default App;
